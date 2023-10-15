import "./App.css";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import GridComplexExample from "./components/complexLayouts";
import { FormFloatingSelect } from "./components/FloatingLabel";

import { zones } from "./data/zones";
import { zonesWithSides } from "./data/zonesWithSides";
import { sides } from "./data/sides";

function App() {
  const [selectedZone, setSelectedZone] = useState("ОГК");
  const [selectedSide, setSelectedSide] = useState("Справа");

  const zoneWithSides = zonesWithSides.includes(selectedZone) ? true : false;

  return (
    <div>
      <GridComplexExample />
      <FormFloatingSelect items={zones} onZoneSelect={setSelectedZone} label="Зона дослідження"/>
      {zoneWithSides ? (
        <FormFloatingSelect items={sides} onZoneSelect={setSelectedSide} label="Сторона"/>
      ) : null}
      {/* <h1>Зона дослідження: {selectedZone}</h1> */}
      {/* <CustomDropdown name="Зона дослідження"/> */}
      {/* <CustomDropdown name="Проекція"/>
      <CustomDropdown name="ЄЄД"/> */}
    </div>
  );
}

export default App;
