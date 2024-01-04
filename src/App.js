import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useRef, useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { renderToString } from "react-dom/server";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import { BlockButton } from "./components/addBlockButton";
import Button from "react-bootstrap/Button";

import { ImagineOptions } from "./components/ImagineOptions";

import { Editor, tinymce } from "@tinymce/tinymce-react";
import { PacientInfoPattern } from "./patternsText/pacientInfoPattern";

import { PacientCard } from "./components/PacientCard.js";
import { addTextFromEditor } from "./components/redux/slices/documentSliseReducer.js";
import TooltipWithImage from "./components/TooltipWithImage.js";

const App = () => {
  const dispatch = useDispatch();

  const patientState = useSelector(
    (state) => state.creatingPatient.patientCounter
  );

  const docTex = useSelector((state) => state.creatingDocument.documentText);

  const editorRef = useRef();
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  // tinymce.activeEditor.setContent("<p>Hello world!</p>");
  // editorRef.current.setContent("<p>Hello world!</p>");

  // const pacientInfo = pacientInfoPattern().props.children
  const pacientInfo = renderToString(PacientInfoPattern());
  // console.log(pacientInfo);
  // document.querySelector('#')
  // EditorContent = editorRef.current.getContent()
  const editorContent = () => {
    // const text = renderToString(editorRef.current.getContent());
    const content = editorRef.current.getContent();
    // console.log('content', content);
    // console.log(text);
    dispatch(addTextFromEditor(content));
  };
  const scrollToBottom = () => {
    // if (editorRef.current) {
    //   const editorBody = editorRef.current.getBody();
    //   editorBody.scrollTo(0, editorBody.scrollHeight);
    // }
    const editorContainer = document.querySelector(".mce-content-body ");
    if (editorContainer) {
      editorContainer.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  // let editorContent =  editorRef.current.getContent()
  useEffect(() => {
    // Прокрутка вниз при инициализации
    scrollToBottom();
  }, []);
  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    // <div className=" m-auto conteinerWidht d-flex flex-row p-3 position-relative ">
    <div className="conteinerWidht d-flex justify-content-center flex-wrap p-3">
      {/* <div className=" me-3 p-3 rounded-3 border pacientStore"> */}

      <div className={`banner rounded-3 ${isBannerVisible ? "" : "hidden"}`}>
        <div className="content">
          <button id="closeBanner" onClick={closeBanner}>
            &times;
          </button>{" "}
          <p>На каву ₴ розробнику</p>
          <div className="logo privat-logo">
            <img
              style={{ backgroundColor: "white" }}
              src="https://d2z9uwnt8eubh7.cloudfront.net/media/default/0001/19/ac94eecabd0d3d915ab3ba18b6c4de6f22ad7dfe.png"
              alt="ПриватБанк лого"
            />
          </div>
          <div className="logo mono-logo">
            <img
              src="https://asset.brandfetch.io/id-CBRc8NA/idEsOSs4jS.jpeg?updated=1674203441813"
              alt="Монобанк лого"
            />
          </div>
          <p>------</p>
          <a
            className="m-0 logo telegram-logo"
            href="https://t.me/Raya_X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="m-0"
              // dataTooltip="AAAAAAAAAAAA"
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
              alt="Телеграм лого"
            />
          </a>
        </div>
      </div>

      <div className="pacientBlock mb-4 mx-4">
        {patientState.map((option) => (
          <PacientCard
            editorContent={editorContent}
            key={option.id}
            id={option.id}
          />
        ))}
      </div>
      <div className="mh-100 d-flex flex-column align-items-end">
        <div className="mb-2">
          <Editor
            apiKey="62kbbg7407jjlea01hu71w9axyixiyxitsr8wtho4lnck72p"
            onInit={(evt, editor) => (editorRef.current = editor)}
            // initialValue=""
            // initialValue={pacientInfo}

            initialValue={docTex}
            init={{
              selector: "#myTextarea",
              height: 650,
              width: 700,
              content_css: "/src/tineContent.css",

              setup: function (editor) {
                editor.on("init", function () {
                  editor.getBody().scrollTo(0, editor.getBody().scrollHeight);
                });
                editor.on("change", function () {
                  editor.getBody().scrollTo(0, editor.getBody().scrollHeight);
                });
                editor.on("keyup", function () {
                  editor.getBody().scrollTo(0, editor.getBody().scrollHeight);
                });
              },
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "pagebreak",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
              ],
              toolbar:
                "print | pagebreak | " +
                " undo redo | blocks | " +
                "bold italic forecolor | ",
              content_style:
                "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; padding: 1rem;}  table { width: 100%; border-collapse: collapse; border: 2px solid white; border-color: white; } tbody, th, tr, td { border: 2px solid white; border-color: white; border-style: solid; } td {padding: 0.4rem;} h1,h2,h3,h4,h5,h6 {margin: 5px 5px;} ",
            }}
          />
        </div>
              <button
          type="button"
          class="btn btn-outline-warning"
          onClick={() => {
            const content = editorRef.current.getContent();
            const parser = new DOMParser();
            const decodedHTML = parser.parseFromString(content, "text/html")
              .body.textContent;
            dispatch(addTextFromEditor(decodedHTML));
          }}
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default App;
