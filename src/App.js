import './App.css';
import Button  from 'react-bootstrap/Button';
// import CustomDropdown from '../src/components/customDropdown';
import CustomDropdown from './components/customDropdown';
import GridComplexExample from './components/complexLayouts'

function App() {
  
const view = ['Оглядова','Передня','Бічна','В 2-х проєкціях', 'Права бічна', 'Ліва бічна','Задній лардоз', 'Коса']
const dose = ['',]

  return (
    
    <div>
      {/* <p>№ Дослідження</p> */}
      {/* <p>Дата</p> */}
      {/* <p>П.І.Б</p> */}
      {/* <p>Рік народження</p> */}
      <GridComplexExample></GridComplexExample>
      <CustomDropdown name="Зона дослідження"/>
      {/* <CustomDropdown name="Проекція"/>
      <CustomDropdown name="ЄЄД"/> */}
    </div>
   
  );
}

export default App;
