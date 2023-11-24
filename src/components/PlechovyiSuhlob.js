import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { plechovyiSuhlobViews } from "../data/PLECHOVYISUHLOB/plechovyiSuhlobViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const PlechovyiSuhlob = () => {
  const [selectedPlechovyiSuhlobViews, setSelectedPlechovyiSuhlobViews] = useState(
    plechovyiSuhlobViews[0]
  );
  const [plechovyiSuhlobCounter, setPlechovyiSuhlobCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={plechovyiSuhlobViews}
        onZoneSelect={setSelectedPlechovyiSuhlobViews}
        label="Норма/Не норма"
        counter={plechovyiSuhlobCounter}
        onAddClick={() => handleAddOption(setPlechovyiSuhlobCounter, plechovyiSuhlobCounter)}
        // onAddClick={() => handleAddOption(setSelectedPlechovyiSuhlobViews, plechovyiSuhlobCounter)}
      />
    </div>
  );
};
