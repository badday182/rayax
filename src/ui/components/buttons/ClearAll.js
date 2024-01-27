import React from "react";
import {clearTextEditor} from "../../../store/slices/documentSliseReducer";
import {VscClearAll} from "react-icons/vsc";
import {useDispatch} from "react-redux";

/**
 * Подібного типу данні потрібно виносити в окремі константи чи глобальні файли,
 * хардкодити їх в розмітку погана практика, а як потрібно буде перевикористати дані
 * стрінгу чи виправиити щось в ній... як її потім в масштабах проекту шукати і виправляти,
 * це ж купа часу витрачається!
 * **/
const confirmationMsg = "Ви впевнені, що хочете очистити редактор? Всі ваші описи НАЗАВЖДИ видаляться, вороття не буде"

export const ClearAllBtn = () => {
    const dispatch = useDispatch()

    const handleClearAll = () => {
        const confirmed = window.confirm(confirmationMsg);
        if (confirmed) {
            dispatch(clearTextEditor()); // Обнуляет текстовый редактор
            localStorage.removeItem('textToDoc'); // Обнуляет localStorage
        }
    }
    return (
        <button onClick={handleClearAll}
                className={"btn btn-danger btn-sm"}
                type={"button"}
        >
            Очистити редактор <VscClearAll size={18}/>
        </button>
    )
}
