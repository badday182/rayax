import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ogkZagalnaNenorma } from "../data/OGK_notNorma/ogkZagalnaNenorma";
import { zonesWithSides } from "../data/zonesWithSides";
import { zonesWithOnly2Projection } from "../data/zonesWithOnly2Projection";
import { zonesWithOnlyDirectProjection } from "../data/zonesWithOnlyDirectProjection";

import { cherepViews } from "../data/Cherep/cherepViews";
import { ppnViews } from "../data/PPN/ppnViews";
import { shvhNormaNenorma } from "../data/SHVH/shvhNormaNenorma";
import {zahalnaNenormaShvh} from "../data/SHVH/SHNH_notNorma/zahalnaNenormaShvh"
import {shvhNenormaItems} from '../data//SHVH/shvhNenormaItems'

export const ZoneInfoPattern = () => {
  const zone = useSelector((state) => state.zoneInfo.zone);
  const proaction = useSelector((state) => state.zoneInfo.proaction);
  const side = useSelector((state) => state.zoneInfo.side);
  const norma = useSelector((state) => state.zoneInfo.norma);

  // const resetZoneInfoPattern = useSelector(
  //   (state) => state.resetZoneInfoPattern.reseter  );

  // -----------ОГК-selectors-start--------------
  // const legenRusynok = useSelector((state) => state.ogkInfo.legenRusynok)
  const legenRusynok = useSelector((state) => state.ogkInfo.legenRusynokText);
  const koreni = useSelector((state) => state.ogkInfo.koreniText);
  const synusy = useSelector((state) => state.ogkInfo.synusyText);
  const kupalaDiadragmy = useSelector(
    (state) => state.ogkInfo.kupalaDiadragmyText
  );
  const cor = useSelector((state) => state.ogkInfo.corText);
  const ogkZakliuchennia = useSelector(
    (state) => state.ogkInfo.ogkZakliuchenniaText
  );
  // -----------ОГК-selectors-end--------------

  // -----------Череп-selectors-start--------------
  const cherepNormaNenorma = useSelector((state) => state.cherepInfo.cherepNormaNenormaText);

  // -----------Череп-selectors-end--------------

  // -----------ППН-selectors-start--------------
  const ppnNormaNenorma = useSelector((state) => state.universalSlice.semicolonUniversalText_1);

  // -----------ППН-selectors-end--------------

    // -----------ШВХ-selectors-start--------------
  // const legenRusynok = useSelector((state) => state.ogkInfo.legenRusynok)
  const fiziologLordoz = useSelector((state) => state.universalSlice.commaUniversalText_1);
  const seredynnaVis = useSelector((state) => state.universalSlice.commaUniversalText_2);
  const vysotaTilHrebtsiv = useSelector((state) => state.universalSlice.svhVysotaTilHrebtsivText);
  const mizhkhrebtseviPromizhky = useSelector(
    (state) => state.universalSlice.commaUniversalText_4
  );
  const zamykaiuchiPlastynkyTilKhrebtsiv = useSelector((state) => state.universalSlice.commaUniversalText_5);
  const fasetkoviUnkovertSuhlShchelyny = useSelector(
    (state) => state.universalSlice.commaUniversalText_6
  );
  // -----------ШВХ-selectors-end--------------

  // let report;
  // let mSv;
  // let radiography;
  let report = "";
  let mSv = "";
  let radiography = "";

  // useEffect(() => {
  //   report = "";
  //   mSv = "";
  //   radiography = "";
  // }, []);
  // }, [resetZoneInfoPattern]);

  const zoneMappings = {
    ППН: "0,12",
    Череп: "0,24",
    ШВХ: "0,3",
    ГВХ: "0,7",
    ПВХ: "0,9",
    Кисть: "0,2",
    Стопа: "0,2",
    "Ліктьовий суглоб": "0,2",
    "Променево-зап'ястковий суглоб": "0,2",
    "Колінний суглоб": "0,2",
    "Гомілково-стопний суглоб": "0,2",
    "Передні відділи стопи": "0,2",

    ОЧП: "0,16",
    Ключиця: "0,3",
    "Кісток тазу": "0,9",
    Ребра: "0,5",
  };
  // --------------------set-mSv-start---------------
  if (zone === "ОГК" && proaction === "Оглядова") {
    mSv = "0,25";
    radiography = `${zone} ${proaction.toLowerCase()}`;
  } else if (zone === "ОГК" && proaction === "Пряма + права бічна") {
    mSv = "0,5";
    radiography = `${zone} у прямій та правій бічній проекціях`;
  } else if (zone === "ОГК" && proaction === "Пряма + ліва бічна") {
    mSv = "0,5";
    radiography = `${zone} у прямій та лівій бічній проекціях`;
  } else if (zone === "Плечовий суглоб" && proaction === "В 2-х проєкціях") {
    mSv = "0,6";
  } else if (zone === "Плечовий суглоб" && proaction === "Пряма") {
    mSv = "0,3";
  } else if (zone === "Кульшовий суглоб" && proaction === "В 2-х проєкціях") {
    mSv = "1,6";
  } else if (zone === "Кульшовий суглоб" && proaction === "Пряма") {
    mSv = "0,8";
  } else {
    mSv = zoneMappings[zone] || "____";
  }
  // --------------------set-mSv-end---------------

  // --------------------set-R-графiя-start---------------
  if (
    zonesWithOnly2Projection.includes(zone) &&
    proaction === "В 2-х проєкціях"
  ) {
    radiography = `${zone} в 2-х проєкціях`;
  } else if (
    zonesWithOnlyDirectProjection.includes(zone) &&
    proaction === "Пряма"
  ) {
    radiography = `${zone} в прямій проєкції`;
  }
  // --------------------set-R-графiя-end---------------

  // --------------------ОГК-start---------------
  else if (zone === "ОГК" && norma === "") {
    report = "Легені та серце без змін";
  }
  if (norma === "Легені та серце у межах вікових змін") {
    report = norma;
  }
  if (norma === "Загальна ОГК не норма") {
    report = ogkZagalnaNenorma;
  }
  // if (norma === "Не норма") {
  //   report = `Легеневий рисунок ${legenRusynok}. Корені ${koreni}. Синуси ${synusy}. Купала діафрагми ${kupalaDiadragmy}. Cor - ${cor}.<br />Заключення: ${ogkZakliuchennia}.`;
  // }
  if (zone === "ОГК" && norma === "Не норма") {
    report = (
      <div>
        Легеневий рисунок {legenRusynok}. Корені {koreni}. Синуси {synusy}.
        Купала діафрагми {kupalaDiadragmy}. Cor - {cor}. <br />
        Заключення: {ogkZakliuchennia}.
      </div>
    );
  }

  // --------------------ОГК-end---------------

  // --------------------Череп-start---------------
  // if (zone === "Череп" && cherepNormaNenorma === "") {
  //   report = "Грубих кістково-травматичних змін не визначаються";
  // }
  if (zone === "Череп"){
    if (cherepNormaNenorma === "")
    {report = `${cherepViews[0]}.`} else 
    {report = `${cherepNormaNenorma}.`}
    // if (cherepNormaNenorma === cherepViews[1])
    // {report = `${cherepViews[1]}.`} 
    // if (cherepNormaNenorma === cherepViews[2])
    // {report = `${cherepViews[2]}.`} 
    // if (cherepNormaNenorma === cherepViews[3])
    // {report = `${cherepViews[3]}.`} 
    // if (cherepNormaNenorma === cherepViews[4])
    // {report = `${cherepViews[4]}.`} 
    // if (cherepNormaNenorma === cherepViews[5])
    // {report = `${cherepViews[5]}.`} 
  }
  // --------------------Череп-end---------------

    // --------------------ППН-start---------------
  if (zone === "ППН"){
    radiography = 'ППН'
    if (ppnNormaNenorma === "")
    {report = `${ppnViews[0]}.`} else 
    {report = `${ppnNormaNenorma}.`}
  }
  // --------------------ППН-end---------------

    // --------------------ШВХ-start---------------
    if (zone === "ШВХ") {
      if (norma === ''){
        report = shvhNormaNenorma[0]; //Груб кістк-травм змін не визначаються
      }
      if (norma === shvhNormaNenorma[2]) {// "Загальна не норма ШВХ"
        report = zahalnaNenormaShvh;
      }
      if (norma === shvhNormaNenorma[1]) { //"Не норма"
        report = (
          <div>           
{shvhNenormaItems[0]} {fiziologLordoz}. {shvhNenormaItems[1]} {seredynnaVis}. {shvhNenormaItems[2]} {vysotaTilHrebtsiv}. {shvhNenormaItems[3]} {mizhkhrebtseviPromizhky}. {shvhNenormaItems[4]} {zamykaiuchiPlastynkyTilKhrebtsiv}. {shvhNenormaItems[5]} {fasetkoviUnkovertSuhlShchelyny}.
          </div>
        );
      }
    }
  
    // --------------------ШВХ-end---------------
  
  return (
    <div>
      <table
        id={uuidv4()}
        // style="border-collapse: collapse; width: 100%; border-color:transparent"
        //   border="1"
      >
        <tbody>
          <tr>
            <td>R-графiя: {radiography}</td>
            <td>ЕЕД: {mSv} мЗв</td>
          </tr>
        </tbody>
      </table>
      <br />
      {/* <p>{report}</p> */}
      {report}
      <br />
      <br />
    </div>
  );
};
