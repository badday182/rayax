import React, { useState, useEffect } from "react";

import { FormFloatingSelect } from "./FloatingLabel";
import { zones } from "../data/zones";
import { ogkViews } from "../data/ogkViews";
import { ogkNormaNenorma } from "../data/OGK_notNorma/ogkNormaNenorma";
import { legenRysunok } from "../data/OGK_notNorma/legenRysunok";
import { koreni } from "../data/OGK_notNorma/koreni";
import { kupalaDiadragmy } from "../data/OGK_notNorma/kupalaDiadragmy";
import { synusy } from "../data/OGK_notNorma/synusy";
import { cor } from "../data/OGK_notNorma/cor";
import { ogkZakliuchennia } from "../data/OGK_notNorma/ogkZakliuchennia";

import Button from "react-bootstrap/Button";

export const Ogk = () => {
  const [selectedZone, setSelectedZone] = useState("ОГК");

  const [selectedOgkViews, setSelectedOgkViews] = useState("Оглядова");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState("Норма");

  const [legenRysunokCounter, setlegenRysunokCounter] = useState([{}]);

  const handleAddOption = () => {
    setlegenRysunokCounter((prevCounter) => [...prevCounter, {}]);
  };
  return (
    <div className="">
      {/* <FormFloatingSelect
        id="zone"
        items={zones}
        onZoneSelect={setSelectedZone}
        label="Зона дослідження"
      /> */}
      <FormFloatingSelect
        items={ogkViews}
        onZoneSelect={setSelectedOgkViews}
        label="Проєкія"
      />
      <FormFloatingSelect
        items={ogkNormaNenorma}
        onZoneSelect={setSelectednormaNenorma}
        label="Норма/Не норма"
      />
      {selectedZone === "ОГК" && selectednormaNenorma === "Не норма" ? (
        <div className="">
          <div className="d-flex flex-row justify-content-between align-items-start addOption ">
            <div className="">
              <div>
                {legenRysunokCounter.map((option) => (
                  <FormFloatingSelect
                    items={legenRysunok}
                    onZoneSelect={setSelectedOgkViews}
                    label="Легеневий рисунок"
                  />
                ))}
              </div>
            </div>
            <Button
              variant="primary"
              className="d-flex flex-row ms-2 mt-2"
              onClick={handleAddOption}
            >
              Add
            </Button>{" "}
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center addOption">
            <FormFloatingSelect
              items={koreni}
              onZoneSelect={setSelectedOgkViews}
              label="Корені"
            />
            <Button
              variant="primary"
              className="d-flex flex-row ms-2 mb-2 "
            >
              Add
            </Button>{" "}
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center addOption">
            <FormFloatingSelect
              items={kupalaDiadragmy}
              onZoneSelect={setSelectedOgkViews}
              label="Купала діафрагми"
            />
            <Button
              variant="primary"
              className="d-flex flex-row ms-2 mb-2 "
            >
              Add
            </Button>{" "}
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center addOption">
            <FormFloatingSelect
              items={synusy}
              onZoneSelect={setSelectedOgkViews}
              label="Синуси"
            />
            <Button
              variant="primary"
              className="d-flex flex-row ms-2 mb-2"
            >
              Add
            </Button>{" "}
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center addOption">
            <FormFloatingSelect
              items={cor}
              onZoneSelect={setSelectedOgkViews}
              label="Cor-"
            />
            <Button
              variant="primary"
              className="d-flex flex-row ms-2 mb-2"
            >
              Add
            </Button>{" "}
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center addOption">
            <FormFloatingSelect
              items={ogkZakliuchennia}
              onZoneSelect={setSelectedOgkViews}
              label="Заключення"
            />
            <Button
              variant="primary"
              className="d-flex flex-row ms-2 mb-2 "
            >
              Add
            </Button>{" "}
          </div>
        </div>
      ) : null}
    </div>
  );
};
