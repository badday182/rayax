import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addImagineOptions,
  resetDescriptionOnly,
} from "./redux/slices/newZoneSlise";

function AddZoneButton({
  title,
  variant,
  onAddOptions,
  addintoEditorButtonDisabled,
  setDescriptionOnlyButtonTrue,
}) {
  const [addZoneButtonDisabled, setAddZoneButtonDisabled] = useState(false);
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
           
            // Не выполнять добавлять зону в редактор если она уже была добавленна
            !addintoEditorButtonDisabled && onAddOptions();
            setDescriptionOnlyButtonTrue()
            // onAddOptions();
            setAddZoneButtonDisabled(true);
          }
        }
        disabled={addZoneButtonDisabled}
      >
        {title}
      </Button>{" "}
    </>
  );
}

export default AddZoneButton;
