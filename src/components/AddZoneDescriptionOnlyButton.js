import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addDescriptionOnly } from "./redux/slices/newZoneSlise";

function AddZoneDescriptionOnlyButton ({title, variant}) {
  const dispatch = useDispatch()

  return (
    <>
      <Button
        className="backgroundWhite"
        variant={variant}
        onClick={
          () => {
          const newZoneid = {
            id: uuidv4(),
          };
        
          dispatch(addDescriptionOnly(newZoneid));
        }
        }      >
        {title}
      </Button>{" "}
    </>
  );
}

export default AddZoneDescriptionOnlyButton;
