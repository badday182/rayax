import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { kliuchytsiaViews } from "../data/KLIUCHYTSIA/kliuchytsiaViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const Kliuchytsia = () => {
  const [selectedKliuchytsiaobViews, setSelectedKliuchytsiaobViews] = useState(
    kliuchytsiaViews[0]
  );
  const [kliuchytsiaCounter, setKliuchytsiaCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={kliuchytsiaViews}
        onZoneSelect={setSelectedKliuchytsiaobViews}
        label="Норма/Не норма"
        counter={kliuchytsiaCounter}
        onAddClick={() => handleAddOption(setKliuchytsiaCounter, kliuchytsiaCounter)}
        // onAddClick={() => handleAddOption(setSelectedKliuchytsiaobViews, kliuchytsiaCounter)}
      />
    </div>
  );
};
