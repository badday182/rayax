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

const App = () => {
  const zoneState = useSelector((state) => state.creatingZones.zoneCounter);
  const docTex = useSelector((state) => state.creatingDocument.documentText);

  const editorRef = useRef();

  // tinymce.activeEditor.setContent("<p>Hello world!</p>");
  // editorRef.current.setContent("<p>Hello world!</p>");

  // const pacientInfo = pacientInfoPattern().props.children
  const pacientInfo = renderToString(PacientInfoPattern());
  // console.log(pacientInfo);
  // document.querySelector('#')


  return (
    <div className=" m-auto conteinerWidht d-flex flex-row p-3 position-relative">
      <div className=" me-3 p-3 rounded-3 border pacientStore">
        {/* <div className=" rounded-3 border p-3 pacientCard">
          <PacientInfo />
          {zoneState.map((option) => (
            <ImagineOptions key={option.id} id={option.id} />
          ))}
          <Button variant="success" size="lg" className="w-100">
            + Add new Patient
          </Button>
        </div> */}

        <PacientCard />
        {/* <PacientCard/> */}
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
              "print" +
              " undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        {/* <button onClick={log}>Log editor content</button> */}
        {/* <button
          onClick={() => {
            // editorRef.current.setContent(pacientInfo);
          }}
        >
          Log editor content
        </button> */}
      </>
    </div>
  );
};

export default App;
