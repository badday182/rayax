import { useSelector } from "react-redux";
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
import { legenRysunok } from "../data/OGK_notNorma/legenRysunok";
import { koreni } from "../data/OGK_notNorma/koreni";
import { synusy } from "../data/OGK_notNorma/synusy";
import { kupalaDiadragmy } from "../data/OGK_notNorma/kupalaDiadragmy";
import { cor } from "../data/OGK_notNorma/cor";
import { ogkZakliuchennia } from "../data/OGK_notNorma/ogkZakliuchennia";
import { fiziologLordoz } from "../data/universal_notNorma/fiziologLordoz";
import { seredynnaVis } from "../data/universal_notNorma/seredynnaVis";
import { mizhkhrebtseviPromizhky } from "../data/universal_notNorma/mizhkhrebtseviPromizhky";
import { zamykaiuchiPlastynkyTilKhrebtsiv } from "../data/universal_notNorma/zamykaiuchiPlastynkyTilKhrebtsiv";
import { fasetkoviUnkovertSuhlShchelyny } from "../data/universal_notNorma/fasetkoviUnkovertSuhlShchelyny";
import { zakliuchenniaShvh } from "../data/SHVH/SHNH_notNorma/zakliuchenniaShvh";
import { fiziologKifos } from "../data/GVH/GVH_notNorma/fiziologKifos";
import { zakliuchenniaGvh } from "../data/GVH/GVH_notNorma/zakliuchenniaGvh";
import { vysotaTilHrebtsivShvh } from "../data/SHVH/SHNH_notNorma/vysotaTilHrebtsivShvh";
import { vysotaTilHrebtsivGvh } from "../data/GVH/GVH_notNorma/vysotaTilHrebtsivGvh";
import { vysotaTilHrebtsivPvh } from "../data/PVH/PVH_notNorma/vysotaTilHrebtsivPvh";
import { zakliuchenniaPvh } from "../data/PVH/PVH_notNorma/zakliuchenniaPvh";
import { kolinnyiSuhlobZahalnaNenorma } from "../data/KOLINNYISUHLOB/kolinnyiSuhlobZahalnaNenorma";
import { svoiVaryant } from "../data/svoiVaryant";
import { peredniViddilyStopyViews } from "../data/PEREDNIVIDDILYSTOPY/peredniViddilyStopyViews";

