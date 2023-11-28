import React, { useState } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import { v4 as uuidv4 } from "uuid";
import {gvhNormaNenorma} from "../data/GVH/gvhNormaNenorma";

import { fiziologKifos } from "../data/GVH/GVH_notNorma/fiziologKifos";
import { seredynnaVis } from "../data/GVH/GVH_notNorma/seredynnaVis";
import { vysotaTilHrebtsivGvh } from "../data/GVH/GVH_notNorma/vysotaTilHrebtsiv";
import { mizhkhrebtseviPromizhky } from "../data/GVH/GVH_notNorma/mizhkhrebtseviPromizhky";
import { zamykaiuchiPlastynkyTilKhrebtsiv } from "../data/GVH/GVH_notNorma/zamykaiuchiPlastynkyTilKhrebtsiv";
import { fasetkoviUnkovertSuhlShchelyny } from "../data/GVH/GVH_notNorma/fasetkoviUnkovertSuhlShchelyny";

import { AddOptionBlock } from "./AddOptionBlock";
import { gvhNenormaItems } from "../data/GVH/gvhNenormaItems";
import { zakliuchenniaGvh } from "../data/GVH/GVH_notNorma/zakliuchenniaGvh";

export const Gvh = () => {
  const [selectedGvhViews, setSelectedGvhViews] = useState("");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState(
    gvhNormaNenorma[0]
  );

  const [fiziologKifosCounter, setfiziologKifosCounter] = useState([
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
  const [zakliuchenniaGvhCounter, setZakliuchenniaGvhCounter] = useState([
    { id: uuidv4() },
  ]);

  const handleAddOption = (setter, counter, setCounter) => {
    setter([...counter, { id: uuidv4() }]);
  };

  return (
    <div className="">
      <FormFloatingSelect
        items={gvhNormaNenorma}
        onZoneSelect={setSelectednormaNenorma}
        label="Норма/Не норма"
      />
      {selectednormaNenorma === "Не норма" ? (
        <div className=" ">
          <AddOptionBlock
            items={fiziologKifos}
            onZoneSelect={setSelectedGvhViews}
            label={gvhNenormaItems[0]}
            counter={fiziologKifosCounter}
            onAddClick={() =>
              handleAddOption(
                setfiziologKifosCounter,
                fiziologKifosCounter,
                setfiziologKifosCounter
              )
            }
          />
          <AddOptionBlock
            items={seredynnaVis}
            onZoneSelect={setSelectedGvhViews}
            label={gvhNenormaItems[1]}
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
            onZoneSelect={setSelectedGvhViews}
            // label="Висота тіл хребців"
            label={gvhNenormaItems[2]}
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
            onZoneSelect={setSelectedGvhViews}
            // label="Міжхребцеві проміжки"
            label={gvhNenormaItems[3]}
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
            onZoneSelect={setSelectedGvhViews}
            // label="Замикаючі пластинки тіл хребців"
            label={gvhNenormaItems[4]}
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
            onZoneSelect={setSelectedGvhViews}
            // label="Фасеткові та унковертебральні суглобові щілини"
            label={gvhNenormaItems[5]}
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
            items={zakliuchenniaGvh}
            onZoneSelect={setSelectedGvhViews}
            label={gvhNenormaItems[6]} // Заключення:
            counter={zakliuchenniaGvhCounter}
            onAddClick={() =>
              handleAddOption(
                setZakliuchenniaGvhCounter,
                zakliuchenniaGvhCounter,
                setZakliuchenniaGvhCounter
              )
            }
          />
        </div>
      ) : null}
    </div>
  );
};
