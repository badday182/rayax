import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ApplyPacientInfoButton from "./applyPacientInfoButton";
import { useSelector, useDispatch } from "react-redux";
import { renderToString } from "react-dom/server";

import Button from "react-bootstrap/Button";

import {
  editExamNumber,
  editExamDate,
  editExamName,
  editExamBirthYear,
  resetPacientInfoSliseReducer,
} from "./redux/slices/pacientInfoSliseReducer";

import { PacientInfoPattern } from "../patternsText/pacientInfoPattern";

import { addDocText } from "./redux/slices/documentSliseReducer";
import { initialExamNumber } from "../data/initialExamNumber";

// function PacientInfo() {
const PacientInfo = ({ editorContent }) => {
  const textToDoc = renderToString(PacientInfoPattern());

  const [acceptNotice, setAcceptNotice] = useState(null);

  // useEffect(() => {
  //   setAcceptNotice(
  //     <div className="overlay"></div>
  //   );
  // }, []);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleApplyButtonClick = () => {
    editorContent();
    dispatch(addDocText({ textToDoc }));

    setAcceptNotice(
      <div className="overlay">
        {/* <h1>Інформація про пацієнта успішно збережена</h1> */}
      </div>
    );
    dispatch(resetPacientInfoSliseReducer());
    setButtonDisabled(true); // Устанавливаем disabled в true после нажатия кнопки

    //предыдущий раз вводили число? задаем автоматику для номера следующего исследования
    if (examState !== initialExamNumber){
      dispatch(editExamNumber(+examState + 1));
    }
   
  };

  const dispatch = useDispatch();

  // Значение по умолчанию - сегодняшняя дата
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  //  Обработчик для поля "Дата"
  const handleDateChange = (e) => {
    const inputValue = e.target.value;
    setSelectedDate(inputValue);
    const formattedDate = inputValue.split("-").reverse().join(".");
    dispatch(editExamDate(formattedDate));


    return selectedDate;
  };
  let initialExamDefaultValue ='№ дослідження'
  const examState = useSelector((state) => state.pacientInfo.examNumber);
  if (examState !== initialExamNumber){
    initialExamDefaultValue = +examState
  }

  const [naprav, setNaprav] = useState(null);
  // const napravState = useSelector((state) => state.pacientInfo.examNumber);
  const handleNapravChange = (e) => {
    // Регулярное выражение для разрешенных символов (цифры, точка, слеш)
    const inputValue = e.target.value;
    const pattern = /^[0-9\/]+$/;

    if (!pattern.test(inputValue)) {
      e.target.value = inputValue.slice(0, -1); // Удаляем последний недопустимый символ
      dispatch(editExamNumber(e.target.value));
      setNaprav(e.target.value);
    } else {
      dispatch(editExamNumber(inputValue));
      setNaprav(inputValue);
    }
  };

  const [name, setName] = useState();
  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    // dispatch(editExamNumber('111'));
    // Регулярное выражение для разрешенных символов (украинские буквы и символы)
    const pattern = /^[а-яА-ЯЇЇіі'\s,\.]+$/u;

    if (!pattern.test(inputValue)) {
      e.target.value = inputValue.slice(0, -1); // Удаляем последний недопустимый символ
      dispatch(editExamName(e.target.value));
      setName(e.target.value);
    } else {
      dispatch(editExamName(inputValue));
      setName(inputValue);
    }
  };

  // Обработчик для поля "Рік народження", чтобы ограничить ввод 4 цифрами

  const [birthYear, setBirthYear] = useState();
  const handleBirthYearChange = (e) => {
    const inputValue = e.target.value;
    // Регулярное выражение для разрешенных символов (цифры, не более 4)
    const pattern = /^\d{0,4}$/;

    if (!pattern.test(inputValue)) {
      e.target.value = inputValue.slice(0, 4); // Ограничиваем ввод до 4 цифр
      dispatch(editExamBirthYear(e.target.value));
      setBirthYear(e.target.value);
    } else {
      dispatch(editExamBirthYear(inputValue));
      setBirthYear(inputValue);
    }
  };
  return (
    <div className="p-3 form-container mb-4 bg-light bg-gradient rounded-3 text-dark border border-secondary">
        {acceptNotice}
      <div>
        <Form className=" mb-3   ">
          <Row className="mb-2">
            <Form.Group as={Col} controlId="date">
              <Form.Label>Дата дослідження</Form.Label>
              <Form.Control
                // placeholder="Дата дослідження"
                type="date"
                defaultValue={selectedDate}
                // onChange={(date) => setSelectedDate(date)}
                onChange={handleDateChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="imagine">
              <Form.Label>№ дослідження</Form.Label>
              <Form.Control
              // {initialExamDefaultValue != '' ? {}}
                // placeholder="№ дослідження"
                placeholder={initialExamDefaultValue}
                type="text"
                // defaultValue={naprav}
                onChange={handleNapravChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="pacientName">
              <Form.Label>П.І.Б пацiента</Form.Label>
              <Form.Control
                placeholder="П.І.Б"
                type="text"
                onChange={handleNameChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="birthYear">
              <Form.Label>Рік народження</Form.Label>
              <Form.Control
                placeholder="Рік народження"
                type="number"
                onChange={handleBirthYearChange}
              />
            </Form.Group>
          </Row>

          {/* <ApplyPacientInfoButton /> */}
        </Form>
      </div>
      <Button
        variant="success"
        className="me-2"
        onClick={handleApplyButtonClick}
        disabled={buttonDisabled}
      >
        Apply
      </Button>{" "}
    </div>
  );
};

export default PacientInfo;