export const ZoneInfoPatternDescriptionOnly = () => {
  const zone = useSelector((state) => state.zoneInfo.zone);
  const proaction = useSelector((state) => state.zoneInfo.proaction);
  const side = useSelector((state) => state.zoneInfo.side);
  const norma = useSelector((state) => state.zoneInfo.norma);

  // const resetZoneInfoPattern = useSelector(
  //   (state) => state.resetZoneInfoPattern.reseter  );

  // -----------ОГК-selectors-start--------------
  // const legenRusynok = useSelector((state) => state.ogkInfo.legenRusynok)
  const legenRusynokState = useSelector(
    (state) => state.ogkInfo.legenRusynokText
  );
  const koreniState = useSelector((state) => state.ogkInfo.koreniText);
  const synusyState = useSelector((state) => state.ogkInfo.synusyText);
  const kupalaDiadragmyState = useSelector(
    (state) => state.ogkInfo.kupalaDiadragmyText
  );
  const corState = useSelector((state) => state.ogkInfo.corText);
  const ogkZakliuchenniaState = useSelector(
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
  // const legenRusynokState = useSelector((state) => state.ogkInfo.legenRusynokState)
  const fiziologLordozState = useSelector(
    (state) => state.universalSlice.commaUniversalText_1
  );
  const seredynnaVisState = useSelector(
    (state) => state.universalSlice.commaUniversalText_2
  );
  const vysotaTilHrebtsivState = useSelector(
    (state) => state.universalSlice.svhVysotaTilHrebtsivText
  );
  const mizhkhrebtseviPromizhkyState = useSelector(
    (state) => state.universalSlice.commaUniversalText_4
  );
  const zamykaiuchiPlastynkyTilKhrebtsivState = useSelector(
    (state) => state.universalSlice.commaUniversalText_5
  );
  const fasetkoviUnkovertSuhlShchelynyState = useSelector(
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
  // const legenRusynokState = useSelector((state) => state.ogkInfo.legenRusynokState)
  const fiziologKifosState = useSelector(
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
        {/* если свой вариант то булет область с ".", если не будет выбора - области не будет */}
        {legenRusynokState === legenRysunok[legenRysunok.length - 1] && (
          <>Легеневий рисунок . </>
        )}
        {legenRusynokState !== "" &&
          legenRusynokState !== legenRysunok[legenRysunok.length - 1] && (
            <>Легеневий рисунок {legenRusynokState}. </>
          )}

        {koreniState === koreni[koreni.length - 1] && <>Корені . </>}
        {koreniState !== "" && koreniState !== koreni[koreni.length - 1] && (
          <>Корені {koreniState}. </>
        )}

        {synusyState === synusy[synusy.length - 1] && <>Синуси . </>}
        {synusyState !== "" && synusyState !== synusy[synusy.length - 1] && (
          <>Синуси {synusyState}. </>
        )}

        {kupalaDiadragmyState ===
          kupalaDiadragmy[kupalaDiadragmy.length - 1] && (
          <>Купола діафрагми . </>
        )}
        {kupalaDiadragmyState !== "" &&
          kupalaDiadragmyState !==
            kupalaDiadragmy[kupalaDiadragmy.length - 1] && (
            <>Купола діафрагми {kupalaDiadragmyState}. </>
          )}

        {corState === cor[cor.length - 1] && <>Cor - . </>}
        {corState !== "" && corState !== cor[cor.length - 1] && (
          <>Cor - {corState}. </>
        )}

        {ogkZakliuchenniaState ===
          ogkZakliuchennia[ogkZakliuchennia.length - 1] && <>Заключення: . </>}
        {ogkZakliuchenniaState !== "" &&
          ogkZakliuchenniaState !==
            ogkZakliuchennia[ogkZakliuchennia.length - 1] && (
            <>Заключення: {ogkZakliuchenniaState}. </>
          )}
        {/* {koreniState !== "" && <>Корені {koreniState}. </>}
        {synusyState !== "" && <>Синуси {synusyState}. </>}
        {kupalaDiadragmyState !== "" && <>Купола діафрагми {kupalaDiadragmyState}. </>}
        {corState !== "" && <>Cor - {corState}. </>}
        <br />
        {ogkZakliuchenniaState !== "" && (
          <>Заключення: {ogkZakliuchenniaState}.</>
        )} */}
      </div>
    );
  }

  // --------------------ОГК-end---------------

  // --------------------Череп-start---------------
  // if (zone === "Череп" && cherepNormaNenorma === "") {
  //   report = "Грубих кістково-травматичних змін не визначаються";
  // }
  if (zone === "Череп") {
    if (zakliuchennia === svoiVaryant) {
      report = ``;
    } else if (zakliuchennia === "") {
      report = `${cherepViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Череп-end---------------

  // --------------------ППН-start---------------
  if (zone === "ППН") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
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
          {fiziologLordozState ===
            fiziologLordoz[fiziologLordoz.length - 1] && (
            <>{shvhNenormaItems[0]} . </>
          )}
          {fiziologLordozState !== "" &&
            fiziologLordozState !==
              fiziologLordoz[fiziologLordoz.length - 1] && (
              <>
                {shvhNenormaItems[0]} {fiziologLordozState}.{" "}
              </>
            )}

          {seredynnaVisState === seredynnaVis[seredynnaVis.length - 1] && (
            <>{shvhNenormaItems[1]} . </>
          )}
          {seredynnaVisState !== "" &&
            seredynnaVisState !== seredynnaVis[seredynnaVis.length - 1] && (
              <>
                {shvhNenormaItems[1]} {seredynnaVisState}.{" "}
              </>
            )}

          {vysotaTilHrebtsivState ===
            vysotaTilHrebtsivShvh[vysotaTilHrebtsivShvh.length - 1] && (
            <>{shvhNenormaItems[2]} . </>
          )}
          {vysotaTilHrebtsivState !== "" &&
            vysotaTilHrebtsivState !==
            vysotaTilHrebtsivShvh[vysotaTilHrebtsivShvh.length - 1] && (
              <>
                {shvhNenormaItems[2]} {vysotaTilHrebtsivState}.{" "}
              </>
            )}

          {mizhkhrebtseviPromizhkyState ===
            mizhkhrebtseviPromizhky[mizhkhrebtseviPromizhky.length - 1] && (
            <>{shvhNenormaItems[3]} . </>
          )}
          {mizhkhrebtseviPromizhkyState !== "" &&
            mizhkhrebtseviPromizhkyState !==
              mizhkhrebtseviPromizhky[mizhkhrebtseviPromizhky.length - 1] && (
              <>
                {shvhNenormaItems[3]} {mizhkhrebtseviPromizhkyState}.{" "}
              </>
            )}

          {zamykaiuchiPlastynkyTilKhrebtsivState ===
            zamykaiuchiPlastynkyTilKhrebtsiv[
              zamykaiuchiPlastynkyTilKhrebtsiv.length - 1
            ] && <>{shvhNenormaItems[4]} . </>}
          {zamykaiuchiPlastynkyTilKhrebtsivState !== "" &&
            zamykaiuchiPlastynkyTilKhrebtsivState !==
              zamykaiuchiPlastynkyTilKhrebtsiv[
                zamykaiuchiPlastynkyTilKhrebtsiv.length - 1
              ] && (
              <>
                {shvhNenormaItems[4]} {zamykaiuchiPlastynkyTilKhrebtsivState}.{" "}
              </>
            )}

          {fasetkoviUnkovertSuhlShchelynyState ===
            fasetkoviUnkovertSuhlShchelyny[
              fasetkoviUnkovertSuhlShchelyny.length - 1
            ] && (
            <>
              {shvhNenormaItems[5]} .<br />
            </>
          )}
          {fasetkoviUnkovertSuhlShchelynyState !== "" &&
            fasetkoviUnkovertSuhlShchelynyState !==
              fasetkoviUnkovertSuhlShchelyny[
                fasetkoviUnkovertSuhlShchelyny.length - 1
              ] && (
              <>
                {shvhNenormaItems[5]} {fasetkoviUnkovertSuhlShchelynyState}.
                <br />
              </>
            )}

          {zakliuchennia ===
            zakliuchenniaShvh[zakliuchenniaShvh.length - 1] && (
            <>
              {shvhNenormaItems[6]} .<br />
            </>
          )}
          {zakliuchennia !== "" &&
            zakliuchennia !==
              zakliuchenniaShvh[zakliuchenniaShvh.length - 1] && (
              <>
                {shvhNenormaItems[6]} {zakliuchennia}.
              </>
            )}

          {/* {shvhNenormaItems[1]} {seredynnaVisState}.
          {shvhNenormaItems[2]}{" "}{vysotaTilHrebtsivState}.
          {shvhNenormaItems[3]} {mizhkhrebtseviPromizhkyState}.{" "}
          {shvhNenormaItems[4]} {zamykaiuchiPlastynkyTilKhrebtsivState}.{" "}
          {shvhNenormaItems[5]} {fasetkoviUnkovertSuhlShchelynyState}.<br />
          {shvhNenormaItems[6]} {zakliuchennia}. */}
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
          {fiziologKifosState === fiziologKifos[fiziologKifos.length - 1] && (
            <>{gvhNenormaItems[0]} . </>
          )}
          {fiziologKifosState !== "" &&
            fiziologKifosState !== fiziologKifos[fiziologKifos.length - 1] && (
              <>
                {gvhNenormaItems[0]} {fiziologKifosState}.{" "}
              </>
            )}

          {seredynnaVisState === seredynnaVis[seredynnaVis.length - 1] && (
            <>{gvhNenormaItems[1]} . </>
          )}
          {seredynnaVisState !== "" &&
            seredynnaVisState !== seredynnaVis[seredynnaVis.length - 1] && (
              <>
                {gvhNenormaItems[1]} {seredynnaVisState}.{" "}
              </>
            )}

          {vysotaTilHrebtsivState ===
            vysotaTilHrebtsivGvh[vysotaTilHrebtsivGvh.length - 1] && (
            <>{gvhNenormaItems[2]} . </>
          )}
          {vysotaTilHrebtsivState !== "" &&
            vysotaTilHrebtsivState !==
              vysotaTilHrebtsivGvh[vysotaTilHrebtsivGvh.length - 1] && (
              <>
                {gvhNenormaItems[2]} {vysotaTilHrebtsivState}.{" "}
              </>
            )}

          {mizhkhrebtseviPromizhkyState ===
            mizhkhrebtseviPromizhky[mizhkhrebtseviPromizhky.length - 1] && (
            <>{gvhNenormaItems[3]} . </>
          )}
          {mizhkhrebtseviPromizhkyState !== "" &&
            mizhkhrebtseviPromizhkyState !==
              mizhkhrebtseviPromizhky[mizhkhrebtseviPromizhky.length - 1] && (
              <>
                {gvhNenormaItems[3]} {mizhkhrebtseviPromizhkyState}.{" "}
              </>
            )}

          {zamykaiuchiPlastynkyTilKhrebtsivState ===
            zamykaiuchiPlastynkyTilKhrebtsiv[
              zamykaiuchiPlastynkyTilKhrebtsiv.length - 1
            ] && <>{gvhNenormaItems[4]} . </>}
          {zamykaiuchiPlastynkyTilKhrebtsivState !== "" &&
            zamykaiuchiPlastynkyTilKhrebtsivState !==
              zamykaiuchiPlastynkyTilKhrebtsiv[
                zamykaiuchiPlastynkyTilKhrebtsiv.length - 1
              ] && (
              <>
                {gvhNenormaItems[4]} {zamykaiuchiPlastynkyTilKhrebtsivState}.{" "}
              </>
            )}

          {fasetkoviUnkovertSuhlShchelynyState ===
            fasetkoviUnkovertSuhlShchelyny[
              fasetkoviUnkovertSuhlShchelyny.length - 1
            ] && <>{gvhNenormaItems[5]} . </>}
          {fasetkoviUnkovertSuhlShchelynyState !== "" &&
            fasetkoviUnkovertSuhlShchelynyState !==
              fasetkoviUnkovertSuhlShchelyny[
                fasetkoviUnkovertSuhlShchelyny.length - 1
              ] && (
              <>
                {gvhNenormaItems[5]} {fasetkoviUnkovertSuhlShchelynyState}.{" "}
              </>
            )}

          {zakliuchennia ===
            zakliuchenniaGvh[zakliuchenniaGvh.length - 1] && (
            <>
              {gvhNenormaItems[6]} .<br />
            </>
          )}
          {zakliuchennia !== "" &&
            zakliuchennia !==
            zakliuchenniaGvh[zakliuchenniaGvh.length - 1] && (
              <>
                {gvhNenormaItems[6]} {zakliuchennia}.
              </>
            )}

          {/* {gvhNenormaItems[0]} {fiziologKifosState}. 
          {gvhNenormaItems[1]}{" "} {seredynnaVisState}. 
          {gvhNenormaItems[2]} {vysotaTilHrebtsivState}.{" "}
          {gvhNenormaItems[3]} {mizhkhrebtseviPromizhkyState}.
          {gvhNenormaItems[4]}{" "}{zamykaiuchiPlastynkyTilKhrebtsivState}.
          {gvhNenormaItems[5]}{" "} {fasetkoviUnkovertSuhlShchelynyState}.<br />
          {gvhNenormaItems[6]} {zakliuchennia}. */}
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

{fiziologLordozState === fiziologLordoz[fiziologLordoz.length - 1] && (
            <>{pvhNenormaItems[0]} . </>
          )}
          {fiziologLordozState !== "" &&
            fiziologLordozState !== fiziologLordoz[fiziologLordoz.length - 1] && (
              <>
                {pvhNenormaItems[0]} {fiziologLordozState}.{" "}
              </>
            )}

          {seredynnaVisState === seredynnaVis[seredynnaVis.length - 1] && (
            <>{pvhNenormaItems[1]} . </>
          )}
          {seredynnaVisState !== "" &&
            seredynnaVisState !== seredynnaVis[seredynnaVis.length - 1] && (
              <>
                {pvhNenormaItems[1]} {seredynnaVisState}.{" "}
              </>
            )}

          {vysotaTilHrebtsivState ===
            vysotaTilHrebtsivPvh[vysotaTilHrebtsivPvh.length - 1] && (
            <>{pvhNenormaItems[2]} . </>
          )}
          {vysotaTilHrebtsivState !== "" &&
            vysotaTilHrebtsivState !==
            vysotaTilHrebtsivPvh[vysotaTilHrebtsivPvh.length - 1] && (
              <>
                {pvhNenormaItems[2]} {vysotaTilHrebtsivState}.{" "}
              </>
            )}

          {mizhkhrebtseviPromizhkyState ===
            mizhkhrebtseviPromizhky[mizhkhrebtseviPromizhky.length - 1] && (
            <>{pvhNenormaItems[3]} . </>
          )}
          {mizhkhrebtseviPromizhkyState !== "" &&
            mizhkhrebtseviPromizhkyState !==
              mizhkhrebtseviPromizhky[mizhkhrebtseviPromizhky.length - 1] && (
              <>
                {pvhNenormaItems[3]} {mizhkhrebtseviPromizhkyState}.{" "}
              </>
            )}

          {zamykaiuchiPlastynkyTilKhrebtsivState ===
            zamykaiuchiPlastynkyTilKhrebtsiv[
              zamykaiuchiPlastynkyTilKhrebtsiv.length - 1
            ] && <>{pvhNenormaItems[4]} . </>}
          {zamykaiuchiPlastynkyTilKhrebtsivState !== "" &&
            zamykaiuchiPlastynkyTilKhrebtsivState !==
              zamykaiuchiPlastynkyTilKhrebtsiv[
                zamykaiuchiPlastynkyTilKhrebtsiv.length - 1
              ] && (
              <>
                {pvhNenormaItems[4]} {zamykaiuchiPlastynkyTilKhrebtsivState}.{" "}
              </>
            )}

          {fasetkoviUnkovertSuhlShchelynyState ===
            fasetkoviUnkovertSuhlShchelyny[
              fasetkoviUnkovertSuhlShchelyny.length - 1
            ] && <>{pvhNenormaItems[5]} . </>}
          {fasetkoviUnkovertSuhlShchelynyState !== "" &&
            fasetkoviUnkovertSuhlShchelynyState !==
              fasetkoviUnkovertSuhlShchelyny[
                fasetkoviUnkovertSuhlShchelyny.length - 1
              ] && (
              <>
                {pvhNenormaItems[5]} {fasetkoviUnkovertSuhlShchelynyState}.{" "}
              </>
            )}

          {zakliuchennia ===
            zakliuchenniaPvh[zakliuchenniaPvh.length - 1] && (
            <>
              {pvhNenormaItems[6]} .<br />
            </>
          )}
          {zakliuchennia !== "" &&
            zakliuchennia !==
            zakliuchenniaPvh[zakliuchenniaPvh.length - 1] && (
              <>
                {gvhNenormaItems[6]} {zakliuchennia}.
              </>
            )}


          {/* {pvhNenormaItems[0]} {fiziologLordozState}.
          {pvhNenormaItems[1]}{" "}{seredynnaVisState}.
          {pvhNenormaItems[2]} {vysotaTilHrebtsivState}.{" "}
          {pvhNenormaItems[3]} {mizhkhrebtseviPromizhkyState}.{" "}
          {pvhNenormaItems[4]} {zamykaiuchiPlastynkyTilKhrebtsivState}.{" "}
          {pvhNenormaItems[5]} {fasetkoviUnkovertSuhlShchelynyState}.<br />
          {pvhNenormaItems[6]} {zakliuchennia}. */}
        </div>
      );
    }
  }
  // --------------------ПВХ-end---------------

  // --------------------ОЧП-start---------------
  if (zone === "ОЧП") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${ochpViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------ОЧП-end---------------

  // --------------------Плечовий суглоб-start---------------
  if (zone === "Плечовий суглоб") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${plechovyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Плечовий суглоб-end---------------

  // --------------------Ключиця-start---------------
  if (zone === "Ключиця") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${kliuchytsiaViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Ключиця-end---------------

  // --------------------Ребра-start---------------
  if (zone === "Ребра") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${rebraViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Ребра-end---------------
  // --------------------Ліктьовий суглоб-start---------------
  if (zone === "Ліктьовий суглоб") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${liktovyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Ліктьовий суглоб-end---------------
  // --------------------Променево-зап'ястковий суглоб-start---------------
  if (zone === "Променево-зап'ястковий суглоб") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${promenevoZapIastkovyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Променево-зап'ястковий суглоб-end---------------
  // --------------------Кисть-start---------------
  if (zone === "Кисть") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${kystViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Кисть-end---------------
  // --------------------Кісток тазу-start---------------
  if (zone === "Кісток тазу") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === kistokTazuViews[0]) {
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
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${kulshovyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Кульшовий суглоб-end---------------
  // --------------------Колінний суглоб-start---------------
  if (zone === "Колінний суглоб") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${kolinnyiSuhlobViews[0]}.`;
    } else {
      zakliuchennia === kolinnyiSuhlobZahalnaNenorma
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
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${homilkovoStopnyiSuhlobViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Гомілковостопний суглоб-end---------------
  // --------------------Стопа-start---------------
  if (zone === "Стопа") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${stopaViews[0]}.`;
    } else {
      report = `${zakliuchennia}.`;
    }
  }
  // --------------------Стопа-end---------------
  // --------------------Передні відділи стопи-start---------------
  if (zone === "Передні відділи стопи") {
    if (zakliuchennia === svoiVaryant) {
      report = "";
    } else if (zakliuchennia === "") {
      report = `${peredniViddilyStopyViews[0]}.`;
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
