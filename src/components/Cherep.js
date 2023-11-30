import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { FormFloatingSelect } from "./FloatingLabel";
import { cherepViews } from "../data/Cherep/cherepViews";
import { AddOptionBlock } from "./AddOptionBlock";
import { editSemicolonUniversalArray_1 } from "./redux/slices/universalSliceReducer";


export const Cherep = () => {
  const dispatch = useDispatch();

  const [selectedCherepViews, setSelectedCherepViews] = useState(cherepViews[0]);
  const [cherepCounter, setCherepCounter] = useState([{ id: uuidv4() }]);

  // useEffect(() => {
  //   // Проверка на первый рендер
  //   if (cherepCounter.length === 1) {
  //     // Выполнить dispatch с нужными значениями
  //     dispatch(editSemicolonUniversalArray_1({ floatingId: cherepCounter[0].id, selectedZone: cherepViews[0] }));
  //   }
  // }, []);

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
