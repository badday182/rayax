import { useState, useEffect } from "react";
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

import {
  editLegenRusynokArray,
  editKoreniArray,
  editSynusyArray,
  editKupalaDiadragmyArray,
  editCorArray,
  editOgkZakliuchenniaArray,
} from "./redux/slices/ogkSliseReducer";

import {
  editCommaUniversalArray_1,
  editCommaUniversalArray_2,
  editCommaUniversalArray_3,
  editCommaUniversalArray_4,
  editCommaUniversalArray_5,
  editCommaUniversalArray_6,
  editSemicolonUniversalArray_1,
  editSvhVysotaTilHrebtsivArray,
} from "./redux/slices/universalSliceReducer";

import { editCherepNormaNenormaArray } from "./redux/slices/cherepSliseReducer";

import { zones } from "../data/zones";
import { zonesWithOnly2Projection } from "../data/zonesWithOnly2Projection";
import { zonesWithOnlyDirectProjection } from "../data/zonesWithOnlyDirectProjection";
import { sides } from "../data/sides";
import { ogkViews } from "../data/ogkViews";
import { plechKulshSuglobViews } from "../data/plechovuyKulshovuySuglobViews";

import { ogkNormaNenorma } from "../data/OGK_notNorma/ogkNormaNenorma";
import { legenRysunok } from "../data/OGK_notNorma/legenRysunok";
import { koreni } from "../data/OGK_notNorma/koreni";
import { synusy } from "../data/OGK_notNorma/synusy";
import { kupalaDiadragmy } from "../data/OGK_notNorma/kupalaDiadragmy";
import { cor } from "../data/OGK_notNorma/cor";
import { ogkZakliuchennia } from "../data/OGK_notNorma/ogkZakliuchennia";

import { cherepViews } from "../data/Cherep/cherepViews";

import { ogkNenormaItems } from "../data/OGK_notNorma/ogkNenormaItems";
import { ppnViews } from "../data/PPN/ppnViews";

import { fiziologLordoz } from "../data/SHVH/SHNH_notNorma/fiziologLordoz";
import { shvhNenormaItems } from "../data/SHVH/shvhNenormaItems";
import { shvhNormaNenorma } from "../data/SHVH/shvhNormaNenorma";
import { seredynnaVis } from "../data/SHVH/SHNH_notNorma/seredynnaVis";
import { vysotaTilHrebtsiv } from "../data/SHVH/SHNH_notNorma/vysotaTilHrebtsiv";
import { mizhkhrebtseviPromizhky } from "../data/SHVH/SHNH_notNorma/mizhkhrebtseviPromizhky";
import { zamykaiuchiPlastynkyTilKhrebtsiv } from "../data/SHVH/SHNH_notNorma/zamykaiuchiPlastynkyTilKhrebtsiv";
import { fasetkoviUnkovertSuhlShchelyny } from "../data/SHVH/SHNH_notNorma/fasetkoviUnkovertSuhlShchelyny";
import { zakliuchenniaShvh } from "../data/SHVH/SHNH_notNorma/zakliuchenniaShvh";

