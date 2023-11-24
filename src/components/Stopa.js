import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { stopaViews } from "../data/STOPA/stopaViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const Stopa = () => {
  const [selectedStopaViews, setSelectedStopaViews] = useState(
    stopaViews[0]
  );
  const [stopaCounter, setStopaCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={stopaViews}
        onZoneSelect={setSelectedStopaViews}
        label="Норма/Не норма"
        counter={stopaCounter}
        onAddClick={() => handleAddOption(setStopaCounter, stopaCounter)}
        // onAddClick={() => handleAddOption(setSelectedStopaViews, stopaCounter)}
      />
    </div>
  );
};
