import './App.css';
import Button  from 'react-bootstrap/Button';
import CustomDropdown from './components/customDropdown';
import GridComplexExample from './components/complexLayouts'
import { FormFloatingSelect } from './components/FloatingLabel';


function App() {
  const zones = ['Череп', 'ППН','ШВХ','ГВХ','ПВХ','ОГК','ОЧП','Плечовий суглоб','Ключиця', 'Ребра', 'Ліктьовий суглоб','Променево-зап$\'ястковий суглоб','Кисть','Кісток тазу','Кульшовий суглоб','Колінний суглоб','Гомілково-стопний суглоб','Стопа','Передні відділи стопи']
const view = ['Оглядова','Передня','Бічна','В 2-х проєкціях', 'Права бічна', 'Ліва бічна','Задній лардоз', 'Коса']
const dose = ['',]

  return (
    
    <div>
     
      <FormFloatingSelect zones={zones}/>
      <GridComplexExample />
      {/* <CustomDropdown name="Зона дослідження"/> */}
      {/* <CustomDropdown name="Проекція"/>
      <CustomDropdown name="ЄЄД"/> */}
    </div>
   
  );
}

export default App;
