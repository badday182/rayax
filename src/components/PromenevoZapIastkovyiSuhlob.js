import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { promenevoZapIastkovyiSuhlobViews } from "../data/PROMENZAPIaSTKSUHLOB/promenevoZapIastkovyiSuhlobViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const PromenevoZapIastkovyiSuhlob = () => {
  const [selectedPromenevoZapIastkovyiSuhlobViews, setSelectedPromenevoZapIastkovyiSuhlobViews] = useState(
    promenevoZapIastkovyiSuhlobViews[0]
  );
  const [promenevoZapIastkovyiSuhlobCounter, setPromenevoZapIastkovyiSuhlobCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={promenevoZapIastkovyiSuhlobViews}
        onZoneSelect={setSelectedPromenevoZapIastkovyiSuhlobViews}
        label="Норма/Не норма"
        counter={promenevoZapIastkovyiSuhlobCounter}
        onAddClick={() => handleAddOption(setPromenevoZapIastkovyiSuhlobCounter, promenevoZapIastkovyiSuhlobCounter)}
        // onAddClick={() => handleAddOption(setSelectedPromenevoZapIastkovyiSuhlobViews, promenevoZapIastkovyiSuhlobCounter)}
      />
    </div>
  );
};
