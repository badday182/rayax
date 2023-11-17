import React, { useState, useEffect } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import DeleteButton from "./deleteButton";
import AddZoneButton from "./addZoneButton";
import { zones } from "../data/zones";
import { zonesWithSides } from "../data/zonesWithSides";
import { sides } from "../data/sides";
import { ogkViews } from "../data/ogkViews";
import { plechKulshSuglobViews } from "../data/plechovuyKulshovuySuglobViews";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {
  editZone,
  editProaction,
  editSide,
  editNorma,
} from "./redux/slices/zoneInfoSliseReducer";
import {
  resetLegenRusynokArray,
  resetKoreniArray,
  resetSynusyArray,
  resetKupalaDiadragmyArray,
  resetCorArray,
  resetOgkZakliuchenniaArray,
  resetogkSliseReducer,
} from "./redux/slices/ogkSliseReducer";

import { resetZone, resetSide, resetProaction, resetNorma } from "./redux/slices/zoneInfoSliseReducer";

import { addDocText } from "./redux/slices/documentSliseReducer";

import { renderToString } from "react-dom/server";
import { ZoneInfoPattern } from "../patternsText/zoneInfoPattern";

import { Ogk } from "./Ogk";

export const ImagineOptions = ({ id }) => {
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

  // const Ogk = () =>{
  // return (
  //   <div>
  //     <FormFloatingSelect
  //             id="zone"
  //             items={zones}
  //             onZoneSelect={setSelectedZone}
  //             label="Зона дослідження"
  //           />
  //     <FormFloatingSelect
  //             items={ogkViews}
  //             onZoneSelect={setSelectedOgkViews}
  //             label="Проєкія"
  //           />
  //           <FormFloatingSelect
  //         items={normaNenorma}
  //         onZoneSelect={setSelectednormaNenorma}
  //         label="Норма/Не норма"
  //         />
  //   </div>
  // )
  // }

  const handleApplyZone = () => {
    //Добавляем данные в текстовый редактор
    dispatch(addDocText({ textToDoc }));
    // Сбрасываем данные в стейтах    

      dispatch(editZone("ОГК"));
      dispatch(editProaction("Оглядова"));
      dispatch(editSide("Справа"));


      dispatch(resetogkSliseReducer());
      
      // dispatch(resetLegenRusynokArray());
      // dispatch(resetKoreniArray());
      // dispatch(resetSynusyArray());
      // dispatch(resetKupalaDiadragmyArray());
      // dispatch(resetCorArray());
      // dispatch(resetOgkZakliuchenniaArray());
      // dispatch(resetZone());
      // dispatch(resetProaction());
      // dispatch(resetSide());
      // dispatch(resetNorma());    
      
      // dispatch(resetLegenRusynokText());
      // dispatch(resetKoreniText());
      // dispatch(resetSynusyArray());
      // dispatch(resetKupalaDiadragmyText());
      // dispatch(resetCorText());
      // dispatch(resetOgkZakliuchennia());
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
        <Ogk />
      ) : // <FormFloatingSelect
      //   items={ogkViews}
      //   onZoneSelect={setSelectedOgkViews}
      //   label="Проєкія"
      // />
      null}
      {selectedZone === "Кульшовий суглоб" ||
      selectedZone === "Плечовий суглоб" ? (
        <FormFloatingSelect
          items={plechKulshSuglobViews}
          onZoneSelect={setSelectedplechKulshSuglobViews}
          label="Проєкія"
        />
      ) : null}
      {/* <FormFloatingSelect
        items={normaNenorma}
        onZoneSelect={setSelectednormaNenorma}
        label="Норма/Не норма"
      /> */}

      <div className="d-flex justify-content-between zonesButtons">
        <div>
          {/* <ApplyZonesButton /> */}
          <Button variant="success" className="me-2" onClick={handleApplyZone}>
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
