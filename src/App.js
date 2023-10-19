import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PacientInfo from "./components/complexLayouts";

import { BlockButton } from "./components/addBlockButton";

import { ImagineOptions } from "./components/ImagineOptions";

const App = () => {
  const [imagineOptions, setImagineOptions] = useState([{ id: 0 }]);

  const addImagineOptions = () => {
    const newId = uuidv4();
    const newImagineOption = { id: newId };
    setImagineOptions([...imagineOptions, newImagineOption]);
  };

  const deleteImagineOptions = (id) => {
    if (imagineOptions.length !== 1) {
      const updatedImagineOptions = imagineOptions.filter(
        (option) => option.id !== id
      );
      setImagineOptions(updatedImagineOptions);
    }
  };

  return (
    <div className="m-3 mb-4 conteinerWidht rounded-3 border pacientCard">
      <PacientInfo />
      {imagineOptions.map((option) => (
        <ImagineOptions
          key={option.id}
          id={option.id}
          onDelete={(id) => deleteImagineOptions(id)}
          onAddOptions={addImagineOptions}
        />
      ))}

      {/* <BlockButton className="mt-3" onClick={addImagineOptions} /> */}
    </div>
  );
};

export default App;
