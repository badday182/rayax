// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function GridComplexExample() {
//   return (
//     <Form>
//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="imagine">
//           <Form.Label>№ дослідження</Form.Label>
//           <Form.Control placeholder="№ дослідження" />
//         </Form.Group>

//         <Form.Group as={Col} controlId="date">
//           <Form.Label>Дата</Form.Label>
//           <Form.Control placeholder="Дата"/>
//         </Form.Group>
//       </Row>
//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="pacientName">
//           <Form.Label>П.І.Б</Form.Label>
//           <Form.Control placeholder="П.І.Б" />
//         </Form.Group>

//         <Form.Group as={Col} controlId="birthYear">
//           <Form.Label>Рік народження</Form.Label>
//           <Form.Control placeholder="Рік народження" />
//         </Form.Group>
//       </Row>

//     </Form>
//   );
// }

// export default GridComplexExample;


// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function GridComplexExample() {
//   // Обработчик для поля "Дата", чтобы ограничить ввод числами, точкой и слешем
//   const handleDateChange = (e) => {
//     const inputValue = e.target.value;
//     // Регулярное выражение для разрешенных символов (цифры, точка, слеш)
//     const pattern = /^[0-9./]*$/;
    
//     if (!pattern.test(inputValue)) {
//       e.target.value = inputValue.slice(0, -1); // Удаляем последний недопустимый символ
//     }
//   };

//   // Обработчик для поля "П.І.Б", чтобы ограничить ввод буквами украинского алфавита
//   const handleNameChange = (e) => {
//     const inputValue = e.target.value;
//     // Регулярное выражение для разрешенных символов (украинские буквы и символы)
//     const pattern = /^[а-яА-ЯїЇєЄґҐіІ\s]*$/;

//     if (!pattern.test(inputValue)) {
//       e.target.value = inputValue.replace(/[^а-яА-ЯїЇєЄґҐіІ\s]/g, ''); // Удаляем недопустимые символы
//     }
//   };

//   // Обработчик для поля "Рік народження", чтобы ограничить ввод 4 цифрами
//   const handleBirthYearChange = (e) => {
//     const inputValue = e.target.value;
//     // Регулярное выражение для разрешенных символов (цифры, не более 4)
//     const pattern = /^\d{0,4}$/;

//     if (!pattern.test(inputValue)) {
//       e.target.value = inputValue.slice(0, 4); // Ограничиваем ввод до 4 цифр
//     }
//   };

//   return (
//     <Form>
//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="imagine">
//           <Form.Label>№ дослідження</Form.Label>
//           <Form.Control
//             placeholder="№ дослідження"
//             type="text"
//             pattern="/^[0-9\/]+$/" // Исправленный pattern
//           />
//         </Form.Group>

//         <Form.Group as={Col} controlId="date">
//           <Form.Label>Дата</Form.Label>
//           <Form.Control
//             placeholder="Дата"
//             type="text"
//             pattern="[0-9./]*"
//             onChange={handleDateChange}
//           />
//         </Form.Group>
//       </Row>
//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="pacientName">
//           <Form.Label>П.І.Б</Form.Label>
//           <Form.Control
//             placeholder="П.І.Б"
//             type="text"
//             pattern="[а-яА-ЯїЇєЄґҐіІ\s]*"
//             onChange={handleNameChange}
//           />
//         </Form.Group>

//         <Form.Group as={Col} controlId="birthYear">
//           <Form.Label>Рік народження</Form.Label>
//           <Form.Control
//             placeholder="Рік народження"
//             type="text"
//             pattern="[0-9]*"
//             onChange={handleBirthYearChange}
//           />
//         </Form.Group>
//       </Row>
//     </Form>
//   );
// }

// export default GridComplexExample;
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk"; // Импортируйте локаль для украинского языка
registerLocale("uk", uk); // Зарегистрируйте локаль
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const [selectedDate, setSelectedDate] = useState(new Date()); // Значение по умолчанию - сегодняшняя дата

function GridComplexExample() {
  
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
  <Form>
    <Row className="mb-2">
      <Form.Group as={Col} controlId="imagine">
        <Form.Label>№ дослідження</Form.Label>
        <Form.Control
          placeholder="№ дослідження"
          type="text"
          onChange={handleNapravChange}
         
        />
      </Form.Group>

        <Form.Group as={Col} controlId="date">
        <Form.Label>Дата</Form.Label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            locale="uk" // Установите локаль
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

export default GridComplexExample;
