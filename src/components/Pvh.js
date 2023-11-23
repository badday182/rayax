import React, { useState } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import { v4 as uuidv4 } from "uuid";

import { fiziologLordoz } from "../data/PVH/PVH_notNorma/fiziologLordoz";
import { seredynnaVis } from "../data/PVH/PVH_notNorma/seredynnaVis";
import { vysotaTilHrebtsivGvh } from "../data/PVH/PVH_notNorma/vysotaTilHrebtsiv";
import { mizhkhrebtseviPromizhky } from "../data/PVH/PVH_notNorma/mizhkhrebtseviPromizhky";
import { zamykaiuchiPlastynkyTilKhrebtsiv } from "../data/PVH/PVH_notNorma/zamykaiuchiPlastynkyTilKhrebtsiv";
import { fasetkoviUnkovertSuhlShchelyny } from "../data/PVH/PVH_notNorma/fasetkoviUnkovertSuhlShchelyny";

import { AddOptionBlock } from "./AddOptionBlock";
import { pvhNormaNenorma } from "../data/PVH/pvhNormaNenorma";
import { pvhNenormaItems } from "../data/PVH/pvhNenormaItems";
import { zakliuchenniaPvh } from "../data/PVH/PVH_notNorma/zakliuchenniaPvh";
export const Pvh = () => {
  const [selectedPvhViews, setSelectedPvhViews] = useState("");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState(
    pvhNormaNenorma[0]
  );

  const [fiziologLordozCounter, setfiziologLordozCounter] = useState([
    { id: uuidv4() },
  ]);
  const [seredynnaVisCounter, setSeredynnaVisCounter] = useState([
    { id: uuidv4() },
  ]);
  const [vysotaTilHrebtsivCounter, setVysotaTilHrebtsivCounter] = useState([
    { id: uuidv4() },
  ]);
  const [mizhkhrebtseviPromizhkyCounter, setMizhkhrebtseviPromizhkyCounter] =
    useState([{ id: uuidv4() }]);
  const [
    zamykaiuchiPlastynkyTilKhrebtsivCounter,
    setZamykaiuchiPlastynkyTilKhrebtsivCounter,
  ] = useState([{ id: uuidv4() }]);
  const [
    fasetkoviUnkovertSuhlShchelynyCounter,
    setFasetkoviUnkovertSuhlShchelynyCounter,
  ] = useState([{ id: uuidv4() }]);
  const [zakliuchenniaPvhCounter, setZakliuchenniaPvhCounter] = useState([
    { id: uuidv4() },
  ]);

  const handleAddOption = (setter, counter, setCounter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <FormFloatingSelect
        items={pvhNormaNenorma}
        onZoneSelect={setSelectednormaNenorma}
        label="Норма/Не норма"
      />
      {selectednormaNenorma === "Не норма" ? (
        <div className=" ">
          <AddOptionBlock
            items={fiziologLordoz}
            onZoneSelect={setSelectedPvhViews}
            label={pvhNenormaItems[0]}
            counter={fiziologLordozCounter}
            onAddClick={() =>
              handleAddOption(
                setfiziologLordozCounter,
                fiziologLordozCounter,
                setfiziologLordozCounter
              )
            }
          />
          <AddOptionBlock
            items={seredynnaVis}
            onZoneSelect={setSelectedPvhViews}
            label={pvhNenormaItems[1]}
            counter={seredynnaVisCounter}
            onAddClick={() =>
              handleAddOption(
                setSeredynnaVisCounter,
                seredynnaVisCounter,
                setSeredynnaVisCounter
              )
            }
          />
          <AddOptionBlock
            items={vysotaTilHrebtsivGvh}
            onZoneSelect={setSelectedPvhViews}
            // label="Висота тіл хрепців"
            label={pvhNenormaItems[2]}
            counter={vysotaTilHrebtsivCounter}
            onAddClick={() =>
              handleAddOption(
                setVysotaTilHrebtsivCounter,
                vysotaTilHrebtsivCounter,
                setVysotaTilHrebtsivCounter
              )
            }
          />
          <AddOptionBlock
            items={mizhkhrebtseviPromizhky}
            onZoneSelect={setSelectedPvhViews}
            // label="Міжхребцеві проміжки"
            label={pvhNenormaItems[3]}
            counter={mizhkhrebtseviPromizhkyCounter}
            onAddClick={() =>
              handleAddOption(
                setMizhkhrebtseviPromizhkyCounter,
                mizhkhrebtseviPromizhkyCounter,
                setMizhkhrebtseviPromizhkyCounter
              )
            }
          />
          <AddOptionBlock
            items={zamykaiuchiPlastynkyTilKhrebtsiv}
            onZoneSelect={setSelectedPvhViews}
            // label="Замикаючі пластинки тіл хребців"
            label={pvhNenormaItems[4]}
            counter={zamykaiuchiPlastynkyTilKhrebtsivCounter}
            onAddClick={() =>
              handleAddOption(
                setZamykaiuchiPlastynkyTilKhrebtsivCounter,
                zamykaiuchiPlastynkyTilKhrebtsivCounter,
                setZamykaiuchiPlastynkyTilKhrebtsivCounter
              )
            }
          />
          <AddOptionBlock
            items={fasetkoviUnkovertSuhlShchelyny}
            onZoneSelect={setSelectedPvhViews}
            // label="Фасеткові та унковертебральні суглобові щелини"
            label={pvhNenormaItems[5]}
            counter={fasetkoviUnkovertSuhlShchelynyCounter}
            onAddClick={() =>
              handleAddOption(
                setFasetkoviUnkovertSuhlShchelynyCounter,
                fasetkoviUnkovertSuhlShchelynyCounter,
                setFasetkoviUnkovertSuhlShchelynyCounter
              )
            }
          />
          <AddOptionBlock
            items={zakliuchenniaPvh}
            onZoneSelect={setSelectedPvhViews}
            label={pvhNenormaItems[6]} // Заключення:
            counter={zakliuchenniaPvhCounter}
            onAddClick={() =>
              handleAddOption(
                setZakliuchenniaPvhCounter,
                zakliuchenniaPvhCounter,
                setZakliuchenniaPvhCounter
              )
            }
          />
        </div>
      ) : null}
    </div>
  );
};
