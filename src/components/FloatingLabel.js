import { useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {
  editZone,
  editProaction,
  editSide,
  editNorma,
} from "./redux/slices/zoneInfoSliseReducer";

import { editLegenRusynok,edit0LegenRusynok } from "./redux/slices/ogkSliseReducer";

import { zones } from "../data/zones";
import { zonesWithOnly2Projection } from "../data/zonesWithOnly2Projection";
import { zonesWithOnlyDirectProjection } from "../data/zonesWithOnlyDirectProjection";
import { sides } from "../data/sides";
import { ogkViews } from "../data/ogkViews";
import { plechKulshSuglobViews } from "../data/plechovuyKulshovuySuglobViews";

import { ogkNormaNenorma } from "../data/OGK_notNorma/ogkNormaNenorma";
import { legenRysunok } from "../data/OGK_notNorma/legenRysunok";
import {ogkNenormaItems} from "../data/OGK_notNorma/ogkNenormaItems"

export function FormFloatingSelect({ items, label, onZoneSelect }) {
      const firstItem = false

  // useEffect(()=>{
   
  // }, [])
  const dispatch = useDispatch();

  const itemGenerator = () => {
    const fixedZone = (item) => {
      return item.replace("$'", "'");
    };

    return items.map((item) => (
      <option key={fixedZone(item)} value={fixedZone(item)}>
        {fixedZone(item)}
      </option>
    ));
  };

  const handleZoneSelect = (event) => {
    const selectedZone = event.target.value;
    onZoneSelect(selectedZone);
    if (zones.includes(selectedZone)) {
      // console.log(selectedZone);
      dispatch(editZone(selectedZone));
    }
    if (zonesWithOnly2Projection.includes(selectedZone)) {
      dispatch(editProaction("В 2-х проєкціях"));
    }
    if (zonesWithOnlyDirectProjection.includes(selectedZone)) {
      dispatch(editProaction("Пряма"));
    }
    if (selectedZone === "Ребра") {
      dispatch(editProaction("Коса"));
    }
    if (selectedZone === "Плечовий суглоб" || selectedZone === "Кульшовий суглоб") {
      dispatch(editProaction("Пряма"));
    }
    if (ogkViews.includes(selectedZone)) {
      dispatch(editProaction(selectedZone));
    }
    if (sides.includes(selectedZone)) {
      dispatch(editSide(selectedZone));
    }
    if (plechKulshSuglobViews.includes(selectedZone)) {
      dispatch(editProaction(selectedZone));
      // console.log(selectedZone);
    }
    
    // -----------ОГК ---------
    
    // if (label === "Легеневий рисунок") {
    //   firstItem = true
    // }
    if (ogkNormaNenorma.includes(selectedZone)) {
      dispatch(editNorma(selectedZone));
      // console.log(selectedZone);
    }
    if (legenRysunok.includes(selectedZone)) {
      dispatch(editLegenRusynok(selectedZone));
      // console.log(selectedZone);
    }
    

  };
  const floatingId = uuidv4();

  // ----------только после инициализации компонент диспатчит первый айтем из списка----
  //   useEffect(()=>{
  //     if (items[0] === "посиленний") {
  //       dispatch(edit0LegenRusynok("посиленний"));
  //     }
  // }, [])

  return (
    <FloatingLabel className="mb-2" controlId={floatingId} label={label}>
      <Form.Select id={floatingId} onChange={handleZoneSelect}>
        {ogkNenormaItems.includes(label) ? <option value="">--select an item--</option> : null}
        {itemGenerator()}
      </Form.Select>
    </FloatingLabel>
  );
}
