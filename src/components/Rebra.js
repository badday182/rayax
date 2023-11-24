import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { rebraViews } from "../data/REBRA/rebraViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const Rebra = () => {
  const [selectedRebraViews, setSelectedRebraViews] = useState(
    rebraViews[0]
  );
  const [rebraCounter, setRebraCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={rebraViews}
        onZoneSelect={setSelectedRebraViews}
        label="Норма/Не норма"
        counter={rebraCounter}
        onAddClick={() => handleAddOption(setRebraCounter, rebraCounter)}
        // onAddClick={() => handleAddOption(setSelectedRebraViews, rebraCounter)}
      />
    </div>
  );
};
