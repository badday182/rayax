import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addImagineOptions,
  resetDescriptionOnly,
} from "./redux/slices/newZoneSlise";

function AddZoneButton({ title, variant, onAddOptions }) {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <Button
        // className="backgroundWhite"
        variant={variant}
        // onClick={onAddOptions}
        onClick={
          // handleAdd
          () => {
            const newZoneid = {
              id: uuidv4(),
            };

            dispatch(addImagineOptions(newZoneid));
            dispatch(resetDescriptionOnly()); //обнуляет зоны "только описание"
            onAddOptions();
            setButtonDisabled(true);
          }
        }
        disabled={buttonDisabled}
      >
        {title}
      </Button>{" "}
    </>
  );
}

export default AddZoneButton;
