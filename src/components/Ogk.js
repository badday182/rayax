import React, { useState, useEffect } from "react";

import { FormFloatingSelect } from "./FloatingLabel";
import { zones } from "../data/zones";
import { ogkViews } from "../data/ogkViews";
import { ogkNormaNenorma } from "../data/OGK_notNorma/ogkNormaNenorma";
import { legenRysunok } from "../data/OGK_notNorma/legenRysunok";
import { koreni } from "../data/OGK_notNorma/koreni";
import {kupalaDiadragmy} from "../data/OGK_notNorma/kupalaDiadragmy"
import {synusy} from "../data/OGK_notNorma/synusy"
import {cor} from "../data/OGK_notNorma/cor"
import {ogkZakliuchennia} from "../data/OGK_notNorma/ogkZakliuchennia"

import Button from "react-bootstrap/Button";

export const Ogk = () => {
  const [selectedZone, setSelectedZone] = useState("ОГК");

  const [selectedOgkViews, setSelectedOgkViews] = useState("Оглядова");
  useState("Пряма");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState("Норма");

  return (
    <div>
      <FormFloatingSelect
        id="zone"
        items={zones}
        onZoneSelect={setSelectedZone}
        label="Зона дослідження"
      />
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
        <div>
          <div className="d-flex flex-row justify-content-between align-items-center addOption">
            <FormFloatingSelect
              items={legenRysunok}
              onZoneSelect={setSelectedOgkViews}
              label="Легеневий рисунок"
            />
            <Button
              variant="primary"
              className="d-flex flex-row mb-2 align-items-center"
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
              className="d-flex flex-row mb-2 align-items-center"
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
              className="d-flex flex-row mb-2 align-items-center"
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
              className="d-flex flex-row mb-2 align-items-center"
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
              className="d-flex flex-row mb-2 align-items-center"
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
              className="d-flex flex-row mb-2 align-items-center"
            >
              Add
            </Button>{" "}
          </div>
        </div>
      ) : null}
    </div>
  );
};
