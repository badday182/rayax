import React, { useState } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import { v4 as uuidv4 } from "uuid";
import { shvhNormaNenorma } from "../data/SHVH/shvhNormaNenorma";

import { fiziologLordoz } from "../data/SHVH/SHNH_notNorma/fiziologLordoz";
import { seredynnaVis } from "../data/SHVH/SHNH_notNorma/seredynnaVis";
import { vysotaTilHrebtsiv } from "../data/SHVH/SHNH_notNorma/vysotaTilHrebtsiv";
import { mizhkhrebtseviPromizhky } from "../data/SHVH/SHNH_notNorma/mizhkhrebtseviPromizhky";
import { zamykaiuchiPlastynkyTilKhrebtsiv } from "../data/SHVH/SHNH_notNorma/zamykaiuchiPlastynkyTilKhrebtsiv";
import { fasetkoviUnkovertSuhlShchelyny } from "../data/SHVH/SHNH_notNorma/fasetkoviUnkovertSuhlShchelyny";

import { AddOptionBlock } from "./AddOptionBlock";
import { shvhNenormaItems } from "../data/SHVH/shvhNenormaItems";
import { zakliuchenniaShvh } from "../data/SHVH/SHNH_notNorma/zakliuchenniaShvh";

export const Shvh = () => {
  // const [selectedZone, setSelectedZone] = useState("ОГК");
  const [selectedShvhViews, setSelectedShvhViews] = useState("");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState(
    shvhNormaNenorma[0]
  );

  const [fiziologLordozCounter, setFiziologLordozCounter] = useState([
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
  const [
    zakliuchenniaShvhCounter,
    setZakliuchenniaShvhCounter,
  ] = useState([{ id: uuidv4() }]);

  const handleAddOption = (setter, counter, setCounter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <FormFloatingSelect
        items={shvhNormaNenorma}
        onZoneSelect={setSelectednormaNenorma}
        label="Норма/Не норма"
      />
      {selectednormaNenorma === "Не норма" ? (
        <div className=" ">
          <AddOptionBlock
            items={fiziologLordoz}
            onZoneSelect={setSelectedShvhViews}
            label={shvhNenormaItems[0]}
            counter={fiziologLordozCounter}
            onAddClick={() =>
              handleAddOption(
                setFiziologLordozCounter,
                fiziologLordozCounter,
                setFiziologLordozCounter
              )
            }
          />
          <AddOptionBlock
            items={seredynnaVis}
            onZoneSelect={setSelectedShvhViews}
            label={shvhNenormaItems[1]}
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
            items={vysotaTilHrebtsiv}
            onZoneSelect={setSelectedShvhViews}
            // label="Висота тіл хребців"
            label={shvhNenormaItems[2]}
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
            onZoneSelect={setSelectedShvhViews}
            // label="Міжхребцеві проміжки"
            label={shvhNenormaItems[3]}
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
            onZoneSelect={setSelectedShvhViews}
            // label="Замикаючі пластинки тіл хребців"
            label={shvhNenormaItems[4]}
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
            onZoneSelect={setSelectedShvhViews}
            // label="Фасеткові та унковертебральні суглобові щілини"
            label={shvhNenormaItems[5]}
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
            items={zakliuchenniaShvh}
            onZoneSelect={setSelectedShvhViews}           
            label={shvhNenormaItems[6]} // Заключення:
            counter={zakliuchenniaShvhCounter}
            onAddClick={() =>
              handleAddOption(
                setZakliuchenniaShvhCounter,
                zakliuchenniaShvhCounter,
                setZakliuchenniaShvhCounter
              )
            }
          />
        </div>
      ) : null}
    </div>
  );
};
