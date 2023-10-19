import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PacientInfo from "./components/complexLayouts";

import { BlockButton } from "./components/addBlockButton";

import { ImagineOptions } from "./components/ImagineOptions";

const App = () => {
  
  const [imagineOptions, setImagineOptions] = useState([{id:0}]);


 const addImagineOptions = () => {
    const newId = uuidv4();
    const newImagineOption = { id: newId }; 
    setImagineOptions([...imagineOptions, newImagineOption]);
  };
    
  const deleteImagineOptions = (id) => {
    const updatedImagineOptions = imagineOptions.filter(
      (option) => option.id !== id
    );
    setImagineOptions(updatedImagineOptions);
  };

  return (
    <div>
      <PacientInfo />



{imagineOptions.map((option) => (
        <ImagineOptions
          key={option.id}
          id={option.id}
          onDelete={(id) => deleteImagineOptions(id)}
          />
      ))}

        <BlockButton onClick={addImagineOptions}/>
    </div>
  );
};

export default App;
