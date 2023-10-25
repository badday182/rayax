import React, { useState } from "react";
import { FormFloatingSelect } from "./FloatingLabel";
import DeleteButton from "./deleteButton";
import AddZoneButton from "./addZoneButton";
import ApplyZonesButton from "./applyZonesButton";

import ImagineOptionsButton from "./addZoneButton";

import { zones } from "../data/zones";
import { zonesWithSides } from "../data/zonesWithSides";
import { sides } from "../data/sides";
import { ogkViews } from "../data/ogkViews";
import { plechKulshSuglobViews } from "../data/plechovuyKulshovuySuglobViews";
import { normaNenorma } from "../data/normaNenorma";

export const ImagineOptions = ({ onDelete, id, onAddOptions }) => {
  const [selectedZone, setSelectedZone] = useState("ОГК");
  const [selectedSide, setSelectedSide] = useState("Справа");
  const [selectedOgkViews, setSelectedOgkViews] = useState("Оглядова");
  const [selectedplechKulshSuglobViews, setSelectedplechKulshSuglobViews] =
    useState("Пряма");
  const [selectednormaNenorma, setSelectednormaNenorma] = useState("Норма");

  const zoneWithSides = zonesWithSides.includes(selectedZone) ? true : false;

  return (
    <div className="m-2 mb-4 p-3 bg-light bg-gradient rounded-3 text-dark border border-secondary">
      <FormFloatingSelect
        items={zones}
        onZoneSelect={setSelectedZone}
        label="Зона дослідження"
      />
      {zoneWithSides ? (
        <FormFloatingSelect
          items={sides}
          onZoneSelect={setSelectedSide}
          label="Сторона"
        />
      ) : null}
      {selectedZone === "ОГК" ? (
        <FormFloatingSelect
          items={ogkViews}
          onZoneSelect={setSelectedOgkViews}
          label="Проєкія"
        />
      ) : null}
      {selectedZone === "Кульшовий суглоб" ||
      selectedZone === "Плечовий суглоб" ? (
        <FormFloatingSelect
          items={plechKulshSuglobViews}
          onZoneSelect={setSelectedplechKulshSuglobViews}
          label="Проєкія"
        />
      ) : null}
      <FormFloatingSelect
        items={normaNenorma}
        onZoneSelect={setSelectednormaNenorma}
        label="Норма/Не норма"
      />
      <div className="d-flex justify-content-between zonesButtons">
        <div>
          <ApplyZonesButton />

          <AddZoneButton
            title="Add zones"
            variant="outline-success"
            // onAddOptions={onAddOptions}
          />
        </div>
        <DeleteButton
          title="Delete"
          variant="outline-danger"
          onClick={() => onDelete(id)}
          id={id}
        />
      </div>
    </div>
  );
};
