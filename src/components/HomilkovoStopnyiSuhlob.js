import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { homilkovoStopnyiSuhlobViews } from "../data/HOMILKOVOSTOPNYISUHLOB/homilkovoStopnyiSuhlobViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const HomilkovoStopnyiSuhlob = () => {
  const [selectedHomilkovoStopnyiSuhlobViews, setSelectedHomilkovoStopnyiSuhlobViews] = useState(
    homilkovoStopnyiSuhlobViews[0]
  );
  const [homilkovoStopnyiSuhlobCounter, setHomilkovoStopnyiSuhlobCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={homilkovoStopnyiSuhlobViews}
        onZoneSelect={setSelectedHomilkovoStopnyiSuhlobViews}
        label="Норма/Не норма"
        counter={homilkovoStopnyiSuhlobCounter}
        onAddClick={() => handleAddOption(setHomilkovoStopnyiSuhlobCounter, homilkovoStopnyiSuhlobCounter)}
        // onAddClick={() => handleAddOption(setSelectedHomilkovoStopnyiSuhlobViews, homilkovoStopnyiSuhlobCounter)}
      />
    </div>
  );
};
