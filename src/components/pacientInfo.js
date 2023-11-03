import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ApplyPacientInfoButton from "./applyPacientInfoButton";
import { useSelector, useDispatch } from "react-redux";
import { renderToString } from "react-dom/server";

import Button from 'react-bootstrap/Button'

import {
  editExamNumber,
  editExamDate,
  editExamName,
  editExamBirthYear,
} from "./redux/slices/pacientInfoSliseReducer";

import { PacientInfoPattern } from "../patternsText/pacientInfoPattern";

import { addDocText } from "./redux/slices/documentSliseReducer";




function PacientInfo() {
  const textToDoc = renderToString(PacientInfoPattern());

  const [acceptNotice, setAcceptNotice] = useState(null);

  // useEffect(() => {
  //   setAcceptNotice(
  //     <div className="overlay"></div>
  //   );
  // }, []);
  const handleApplyButtonClick = () => {
    // const formattedDate = selectedDate.split("-").reverse().join(".");
    
    // dispatch(editExamDate(formattedDate));
    // dispatch(editExamNumber(naprav));
    // dispatch(editExamName(name));
    // dispatch(editExamBirthYear(birthYear));
    
    // dispatch(addDocText({formattedDate, naprav, name, birthYear}));
    dispatch(addDocText({textToDoc}));
    

    setAcceptNotice(
      <div className="overlay">
        {/* <h1>Інформація про пацієнта успішно збережена</h1> */}
      </div>
    );
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

    // console.log(inputValue);
    // const pattern = /^[0-9./]*$/;

    // if (!pattern.test(inputValue)) {
    //   e.target.value = inputValue.slice(0, -1); // Удаляем последний недопустимый символ
    // }

    return selectedDate;
  };

  const [naprav, setNaprav] = useState()
  // const napravState = useSelector((state) => state.pacientInfo.examNumber);
  const handleNapravChange = (e) => {
    // Регулярное выражение для разрешенных символов (цифры, точка, слеш)
    const inputValue = e.target.value;
    const pattern = /^[0-9\/]+$/;

    if (!pattern.test(inputValue)) {
      e.target.value = inputValue.slice(0, -1); // Удаляем последний недопустимый символ
      dispatch(editExamNumber(e.target.value));
      setNaprav(e.target.value)
    } else {
      dispatch(editExamNumber(inputValue));
      setNaprav(inputValue)
    }
  };
  
  const [name, setName] = useState()
  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    // dispatch(editExamNumber('111'));
    // Регулярное выражение для разрешенных символов (украинские буквы и символы)
    const pattern = /^[а-яА-ЯЇЇіі'\s,\.]+$/u;

    if (!pattern.test(inputValue)) {
      e.target.value = inputValue.slice(0, -1); // Удаляем последний недопустимый символ
      dispatch(editExamName(e.target.value));
      setName(e.target.value)
    } else {
      dispatch(editExamName(inputValue));
      setName(inputValue)
    }
  };

  // Обработчик для поля "Рік народження", чтобы ограничить ввод 4 цифрами
  
  const [birthYear, setBirthYear] = useState()
  const handleBirthYearChange = (e) => {
    const inputValue = e.target.value;
    // Регулярное выражение для разрешенных символов (цифры, не более 4)
    const pattern = /^\d{0,4}$/;

    if (!pattern.test(inputValue)) {
      e.target.value = inputValue.slice(0, 4); // Ограничиваем ввод до 4 цифр
      dispatch(editExamBirthYear(e.target.value));
      setBirthYear(e.target.value)
    } else {
      dispatch(editExamBirthYear(inputValue));
      setBirthYear(inputValue)
    }
  };
  return (
    <div className="form-container mb-4">
      {acceptNotice}
      <Form className="p-3 bg-light bg-gradient rounded-3 text-dark border border-secondary">
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
              placeholder="№ дослідження"
              type="text"
              // defaultValue={napravState}
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
        <Button
        variant="success"
        className="me-2"
        onClick={handleApplyButtonClick}
      >
        Apply
      </Button>{" "}
      </Form>
    </div>
  );
}

export default PacientInfo;
