import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useRef, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import PacientInfo from "./components/PacientInfo.js";

import { BlockButton } from "./components/addBlockButton";
import Button from "react-bootstrap/Button";

import { ImagineOptions } from "./components/ImagineOptions";

import { Editor, tinymce } from "@tinymce/tinymce-react";
import { PacientInfoPattern } from "./patternsText/pacientInfoPattern";

import { PacientCard } from "./components/PacientCard.js";
import { addTextFromEditor } from "./components/redux/slices/documentSliseReducer.js";

const App = () => {
  const dispatch = useDispatch();

  const patientState = useSelector(
    (state) => state.creatingPatient.patientCounter
  );

  const docTex = useSelector((state) => state.creatingDocument.documentText);

  const editorRef = useRef();

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
    // console.log({text});
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
  return (
    <div className=" m-auto conteinerWidht d-flex flex-row p-3 position-relative ">
      {/* <div className=" me-3 p-3 rounded-3 border pacientStore"> */}

      {/* <div id="supportBanner" class="banner">
    <div class="content">
      <p>Поддержи разработчика</p>
      <img src="privatbank_logo.png" alt="ПриватБанк лого">
      <img src="monobank_logo.png" alt="Монобанк лого">
      <img src="telegram_logo.png" alt="Телеграм лого">
    </div>
    <button id="closeBanner">&times;</button>
  </div> */}
      {/* <div id="supportBanner" className="banner rounded-3">
        <div className="content">
          <button id="closeBanner">&times;</button>
          <p>Підтримай розробника</p>
          <img
            src="https://new-thepage.fra1.digitaloceanspaces.com/live/media/86774/conversions/privatbank-r0-square_medium.jpg?v=1603812987"
            alt="ПриватБанк лого"
          />
          <img
            src="https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/12/68/33/126833ce-8663-7d73-0e4b-303233bbc698/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
            alt="Монобанк лого"
          />
          <img
            src="https://i0.wp.com/www.uooptkk.ru/wp-content/uploads/2022/07/telegram-logo.png?fit=900%2C764"
            alt="Телеграм лого"
          />
        </div>
      </div> */}

      <div className="pacientBlock">
        {patientState.map((option) => (
          <PacientCard
            editorContent={editorContent}
            key={option.id}
            id={option.id}
          />
        ))}
        {/* <PacientCard editorContent={editorContent} /> */}
      </div>
      <>
        <Editor
          apiKey="62kbbg7407jjlea01hu71w9axyixiyxitsr8wtho4lnck72p"
          onInit={(evt, editor) => (editorRef.current = editor)}
          // initialValue=""
          // initialValue={pacientInfo}

          initialValue={docTex}
          init={{
            selector: "#myTextarea",
            // height: 600,
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
              "code",
              // "help",
            ],
            toolbar:
              "print | pagebreak | " +
              " undo redo | blocks | " +
              "bold italic forecolor | ",
            content_style:
              "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; padding: 1rem;} table { width: 100%; border-collapse: collapse; border: 2px solid white; border-color: white; } tbody, th, tr, td { border: 2px solid white; border-color: white; border-style: solid; } td {padding: 0.4rem;} h1,h2,h3,h4,h5,h6 {margin: 5px 5px;} ",
          }}
        />
        {/* <button onClick={() => {}}>skroll</button> */}
      </>
      {/* <button onClick={editorContent}>Log editor content</button> */}
    </div>
  );
};

export default App;
