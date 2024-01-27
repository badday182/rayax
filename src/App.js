import "./App.css";
/**
 * Bootstrap  вже майже вмер, краще юзати https://tailwindcss.com/,
 * або якийсь інший css  акуймворк або компілятор
 * **/
import "bootstrap/dist/css/bootstrap.min.css";

import React, {useEffect, useRef, useState} from "react";
import {renderToString} from "react-dom/server";
import {useSelector} from "react-redux/es/hooks/useSelector";
import {PacientInfoPattern} from "./patternsText/pacientInfoPattern";

import {PacientCard} from "./components/PacientCard.js";
import {ClearAllBtn} from "./ui/components/buttons/ClearAll";
import TextEditor from "./ui/components/textEditor/TextEditor";


const App = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    const patientState = useSelector((state) => state.creatingPatient.patientCounter);
    const documentText = useSelector((state) => state.documentText);

    const pacientInfo = renderToString(PacientInfoPattern());

    /**
     *  Для чого в тебе прокрутка на сторінці якщо в тебе сайт не скролібєльний? :)
     **/
    const scrollToBottom = () => {
        // if (editorRef.current) {
        //   const editorBody = editorRef.current.getBody();
        //   editorBody.scrollTo(0, editorBody.scrollHeight);
        // }
        const editorContainer = document.querySelector(".mce-content-body ");
        if (editorContainer) {
            editorContainer.scrollIntoView({behavior: "smooth", block: "end"});
        }
    };
    useEffect(() => {
        // Прокрутка вниз при инициализации
        scrollToBottom();
    }, []);

    const closeBanner = () => {
        setIsBannerVisible(false);
    };

    useEffect(() => {
        setTimeout(() => setIsBannerVisible(true), 10000)
    }, [])

    return (
        /**
         * Саме головне, не роби лєнти JSX  це просто анріал розібратись шо куда і до чого ...
         *  Діли все на компоненти, принципи SOLID тобі в допомогу!
         **/

        // <div className=" m-auto conteinerWidht d-flex flex-row p-3 position-relative ">
        <div className="conteinerWidht d-flex justify-content-center flex-wrap p-3">
            {/* <div className=" me-3 p-3 rounded-3 border pacientStore"> */}
            {/** в такий випадках краще не юзати тернарку а заюзати && простіше менше тексту,
             не потрібна пуста строка
             <div className={`banner rounded-3 ${isBannerVisible && "hidden"}`}>
             **/}
            <div className={`banner rounded-3 ${isBannerVisible ? "" : "hidden"}`}>
                <div className="content">
                    <button id="closeBanner" onClick={closeBanner}>
                        &times;
                    </button>
                    {" "}
                    {/*
                    Теги без стилів... Тут можуть бути трабли з головним файлом css,
                     якщо в проекті використовується якась тема, то тут можу бути нюанси з стилями)
                     */}
                    <p>На каву ₴ розробнику</p>
                    <div className="logo privat-logo">
                        {/* Старайся привчати себе відразу писати в одному стилі в плані пропсів...
                            По типу всі пропси в дужках, або ж всі пропси через стрінгу, не міксуй їх так сильно,
                            дуже ріже очі, а тебе за такий стиль по голові не почухають)
                            <img loading={'lazy'}
                                 style={{backgroundColor: 'white'}}''
                                 src={'https://d2z9uwnt8eubh7.cloudfront.net/media/default/0001/19/ac94eecabd0d3d915ab3ba18b6c4de6f22ad7dfe.png'}
                                 alt={'ПриватБанк лого'}
                            />

                        */}
                        <img
                            /** Не забувай про перформанс, ця картинка легковажна,
                             *  але можуть бути супер важка картинки і потрібно часто
                              думати про окрему загрузку картинок і тд...
                              **/
                            loading={"lazy"}
                            style={{backgroundColor: "white"}}
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
            {/** Отут ти мене трошки в ступор завів)
                Для чого ти ререндериш повністю всю бізнес логіку кожного разу як додається новий пацієнт?
                Тим більше ти мапиш її. Тобто якшо в тебе в patientState буде 2 iD  то в тебе на сторінці
                згенерується зразу 2 однакових таблички з функціоналом, а що буде як ти прикрутиш сюди якусь
                базу даних ів ній буде 1000 пацієнтів, це ж буде просто треш) я б цю логіку взагалі повністю видалив)
                А зберігав би дані тільки для пацієнта окремо.
             **/}
            <div className="pacientBlock mb-4 mx-4">
                {patientState.map((option) => (
                        <PacientCard
                            editorContent={documentText ?? null}
                            key={option.id}
                            id={option.id}
                        />
                    )
                )}
                {/** Ось так набагато ж чистіше **/}
                <ClearAllBtn/>
                {/**
                 Доречі, якщо потрібно почистити сторедж, це найгірша ідея покласти пусту строку в айтем
                 в localStorage  є методи clear(): void; або removeItem(key: string): void;
                 краще їх використовувати, в залежності який тобі краще підходить для бізнес логіки!
                 Такаж сама іторія для твого локального стору, потрібно додати нову функцію очищення,
                 а ніж класти пусту строку в стор!
                 **/}
                {/*            dispatch(addTextFromEditor("")); // Обнуляет текстовый редактор*/}
                {/*            localStorage.setItem("textToDoc", ""); // Обнуляет localStorage*/}

            </div>
                <TextEditor />

        </div>
    );
};

export default App;
