import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { peredniViddilyStopyViews } from "../data/PEREDNIVIDDILYSTOPY/peredniViddilyStopyViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const PeredniViddilyStopy = () => {
  const [selectedPeredniViddilyStopyViews, setSelectedPeredniViddilyStopyViews] = useState(
    peredniViddilyStopyViews[0]
  );
  const [peredniViddilyStopyCounter, setPeredniViddilyStopyCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={peredniViddilyStopyViews}
        onZoneSelect={setSelectedPeredniViddilyStopyViews}
        label="Норма/Не норма"
        counter={peredniViddilyStopyCounter}
        onAddClick={() => handleAddOption(setPeredniViddilyStopyCounter, peredniViddilyStopyCounter)}
        // onAddClick={() => handleAddOption(setSelectedPeredniViddilyStopyViews, peredniViddilyStopyCounter)}
      />
    </div>
  );
};