import { gvhNormaNenorma } from "../data/GVH/gvhNormaNenorma";
import { fiziologKifos } from "../data/GVH/GVH_notNorma/fiziologKifos";
import { zakliuchenniaGvh } from "../data/GVH/GVH_notNorma/zakliuchenniaGvh";
import { gvhNenormaItems } from "../data/GVH/gvhNenormaItems";
import { vysotaTilHrebtsivGvh } from "../data/GVH/GVH_notNorma/vysotaTilHrebtsiv";
import { pvhNormaNenorma } from "../data/PVH/pvhNormaNenorma";
import { zakliuchenniaPvh } from "../data/PVH/PVH_notNorma/zakliuchenniaPvh";
import { ochpViews } from "../data/OCHP/ochpViews";
import { plechovyiSuhlobViews } from "../data/PLECHOVYISUHLOB/plechovyiSuhlobViews";
import { kliuchytsiaViews } from "../data/KLIUCHYTSIA/kliuchytsiaViews";
import { rebraViews } from "../data/REBRA/rebraViews";
import { liktovyiSuhlobViews } from "../data/LIKTOVYISUHLOB/liktovyiSuhlobViews";
import { promenevoZapIastkovyiSuhlobViews } from "../data/PROMENZAPIaSTKSUHLOB/promenevoZapIastkovyiSuhlobViews";
import { kystViews } from "../data/KYST/kystViews";
import { kistokTazuViews } from "../data/KISTOKTAZU/kistokTazuViews";
import { kulshovyiSuhlobViews } from "../data/KULShOVYISUHLOB/kulshovyiSuhlobViews";
import { kolinnyiSuhlobViews } from "../data/KOLINNYISUHLOB/kolinnyiSuhlobViews";
import { homilkovoStopnyiSuhlobViews } from "../data/HOMILKOVOSTOPNYISUHLOB/homilkovoStopnyiSuhlobViews";
import { stopaViews } from "../data/STOPA/stopaViews";
import { peredniViddilyStopyViews } from "../data/PEREDNIVIDDILYSTOPY/peredniViddilyStopyViews";
export function FormFloatingSelect({ items, label, onZoneSelect }) {
  const [floatingId, setFloatingId] = useState(uuidv4());
  const dispatch = useDispatch();

  // const floatingId = uuidv4();
  useEffect(() => {
    setFloatingId(uuidv4());
  }, []);

  const itemGenerator = () => {
    const fixedZone = (item) => {
      return item.replace("$'", "'");
    };

    return items.map((item) => (
      // <option key={fixedZone(item)} value={fixedZone(item)}>
      <option key={`${fixedZone(item)}-${floatingId}`} value={fixedZone(item)}>
        {fixedZone(item)}
      </option>
    ));
  };

  const handleZoneSelect = (event) => {
    const selectedZone = event.target.value;
    onZoneSelect(selectedZone);
    // console.log(selectedZone);
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
    if (
      selectedZone === "Плечовий суглоб" ||
      selectedZone === "Кульшовий суглоб"
    ) {
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

    // -----------ОГК start---------

    // if (label === "Легеневий рисунок") {
    //   firstItem = true
    // }
    if (ogkNormaNenorma.includes(selectedZone)) {
      dispatch(editNorma(selectedZone));
      // console.log(selectedZone);
    }
    if (legenRysunok.includes(selectedZone)) {
      // dispatch(editLegenRusynokId({ floatingId }));
      dispatch(editLegenRusynokArray({ floatingId, selectedZone }));
      // console.log(`selectedZone: ${selectedZone}, id: ${floatingId}`);
    }
    if (koreni.includes(selectedZone)) {
      dispatch(editKoreniArray({ floatingId, selectedZone }));
    }
    if (synusy.includes(selectedZone)) {
      dispatch(editSynusyArray({ floatingId, selectedZone }));
    }
    if (kupalaDiadragmy.includes(selectedZone)) {
      dispatch(editKupalaDiadragmyArray({ floatingId, selectedZone }));
    }
    if (cor.includes(selectedZone)) {
      dispatch(editCorArray({ floatingId, selectedZone }));
    }
    if (ogkZakliuchennia.includes(selectedZone)) {
      dispatch(editOgkZakliuchenniaArray({ floatingId, selectedZone }));
    }
    // -----------ОГК end---------

    // -----------Череп start---------
    if (cherepViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Череп end---------

    // -----------ППН start---------
    if (ppnViews.includes(selectedZone)) {
      // dispatch(editPpnNormaNenormaArray({ floatingId, selectedZone }));
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
      // console.log(`selectedZone: ${selectedZone}, id: ${floatingId}`);
    }
    // -----------ППН end---------

    // -----------ШВХ start---------

    if (gvhNormaNenorma.includes(selectedZone)) {
      dispatch(editNorma(selectedZone));
      // console.log(selectedZone);
    }
    if (fiziologLordoz.includes(selectedZone)) {
      // dispatch(editLegenRusynokId({ floatingId }));
      dispatch(editCommaUniversalArray_1({ floatingId, selectedZone }));
      // console.log(`selectedZone: ${selectedZone}, id: ${floatingId}`);
    }
    if (seredynnaVis.includes(selectedZone)) {
      dispatch(editCommaUniversalArray_2({ floatingId, selectedZone }));
    }
    if (vysotaTilHrebtsiv.includes(selectedZone)) {
      dispatch(editSvhVysotaTilHrebtsivArray({ floatingId, selectedZone }));
    }
    if (mizhkhrebtseviPromizhky.includes(selectedZone)) {
      dispatch(editCommaUniversalArray_4({ floatingId, selectedZone }));
    }
    if (zamykaiuchiPlastynkyTilKhrebtsiv.includes(selectedZone)) {
      dispatch(editCommaUniversalArray_5({ floatingId, selectedZone }));
    }
    if (fasetkoviUnkovertSuhlShchelyny.includes(selectedZone)) {
      dispatch(editCommaUniversalArray_6({ floatingId, selectedZone }));
    }
    if (zakliuchenniaShvh.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------ШВХ end---------

    // -----------ГВХ start--------
    if (shvhNormaNenorma.includes(selectedZone)) {
      dispatch(editNorma(selectedZone));
      // console.log(selectedZone);
    }
    if (fiziologKifos.includes(selectedZone)) {
      // dispatch(editLegenRusynokId({ floatingId }));
      dispatch(editCommaUniversalArray_1({ floatingId, selectedZone }));
      // console.log(`selectedZone: ${selectedZone}, id: ${floatingId}`);
    }

    //seredynnaVis vysotaTilHrebtsivGvh mizhkhrebtseviPromizhky zamykaiuchiPlastynkyTilKhrebtsiv fasetkoviUnkovertSuhlShchelyny используются из ШВХ ))

    if (zakliuchenniaGvh.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------ГВХ end---------

    // -----------ПВХ start--------
    if (pvhNormaNenorma.includes(selectedZone)) {
      dispatch(editNorma(selectedZone));
      // console.log(selectedZone);
    }

    //seredynnaVis vysotaTilHrebtsivGvh mizhkhrebtseviPromizhky zamykaiuchiPlastynkyTilKhrebtsiv fasetkoviUnkovertSuhlShchelyny используются из ШВХ ))

    if (zakliuchenniaPvh.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------ПВХ end---------

    // -----------ОЧП start--------
    if (ochpViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------ОЧП end---------

    // -----------плечовийСуглоб start--------
    if (plechovyiSuhlobViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------плечовийСуглоб end---------

    // -----------Ключиця start--------
    if (kliuchytsiaViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Ключиця end---------
    // -----------Ребра start--------
    if (rebraViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Ліктьовий суглоб end---------
    if (liktovyiSuhlobViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Ліктьовий суглоб end---------
    // -----------Променево-зап'ястковий суглоб end---------
    if (promenevoZapIastkovyiSuhlobViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Променево-зап'ястковий суглоб end---------
    // -----------Кисть end---------
    if (kystViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Кисть end---------
    // -----------Кісток тазу end---------
    if (kistokTazuViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Кісток тазу end---------
    // -----------Кульшовий суглоб тазу end---------
    if (kulshovyiSuhlobViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Кульшовий суглоб тазу end---------
    // -----------Колінний суглоб  end---------
    if (kolinnyiSuhlobViews.includes(selectedZone)) {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Колінний суглоб end---------

    // -----------Гомілково-стопний суглоб end---------
    if (homilkovoStopnyiSuhlobViews.includes(selectedZone) || stopaViews.includes(selectedZone) || peredniViddilyStopyViews.includes(selectedZone))  {
      dispatch(editSemicolonUniversalArray_1({ floatingId, selectedZone }));
    }
    // -----------Гомілково-стопний суглоб end---------
  };

  // ----------только после инициализации компонент диспатчит первый айтем из списка----
  //   useEffect(()=>{
  //     if (items[0] === "посиленний") {
  //       dispatch(edit0LegenRusynok("посиленний"));
  //     }
  // }, [])

  return (
    <FloatingLabel className="mb-2" controlId={floatingId} label={label}>
      <Form.Select id={floatingId} onChange={handleZoneSelect}>
        {/* ---------------если выбрано что-то из ненормы ОГК-------------- */}
        {ogkNenormaItems.includes(label) ? (
          <option value="">--select an option--</option>
        ) : null}

        {/* --если выбран Череп или ППН (все пришедшие айтемы = айтемам черепа/ппн)--- */}
        {/* {items === ppnViews  ? (
          <option value="">--select an option--</option>
        ) : null} */}
        {/* --если выбрано что-то из ненормы ШВХ --- */}
        {/* ---------------если выбрано что-то из ненормы ОГК-------------- */}
        {shvhNenormaItems.includes(label) || gvhNenormaItems.includes(label) ? (
          <option value="">--select an option--</option>
        ) : null}

        {itemGenerator()}
      </Form.Select>
    </FloatingLabel>
  );
}
