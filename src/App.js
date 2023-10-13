import './App.css';
import Button  from 'react-bootstrap/Button';
// import CustomDropdown from '../src/components/customDropdown';
import CustomDropdown from '../src/components/customDropdownTest';

function App() {
  return (
    
    <div>
      <p>№ Дослідження</p>
      <p>Дата</p>
      <p>П.І.Б</p>
      <p>Рік народження</p>
      <CustomDropdown name="Зона дослідження"/>
      <CustomDropdown name="Проекція"/>
      <CustomDropdown name="ЄЄД"/>
    </div>
   
  );
}

export default App;
