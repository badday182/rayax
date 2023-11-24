import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { kulshovyiSuhlobViews } from "../data/KULShOVYISUHLOB/kulshovyiSuhlobViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const KulshovyiSuhlob = () => {
  const [selectedKulshovyiSuhlobViews, setSelectedKulshovyiSuhlobViews] = useState(
    kulshovyiSuhlobViews[0]
  );
  const [kulshovyiSuhlobCounter, setKulshovyiSuhlobCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={kulshovyiSuhlobViews}
        onZoneSelect={setSelectedKulshovyiSuhlobViews}
        label="Норма/Не норма"
        counter={kulshovyiSuhlobCounter}
        onAddClick={() => handleAddOption(setKulshovyiSuhlobCounter, kulshovyiSuhlobCounter)}
        // onAddClick={() => handleAddOption(setSelectedKulshovyiSuhlobViews, kulshovyiSuhlobCounter)}
      />
    </div>
  );
};
