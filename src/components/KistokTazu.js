import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { kistokTazuViews } from "../data/KISTOKTAZU/kistokTazuViews";
import { AddOptionBlock } from "./AddOptionBlock";

export const KistokTazu = () => {
  const [selectedKistokTazuViews, setSelectedKistokTazuViews] = useState(
    kistokTazuViews[0]
  );
  const [kistokTazuCounter, setKistokTazuCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
  // const handleAddOption = (setter, counter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <AddOptionBlock
        items={kistokTazuViews}
        onZoneSelect={setSelectedKistokTazuViews}
        label="Норма/Не норма"
        counter={kistokTazuCounter}
        onAddClick={() => handleAddOption(setKistokTazuCounter, kistokTazuCounter)}
        // onAddClick={() => handleAddOption(setSelectedKistokTazuViews, kistokTazuCounter)}
      />
    </div>
  );
};
