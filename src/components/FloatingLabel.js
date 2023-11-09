import { useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { editZone, editProaction, editSide, editMSv } from "./redux/slices/zoneInfoSliseReducer";

import { zones } from "../data/zones";
import {zonesWithOnly2Projection} from "../data/zonesWithOnly2Projection"
import { zonesWithOnlyDirectProjection } from "../data/zonesWithOnlyDirectProjection";
import { sides } from "../data/sides";
import { ogkViews } from "../data/ogkViews";
import { plechKulshSuglobViews } from "../data/plechovuyKulshovuySuglobViews";


export function FormFloatingSelect({ items, label, onZoneSelect }) {
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
    // dispatch(editZone(event.target.value));


    if (zones.includes(selectedZone)) {
      dispatch(editZone(selectedZone));
    }
    if (zonesWithOnly2Projection.includes(selectedZone)) {
      dispatch(editProaction("в 2-х проєкціях"));
      // console.log(`Выбранная зона: ${setedZone}`);
    }
    if (zonesWithOnlyDirectProjection.includes(selectedZone)) {
      dispatch(editProaction("пряма"));
    }
    if (selectedZone === "Ребра") {
      dispatch(editProaction("коса"));
    }
        if (ogkViews.includes(selectedZone)) {
      dispatch(editProaction(selectedZone));
    }
    if (sides.includes(selectedZone)) {
      dispatch(editSide(selectedZone));
    }
    if (plechKulshSuglobViews.includes(selectedZone)) {
      dispatch(editProaction(selectedZone));
    }
    
    

    // const zoneMappings = {
    //   "ППН": "0,12",
    //   "Череп": "0,24",
    //   "ШВХ": "0,3",
    //   "ГВХ": "0,7",
    //   "ПВХ": "0,9",
    //   "Кисть": "0,2",
    //   "Стопа": "0,2",
    //   "Ліктьовий суглоб": "0,2",
    //   "Променево-зап'ястковий суглоб": "0,2",
    //   "Колінний суглоб": "0,2",
    //   "Гомілково-стопний суглоб": "0,2",
    //   "Передні відділи стопи": "0,2",

    //   "ОЧП": "0,16",
    //   "Ключиця": "0,3",
    //   "Кісток тазу": "0,9",
    //   "Ребра": "0,5",
    //   };
    
    // const valueToDispatch = zoneMappings[selectedZone] || "____";
    
    // dispatch(editMSv(valueToDispatch));
    

    // switch (selectedZone) {
    //   case "ППН":
    //     dispatch(editMSv("0,12"));
    //     break;
    //   case "Череп":
    //     dispatch(editMSv("0,24"));
    //     break;
    //   case "ШВХ":
    //     dispatch(editMSv("0,3"));
    //     break;
    //   case "ГВХ":
    //     dispatch(editMSv("0,7"));
    //     break;
    //   case "ПВХ":
    //     dispatch(editMSv("0,9"));
    //     break;
    //   case "Кисть":
    //     dispatch(editMSv("0,2"));
    //     break;
    //   case "Стопа":
    //     dispatch(editMSv("0,2"));
    //     break;
    //   case "Ліктьовий суглоб":
    //     dispatch(editMSv("0,2"));
    //     break;
    //   case "Променево-зап'ястковий суглоб":
    //     dispatch(editMSv("0,2"));
    //     break;
    //   case "Колінний суглоб":
    //     dispatch(editMSv("0,2"));
    //     break;
    //   case "Гомілково-стопний суглоб":
    //     dispatch(editMSv("0,2"));
    //     break;
    //   case "Передні відділи стопи":
    //     dispatch(editMSv("0,2"));
    //     break;
      
     
    //   default:
    //     dispatch(editMSv("____"));
    //     break;
    // }
    
  };
  const floatingId = uuidv4();
  return (
    <FloatingLabel className="mb-2" controlId={floatingId} label={label}>
      <Form.Select id={floatingId} onChange={handleZoneSelect}>
        {itemGenerator()}
      </Form.Select>
    </FloatingLabel>
  );
}
