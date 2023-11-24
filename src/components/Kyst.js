import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { kystViews } from "../data/KYST/kystViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const Kyst = () => {
  const [selectedKystViews, setSelectedKystViews] = useState(
    kystViews[0]
  );
  const [kystCounter, setKystCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={kystViews}
        onZoneSelect={setSelectedKystViews}
        label="Норма/Не норма"
        counter={kystCounter}
        onAddClick={() => handleAddOption(setKystCounter, kystCounter)}
        // onAddClick={() => handleAddOption(setSelectedKystViews, kystCounter)}
      />
    </div>
  );
};
