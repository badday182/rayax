import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ochpViews } from "../data/OCHP/ochpViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const Ochp = () => {
  const [selectedOchpViews, setSelectedOchpViews] = useState(
    ochpViews[0]
  );
  const [ochpCounter, setOchpCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={ochpViews}
        onZoneSelect={setSelectedOchpViews}
        label="Норма/Не норма"
        counter={ochpCounter}
        onAddClick={() => handleAddOption(setOchpCounter, ochpCounter)}
        // onAddClick={() => handleAddOption(setSelectedOchpViews, ochpCounter)}
      />
    </div>
  );
};
