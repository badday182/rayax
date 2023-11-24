import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { kolinnyiSuhlobViews } from "../data/KOLINNYISUHLOB/kolinnyiSuhlobViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const KolinnyiSuhlob = () => {
  const [selectedKolinnyiSuhlobViews, setSelectedKolinnyiSuhlobViews] = useState(
    kolinnyiSuhlobViews[0]
  );
  const [kolinnyiSuhlobCounter, setKolinnyiSuhlobCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={kolinnyiSuhlobViews}
        onZoneSelect={setSelectedKolinnyiSuhlobViews}
        label="Норма/Не норма"
        counter={kolinnyiSuhlobCounter}
        onAddClick={() => handleAddOption(setKolinnyiSuhlobCounter, kolinnyiSuhlobCounter)}
        // onAddClick={() => handleAddOption(setSelectedKolinnyiSuhlobViews, kolinnyiSuhlobCounter)}
      />
    </div>
  );
};
