import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import { PacientInfoPattern } from "./patternsText/pacientInfoPattern";
import { PacientCard } from "./components/PacientCard.js";
import { addTextFromEditor } from "./components/redux/slices/documentSliseReducer.js";
import { Analytics } from "@vercel/analytics/react";
import Banner from "./components/Banner/Banner.jsx";
import ButtonEditorCleaner from "./components/Button_EditorCleaner/Button_EditorCleaner.js";
import TextEditor from "./components/TextEditor/TextEditor.js";

const App = () => {
  const dispatch = useDispatch();

  const patientState = useSelector(
    (state) => state.creatingPatient.patientCounter
  );

  const docTex = useSelector((state) => state.creatingDocument.documentText);

//   const editorRef = useRef();
const [editorRef, setEditorRef] = useState(null);

  const pacientInfo = renderToString(PacientInfoPattern());

  const editorContent = () => {
    const content = editorRef.current.getContent(); //берет текст с эдитора
    dispatch(addTextFromEditor(content));
  };
 
  return (
    <div className="conteinerWidht d-flex justify-content-center flex-wrap p-3">
      <Banner />
      <div className="pacientBlock mb-4 mx-4">
        {patientState.map((option) => (
          <PacientCard
            editorContent={editorContent}
            key={option.id}
            id={option.id}
          />
        ))}

        <ButtonEditorCleaner title="Очистити редактор" />
      </div>
      <>
        {/* <Editor
          apiKey="62kbbg7407jjlea01hu71w9axyixiyxitsr8wtho4lnck72p"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={docTex}
          init={{
            selector: "#myTextarea",
            browser_spellcheck: true,
            spellchecker_language: "uk",
            contextmenu: true,
            language: "uk",
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
        /> */}
        <TextEditor docTex={docTex} setEditorRef={setEditorRef}/>
      </>
      <Analytics />
    </div>
  );
};

export default App;
