import React, { useState } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import { v4 as uuidv4 } from "uuid";
import { cherepViews } from "../data/Cherep/cherepViews";


export const Cherep = () => {
  const [selectedCherepViews, setSelectedCherepViews] = useState("");
  // const [selectedCherepViews, setSelectedCherepViews] = useState("Грубих кістково-травматичних змін не визначаються");

  return (
    <div className="">
       <FormFloatingSelect
              key={uuidv4()}
              items={cherepViews}
              onZoneSelect={setSelectedCherepViews}
              label={"Норма/Не норма"}
            />
    </div>
  );
};
