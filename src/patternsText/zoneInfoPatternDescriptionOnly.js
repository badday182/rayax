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
import { zahalnaNenormaShvh } from "../data/SHVH/SHNH_notNorma/zahalnaNenormaShvh";
import { shvhNenormaItems } from "../data//SHVH/shvhNenormaItems";
import { gvhNormaNenorma } from "../data/GVH/gvhNormaNenorma";
import { gvhNenormaItems } from "../data/GVH/gvhNenormaItems";
import { zahalnaNenormaGvh } from "../data/GVH/GVH_notNorma/zahalnaNenormaGvh";
import { pvhNormaNenorma } from "../data/PVH/pvhNormaNenorma";

import { zahalnaNenormaPvh } from "../data/PVH/PVH_notNorma/zahalnaNenormaPvh";
import { pvhNenormaItems } from "../data/PVH/pvhNenormaItems";
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

export const ZoneInfoPatternDescriptionOnly = () => {
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
  const cherepNormaNenorma = useSelector(
    (state) => state.cherepInfo.cherepNormaNenormaText
  );

  // -----------Череп-selectors-end--------------

  // -----------ППН-selectors-start--------------
  const ppnNormaNenorma = useSelector(
    (state) => state.universalSlice.semicolonUniversalText_1
  );

  // -----------ППН-selectors-end--------------

  // -----------ШВХ-selectors-start--------------
  // const legenRusynok = useSelector((state) => state.ogkInfo.legenRusynok)
  const fiziologLordoz = useSelector(
    (state) => state.universalSlice.commaUniversalText_1
  );
  const seredynnaVis = useSelector(
    (state) => state.universalSlice.commaUniversalText_2
  );
  const vysotaTilHrebtsiv = useSelector(
    (state) => state.universalSlice.svhVysotaTilHrebtsivText
  );
  const mizhkhrebtseviPromizhky = useSelector(
    (state) => state.universalSlice.commaUniversalText_4
  );
  const zamykaiuchiPlastynkyTilKhrebtsiv = useSelector(
    (state) => state.universalSlice.commaUniversalText_5
  );
  const fasetkoviUnkovertSuhlShchelyny = useSelector(
    (state) => state.universalSlice.commaUniversalText_6
  );
  // const zakliuchenniaShvh = useSelector(
  //   (state) => state.universalSlice.semicolonUniversalText_1
  // );
  const zakliuchennia = useSelector(
    (state) => state.universalSlice.semicolonUniversalText_1
  );
  // -----------ШВХ-selectors-end--------------

  // -----------ГВХ-selectors-start-----из общих универсальных селекторов
  // const legenRusynok = useSelector((state) => state.ogkInfo.legenRusynok)
  const fiziologKifos = useSelector(
    (state) => state.universalSlice.commaUniversalText_1
  );
  // -----------ПВХ-selectors-end--------------

  // let report;
  // let mSv;
  // let radiography;
  let report = "";

  // --------------------ОГК-start---------------
  if (zone === "ОГК" && norma === "") {
    report = "Легені та серце без змін";
  }
  if (norma === "Легені та серце у межах вікових змін") {
    report = norma;
  }
  if (norma === "Загальна ОГК не норма") {
    report = ogkZagalnaNenorma;
  }
  // if (norma === "Не норма") {
  //   report = `Легеневий рисунок ${legenRusynok}. Корені ${koreni}. Синуси ${synusy}. купола діафрагми ${kupalaDiadragmy}. Cor - ${cor}.<br />Заключення: ${ogkZakliuchennia}.`;
  // }
  if (zone === "ОГК" && norma === "Не норма") {
    report = (
      <div>
        Легеневий рисунок {legenRusynok}. Корені {koreni}. Синуси {synusy}.
        Купола діафрагми {kupalaDiadragmy}. Cor - {cor}. <br />
        Заключення: {ogkZakliuchennia}.
      </div>
    );
  }

  // --------------------ОГК-end---------------

  // --------------------Череп-start---------------
  // if (zone === "Череп" && cherepNormaNenorma === "") {
  //   report = "Грубих кістково-травматичних змін не визначаються";
  // }
  if (zone === "Череп") {
    if (zakliuchennia === "") {
      report = `${cherepViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Череп-end---------------

  // --------------------ППН-start---------------
  if (zone === "ППН") {
    if (zakliuchennia === "") {
      report = `${ppnViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------ППН-end---------------

  // --------------------ШВХ-start---------------
  if (zone === "ШВХ") {
    if (norma === "") {
      report = shvhNormaNenorma[0]; //Груб кістк-травм змін не визначаються
    }
    if (norma === shvhNormaNenorma[2]) {
      // "Загальна не норма ШВХ"
      report = zahalnaNenormaShvh;
    }
    if (norma === shvhNormaNenorma[1]) {
      //"Не норма"
      report = (
        <div>
          {shvhNenormaItems[0]} {fiziologLordoz}. {shvhNenormaItems[1]}{" "}
          {seredynnaVis}. {shvhNenormaItems[2]} {vysotaTilHrebtsiv}.{" "}
          {shvhNenormaItems[3]} {mizhkhrebtseviPromizhky}. {shvhNenormaItems[4]}{" "}
          {zamykaiuchiPlastynkyTilKhrebtsiv}. {shvhNenormaItems[5]}{" "}
          {fasetkoviUnkovertSuhlShchelyny}.<br />
          {shvhNenormaItems[6]} {zakliuchennia}.
        </div>
      );
    }
  }
  // --------------------ШВХ-end---------------

  // --------------------ГВХ-start---------------
  if (zone === "ГВХ") {
    if (norma === "") {
      report = gvhNormaNenorma[0]; //Груб кістк-травм змін не визначаються
    }
    if (norma === gvhNormaNenorma[2]) {
      // "Загальна не норма ГВХ"
      report = zahalnaNenormaGvh;
    }
    if (norma === gvhNormaNenorma[1]) {
      //"Не норма"
      report = (
        <div>
          {gvhNenormaItems[0]} {fiziologKifos}. {gvhNenormaItems[1]}{" "}
          {seredynnaVis}. {gvhNenormaItems[2]} {vysotaTilHrebtsiv}.{" "}
          {gvhNenormaItems[3]} {mizhkhrebtseviPromizhky}. {gvhNenormaItems[4]}{" "}
          {zamykaiuchiPlastynkyTilKhrebtsiv}. {gvhNenormaItems[5]}{" "}
          {fasetkoviUnkovertSuhlShchelyny}.<br />
          {gvhNenormaItems[6]} {zakliuchennia}.
        </div>
      );
    }
  }
  // --------------------ГВХ-end---------------
  // --------------------ПВХ-start---------------
  if (zone === "ПВХ") {
    if (norma === "") {
      report = pvhNormaNenorma[0]; //Груб кістк-травм змін не визначаються
    }
    if (norma === pvhNormaNenorma[2]) {
      // "Загальна не норма ПВХ"
      report = zahalnaNenormaPvh;
    }
    if (norma === pvhNormaNenorma[1]) {
      //"Не норма"
      report = (
        <div>
          {pvhNenormaItems[0]} {fiziologLordoz}. {pvhNenormaItems[1]}{" "}
          {seredynnaVis}. {pvhNenormaItems[2]} {vysotaTilHrebtsiv}.{" "}
          {pvhNenormaItems[3]} {mizhkhrebtseviPromizhky}. {pvhNenormaItems[4]}{" "}
          {zamykaiuchiPlastynkyTilKhrebtsiv}. {pvhNenormaItems[5]}{" "}
          {fasetkoviUnkovertSuhlShchelyny}.<br />
          {pvhNenormaItems[6]} {zakliuchennia}.
        </div>
      );
    }
  }
  // --------------------ПВХ-end---------------

  // --------------------ОЧП-start---------------
  if (zone === "ОЧП") {
    if (zakliuchennia === "") {
      report = `${ochpViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------ОЧП-end---------------

  // --------------------Плечовий суглоб-start---------------
  if (zone === "Плечовий суглоб") {
    if (zakliuchennia === "") {
      report = `${plechovyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Плечовий суглоб-end---------------

  // --------------------Ключиця-start---------------
  if (zone === "Ключиця") {
    if (zakliuchennia === "") {
      report = `${kliuchytsiaViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Ключиця-end---------------

  // --------------------Ребра-start---------------
  if (zone === "Ребра") {
    if (zakliuchennia === "") {
      report = `${rebraViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Ребра-end---------------
  // --------------------Ліктьовий суглоб-start---------------
  if (zone === "Ліктьовий суглоб") {
    if (zakliuchennia === "") {
      report = `${liktovyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Ліктьовий суглоб-end---------------
  // --------------------Променево-зап'ястковий суглоб-start---------------
  if (zone === "Променево-зап'ястковий суглоб") {
    if (zakliuchennia === "") {
      report = `${promenevoZapIastkovyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Променево-зап'ястковий суглоб-end---------------
  // --------------------Кисть-start---------------
  if (zone === "Кисть") {
    if (zakliuchennia === "") {
      report = `${kystViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Кисть-end---------------
  // --------------------Кісток тазу-start---------------
  if (zone === "Кісток тазу") {
    if (zakliuchennia === kistokTazuViews[0]) {
      report = `${kistokTazuViews[0]}.`;
    } else {
      report = (
        <>
          Суглобові щілини кульшових суглобів нерівномірно звужені. Замикаючі
          пластинки вертлюгових западин склерозовані, із субхондральними кістами
          та крайовими остеофітами. Головки стегнових кісток сплощені.
          <br />
          Заключення: R-ознаки двобічного коксартрозу.
        </>
      );
    }
  }
  // --------------------Кісток тазу-end---------------
  // --------------------Кульшовий суглоб-start---------------
  if (zone === "Кульшовий суглоб") {
    if (zakliuchennia === "") {
      report = `${kulshovyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Кульшовий суглоб-end---------------
  // --------------------Колінний суглоб-start---------------
  if (zone === "Колінний суглоб") {
    if (zakliuchennia === "") {
      report = `${kolinnyiSuhlobViews[0]}.`;
    } else {
      zakliuchennia === "Загальна не норма"
        ? (report = (
            <>
              Суглобові щілини нерівномірно звужені. Замикаючі пластинки
              склерозовані, із крайовими остеофітами та субхондральними кістами.
              Міжвиросткові підвищення та полюса надколінка загострені.
              <br />
              Заключення: R-ознаки гонартрозу.
            </>
          ))
        : (report = `${zakliuchennia}.`);
    }
  }
  // --------------------Колінний суглоб-end---------------
  // --------------------Гомілковостопний суглоб-start---------------
  if (zone === "Гомілковостопний суглоб") {
    if (zakliuchennia === "") {
      report = `${homilkovoStopnyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Гомілковостопний суглоб-end---------------
  // --------------------Стопа-start---------------
  if (zone === "Стопа") {
    if (zakliuchennia === "") {
      report = `${stopaViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Стопа-end---------------
  // --------------------Передні відділи стопи-start---------------
  if (zone === "Передні відділи стопи") {
    if (zakliuchennia === "") {
      report = `${stopaViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Передні відділи стопи-end---------------

  return (
    <div>
      {/* <table
        width="100%"
        border-collapse="collapse"
        border="2px solid white"
        id={uuidv4()}
      >
        <tbody>
          <tr>
            <td>R-графiя: {radiography}</td>
            <td align="right">ЕЕД: {mSv} мЗв</td>
          </tr>
        </tbody>
      </table> */}
      {report}
      <br />
      <br />
    </div>
  );
};
