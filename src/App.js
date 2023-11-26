import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useRef } from "react";
import { renderToString } from "react-dom/server";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import PacientInfo from "./components/pacientInfo";

import { BlockButton } from "./components/addBlockButton";
import Button from "react-bootstrap/Button";

import { ImagineOptions } from "./components/ImagineOptions";

import { Editor } from "@tinymce/tinymce-react";
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
  // let editorContent =  editorRef.current.getContent()
  return (
    <div className=" m-auto conteinerWidht d-flex flex-row p-3 position-relative ">
      {/* <div className=" me-3 p-3 rounded-3 border pacientStore"> */}
      <div className="pacientBlock">
        {patientState.map((option) => (
          <PacientCard editorContent={editorContent} key={option.id} id={option.id} />
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
            height: 600,
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
              "autosave",
              "lists",
              "link",
              "image",
              "charmap",
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
              "help",
              "wordcount",
            ],
            toolbar:
              "print | restoredraft" +
              " undo redo | blocks | " +
              "bold italic forecolor | " +
              " | help",
            content_style:
              "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; padding: 1rem;} table { width: 100%; border-collapse: collapse; border: 2px solid white; border-color: white; } tbody, th, tr, td { border: 2px solid white; border-color: white; border-style: solid; } td {padding: 0.4rem;} h1,h2,h3,h4,h5,h6 {margin: 5px 5px;} ",
          }}
        />
        {/* <button
          onClick={() => {
            // editorRef.current.setContent(pacientInfo);
          }}
          >
          Log editor content
        </button> */}
      </>
      {/* <button onClick={editorContent}>Log editor content</button> */}
    </div>
  );
};

export default App;
