import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import PacientInfo from "./components/complexLayouts";

import { BlockButton } from "./components/addBlockButton";

import { ImagineOptions } from "./components/ImagineOptions";

import { Editor } from "@tinymce/tinymce-react";

const App = () => {
  // const [imagineOptions, setImagineOptions] = useState([{ id: 0 }]);

  const zoneState = useSelector((state) => state.creatingZones.zoneCounter);

  // const addImagineOptions = () => {
  //   const newId = uuidv4();
  //   const newImagineOption = { id: newId };
  //   setImagineOptions([...imagineOptions, newImagineOption]);
  // };

  // const deleteImagineOptions = (id) => {
  //   if (imagineOptions.length !== 1) {
  //     const updatedImagineOptions = imagineOptions.filter(
  //       (option) => option.id !== id
  //     );
  //     setImagineOptions(updatedImagineOptions);
  //   }
  // };

  // console.log(zoneState)

  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  const editorRef = useRef();
  return (
    <div className=" m-auto conteinerWidht d-flex flex-row p-3">
      <div className=" mb-4 me-4 rounded-3 border pacientCard">
        <PacientInfo />
        {zoneState.map((option) => (
          <ImagineOptions
            key={option.id}
            id={option.id}

            // onDelete={(id) => deleteImagineOptions(id)}
            // onAddOptions={addImagineOptions}
          />
        ))}

        {/* <BlockButton className="mt-3" onClick={addImagineOptions} /> */}
      </div>
      <>
        <Editor
          // apiKey='your-api-key'
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
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
      </>
    </div>
  );
};

export default App;
