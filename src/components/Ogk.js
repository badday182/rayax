import React, { useState } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import { v4 as uuidv4 } from "uuid";
import { ogkViews } from "../data/ogkViews";
import { ogkNormaNenorma } from "../data/OGK_notNorma/ogkNormaNenorma";

import { legenRysunok } from "../data/OGK_notNorma/legenRysunok";
import { koreni } from "../data/OGK_notNorma/koreni";
import { synusy } from "../data/OGK_notNorma/synusy";
import { kupalaDiadragmy } from "../data/OGK_notNorma/kupalaDiadragmy";
import { cor } from "../data/OGK_notNorma/cor";
import { ogkZakliuchennia } from "../data/OGK_notNorma/ogkZakliuchennia";

import { AddOptionBlock } from "./AddOptionBlock";
// const AddOptionBlock = ({ items, onZoneSelect, label, counter, onAddClick }) => {
//   return (
//     <div className="itemZones addOption">
//       <div>
//         {counter.map((option) => (
//           <FormFloatingSelect
//             key={option.id}
//             items={items}
//             onZoneSelect={onZoneSelect}
//             label={label}
//           />
//         ))}
//       </div>
//       <Button variant="primary" className="zoneAddButton" onClick={onAddClick}>
//         Add
//       </Button>{" "}
//     </div>
//   );
// };

export const Ogk = () => {
  const [selectedZone, setSelectedZone] = useState("ОГК");
  const [selectedOgkViews, setSelectedOgkViews] = useState("Оглядова");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState("Норма");

  const [legenRysunokCounter, setlegenRysunokCounter] = useState([{ id: uuidv4() }]);
  const [koreniCounter, setKoreniCounter] = useState([{ id: uuidv4() }]);
  const [synusyCounter, setSynusyCounter] = useState([{ id: uuidv4() }]);
  const [kupalaDiadragmyCounter, setKupalaDiadragmyCounter] = useState([{ id: uuidv4() }]);
  const [corCounter, setCorCounter] = useState([{ id: uuidv4() }]);
  const [ogkZakliuchenniaCounter, setOgkZakliuchenniaCounter] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <FormFloatingSelect items={ogkViews} onZoneSelect={setSelectedOgkViews} label="Проєкія" />
      <FormFloatingSelect items={ogkNormaNenorma} onZoneSelect={setSelectednormaNenorma} label="Норма/Не норма" />
      {/* {selectedZone === "ОГК" && selectednormaNenorma === "Не норма" ? ( */}
      {selectednormaNenorma === "Не норма" ? (
        <div className=" ">
          <AddOptionBlock
            items={legenRysunok}
            onZoneSelect={setSelectedOgkViews}
            label="Легеневий рисунок"
            counter={legenRysunokCounter}
            onAddClick={() => handleAddOption(setlegenRysunokCounter, legenRysunokCounter, setlegenRysunokCounter)}
          />
          <AddOptionBlock
            items={koreni}
            onZoneSelect={setSelectedOgkViews}
            label="Корені"
            counter={koreniCounter}
            onAddClick={() => handleAddOption(setKoreniCounter, koreniCounter, setKoreniCounter)}
          />
          <AddOptionBlock
            items={synusy}
            onZoneSelect={setSelectedOgkViews}
            label="Синуси"
            counter={synusyCounter}
            onAddClick={() => handleAddOption(setSynusyCounter, synusyCounter, setSynusyCounter)}
          />
          <AddOptionBlock
            items={kupalaDiadragmy}
            onZoneSelect={setSelectedOgkViews}
            label="Купала діафрагми"
            counter={kupalaDiadragmyCounter}
            onAddClick={() => handleAddOption(setKupalaDiadragmyCounter, kupalaDiadragmyCounter, setKupalaDiadragmyCounter)}
          />
          <AddOptionBlock
            items={cor}
            onZoneSelect={setSelectedOgkViews}
            label="Cor-"
            counter={corCounter}
            onAddClick={() => handleAddOption(setCorCounter, corCounter, setCorCounter)}
          />
          <AddOptionBlock
            items={ogkZakliuchennia}
            onZoneSelect={setSelectedOgkViews}
            label="Заключення"
            counter={ogkZakliuchenniaCounter}
            onAddClick={() => handleAddOption(setOgkZakliuchenniaCounter, ogkZakliuchenniaCounter, setOgkZakliuchenniaCounter)}
          />
        </div>
      ) : null}
    </div>
  );
};
