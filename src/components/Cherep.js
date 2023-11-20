import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { FormFloatingSelect } from "./FloatingLabel";
import { cherepViews } from "../data/Cherep/cherepViews";
import { AddOptionBlock } from "./AddOptionBlock";


export const Cherep = () => {
  const [selectedCherepViews, setSelectedCherepViews] = useState(cherepViews[0]);
  const [cherepCounter, setCherepCounter] = useState([{ id: uuidv4() }]);

  // const handleAddOption = (setter, counter, setCounter) => {
  const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };



  return (
    <div className="">
       {/* <FormFloatingSelect
              // key={option.id}
              items={cherepViews}
              onZoneSelect={setSelectedCherepViews}
              label={"Норма/Не норма"}
            /> */}
            <AddOptionBlock
            items={cherepViews}
            onZoneSelect={setSelectedCherepViews}
            label="Норма/Не норма"
            counter={cherepCounter}
            // onAddClick={() => handleAddOption(setCherepCounter, cherepCounter, setCherepCounter)}
            onAddClick={() => handleAddOption(setCherepCounter, cherepCounter)}
          />
    </div>
  );
};
