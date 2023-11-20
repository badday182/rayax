import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ppnViews } from "../data/PPN/ppnViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const Ppn = () => {
  const [selectedPpnViews, setSelectedPpnViews] = useState(
    ppnViews[0]
  );
  const [ppnCounter, setPpnCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={ppnViews}
        onZoneSelect={setSelectedPpnViews}
        label="Норма/Не норма"
        counter={ppnCounter}
        onAddClick={() => handleAddOption(setPpnCounter, ppnCounter)}
        // onAddClick={() => handleAddOption(setSelectedPpnViews, ppnCounter)}
      />
    </div>
  );
};
