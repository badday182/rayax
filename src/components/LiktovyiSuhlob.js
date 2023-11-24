import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { liktovyiSuhlobViews } from "../data/LIKTOVYISUHLOB/liktovyiSuhlobViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const LiktovyiSuhlob = () => {
  const [selectedLiktovyiSuhlobViews, setSelectedLiktovyiSuhlobViews] = useState(
    liktovyiSuhlobViews[0]
  );
  const [liktovyiSuhlobCounter, setLiktovyiSuhlobCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={liktovyiSuhlobViews}
        onZoneSelect={setSelectedLiktovyiSuhlobViews}
        label="Норма/Не норма"
        counter={liktovyiSuhlobCounter}
        onAddClick={() => handleAddOption(setLiktovyiSuhlobCounter, liktovyiSuhlobCounter)}
        // onAddClick={() => handleAddOption(setSelectedLiktovyiSuhlobViews, liktovyiSuhlobCounter)}
      />
    </div>
  );
};
