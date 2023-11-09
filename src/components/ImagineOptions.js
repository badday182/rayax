import React, { useState, useEffect } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import DeleteButton from "./deleteButton";
import AddZoneButton from "./addZoneButton";
import { zones } from "../data/zones";
import { zonesWithSides } from "../data/zonesWithSides";
import { sides } from "../data/sides";
import { ogkViews } from "../data/ogkViews";
import { plechKulshSuglobViews } from "../data/plechovuyKulshovuySuglobViews";
import { normaNenorma } from "../data/normaNenorma";
import {legenRysunok} from "../data/OGK_notNorma/legenRysunok"
import {koreni} from "../data/OGK_notNorma/koreni" 

import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { editZone, editProaction, editSide } from "./redux/slices/zoneInfoSliseReducer";
import { addDocText } from "./redux/slices/documentSliseReducer";

import { renderToString } from "react-dom/server";
import { ZoneInfoPattern } from "../patternsText/zoneInfoPattern";



export const ImagineOptions = ({ onDelete, id, onAddOptions }) => {
  const [selectedZone, setSelectedZone] = useState("ОГК");
  
  const [selectedSide, setSelectedSide] = useState("Справа");
  const [selectedOgkViews, setSelectedOgkViews] = useState("Оглядова");
  const [selectedplechKulshSuglobViews, setSelectedplechKulshSuglobViews] =
  useState("Пряма");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState("Норма");
  
  // Вроде работает 
  // useEffect(()=>{
  //   dispatch(editZone("ОГК"));
  // }, [])

  const zoneWithSides = zonesWithSides.includes(selectedZone) ? true : false;

  const dispatch = useDispatch();
  // const state = useSelector((state) => state.creatingDocument.documentText);

  const textToDoc = renderToString(ZoneInfoPattern());

const Ogk = () =>{
return (
  <FormFloatingSelect
          items={ogkViews}
          onZoneSelect={setSelectedOgkViews}
          label="Проєкія"
        />
)
}

  const handleApplyZone = () => {
    //Добавляем данные в текстовый редактор
    dispatch(addDocText({textToDoc}))
    // Обновляем данные редактор
    dispatch(editZone("ОГК"));
    dispatch(editProaction("Оглядова"));
    dispatch(editSide("Справа"));

  };


  return (
    <div className="mb-4 p-3 bg-light bg-gradient rounded-3 text-dark border border-secondary">
      <FormFloatingSelect
        id="zone"
        items={zones}
        onZoneSelect={setSelectedZone}
        label="Зона дослідження"
      />
      {zoneWithSides ? (
        <FormFloatingSelect
          items={sides}
          onZoneSelect={setSelectedSide}
          label="Сторона"
        />
      ) : null}
      {selectedZone === "ОГК" ? (
        <FormFloatingSelect
          items={ogkViews}
          onZoneSelect={setSelectedOgkViews}
          label="Проєкія"
        />
      ) : null}
      {selectedZone === "Кульшовий суглоб" ||
      selectedZone === "Плечовий суглоб" ? (
        <FormFloatingSelect
        items={plechKulshSuglobViews}
        onZoneSelect={setSelectedplechKulshSuglobViews}
        label="Проєкія"
        />
        ) : null}
      <FormFloatingSelect
        items={normaNenorma}
        onZoneSelect={setSelectednormaNenorma}
        label="Норма/Не норма"
        />
        {/* не норма */}
        {selectedZone === "ОГК" && selectednormaNenorma === "Не норма"? (
          <div>
            <FormFloatingSelect
              items={legenRysunok}
              onZoneSelect={setSelectedOgkViews}
              label="Легеневий рисунок"
            />
            <FormFloatingSelect
              items={koreni}
              onZoneSelect={setSelectedOgkViews}
              label="Корені"
            />
            </div>
        ) : null}
        <Ogk/>
      <div className="d-flex justify-content-between zonesButtons">
        <div>
          {/* <ApplyZonesButton /> */}
          <Button
            variant="success"
            className="me-2"
            onClick={handleApplyZone}
          >
            Apply
          </Button>{" "}
          <AddZoneButton
            title="Add zone"
            variant="outline-success"
            // onAddOptions={onAddOptions}
          />
        </div>
        <DeleteButton
          title="Remove Zone"
          variant="outline-danger"
          // onClick={() => onDelete(id)}
          id={id}
        />
      </div>
    </div>
  );
};
