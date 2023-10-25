import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function PacientInfo() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // Значение по умолчанию - сегодняшняя дата
  
  const handleNapravChange = (e) => {
    const inputValue = e.target.value;
    // Регулярное выражение для разрешенных символов (цифры, точка, слеш)
    const pattern = /^[0-9\/]+$/;
    
    if (!pattern.test(inputValue)) {
      e.target.value = inputValue.slice(0, -1); // Удаляем последний недопустимый символ
    }
  }; 

  //  Обработчик для поля "Дата", чтобы ограничить ввод числами, точкой и слешем
  const handleDateChange = (e) => {
    const inputValue = e.target.value;
    // Регулярное выражение для разрешенных символов (цифры, точка, слеш)
    const pattern = /^[0-9./]*$/;
    
    if (!pattern.test(inputValue)) {
      e.target.value = inputValue.slice(0, -1); // Удаляем последний недопустимый символ
    }
  };

  const handleNameChange = (e) => {
        const inputValue = e.target.value;
        // Регулярное выражение для разрешенных символов (украинские буквы и символы)
        const pattern = /^[а-яА-ЯЇЇіі'\s,\.]+$/u;
    
        if (!pattern.test(inputValue)) {
          e.target.value = inputValue.slice(0, -1); // Удаляем последний недопустимый символ
        }
      };

      // Обработчик для поля "Рік народження", чтобы ограничить ввод 4 цифрами
  const handleBirthYearChange = (e) => {
    const inputValue = e.target.value;
    // Регулярное выражение для разрешенных символов (цифры, не более 4)
    const pattern = /^\d{0,4}$/;

    if (!pattern.test(inputValue)) {
      e.target.value = inputValue.slice(0, 4); // Ограничиваем ввод до 4 цифр
    }
  };
return (
  <Form className="m-2 mb-4 p-3 bg-light bg-gradient rounded-3 text-dark border border-secondary">
    <Row className="mb-2">

              <Form.Group as={Col} controlId="date">
        <Form.Label>Дата</Form.Label>
        <Form.Control
            placeholder="Дата"
            type="date"
            defaultValue={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </Form.Group>

      <Form.Group as={Col} controlId="imagine">
        <Form.Label>№ дослідження</Form.Label>
        <Form.Control
          placeholder="№ дослідження"
          type="text"
          onChange={handleNapravChange}
         
        />
      </Form.Group>

      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="pacientName">
          <Form.Label>П.І.Б</Form.Label>
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

    </Form>
  );
}

export default PacientInfo;
