import "./App.css";
import React, { useState } from "react";

import PacientInfo from "./components/complexLayouts";

import { BlockButton } from "./components/addBlockButton";


// -------------import for FormFloatingSelect------------
// import { FormFloatingSelect } from "./components/FloatingLabel";
// import { zones } from "./data/zones";
// import { zonesWithSides } from "./data/zonesWithSides";
// import { sides } from "./data/sides";
// import { ogkViews } from "./data/ogkViews";
// import { plechKulshSuglobViews } from "./data/plechovuyKulshovuySuglobViews";
// import { normaNenorma } from "./data/normaNenorma";
// ------------------------------------------------

import { ImagineOptions } from "./components/ImagineOptions";

const App = () => {
  // --------useStates & consts for FormFloatingSelect--------------
  // const [selectedZone, setSelectedZone] = useState("ОГК");
  // const [selectedSide, setSelectedSide] = useState("Справа");
  // const [selectedOgkViews, setSelectedOgkViews] = useState("Оглядова");
  // const [selectedplechKulshSuglobViews, setSelectedplechKulshSuglobViews] =
  //   useState("Пряма");
  // const [selectednormaNenorma, setSelectednormaNenorma] = useState("Норма");
  // const zoneWithSides = zonesWithSides.includes(selectedZone) ? true : false;
  // ------------------------------------------------

  const [imagineOptionsCount, setImagineOptionsCount] = useState(1);

  const addImagineOptions = () => {
    setImagineOptionsCount(imagineOptionsCount + 1);
  };

  
  return (
    <div>
      <PacientInfo />

      {/* <ImagineOptions /> */}

     

      {/* <div>
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
      </div> */}
      {[...Array(imagineOptionsCount)].map((_, index) => (
        <ImagineOptions key={index} />
        ))}
        <BlockButton onClick={addImagineOptions}/>
    </div>
  );
};

export default App;
