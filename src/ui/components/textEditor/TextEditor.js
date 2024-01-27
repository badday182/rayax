import React, {useRef} from 'react'
import {Editor} from "@tinymce/tinymce-react";
import {editorConfig} from "./config";
import {useSelector} from "react-redux/es/hooks/useSelector";
import {addTextFromEditor} from "../../../store/slices/documentSliseReducer";
import {useDispatch} from "react-redux";

const key = "62kbbg7407jjlea01hu71w9axyixiyxitsr8wtho4lnck72p"

const TextEditor = () => {
    const dispatch = useDispatch()
    const docTex = useSelector((state) => state.creatingDocument.documentText);
    const editorRef = useRef();

    React.useEffect(() => {
        if (editorRef.current) {
            // берет текст с эдитора
           dispatch(addTextFromEditor(editorRef.current?.getContent()));
        }
    }, [editorRef.current])
  return (
      <Editor
          apiKey={key}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={docTex}
          init={editorConfig}
      />
  )
}

export default TextEditor
