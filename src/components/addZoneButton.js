import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addImagineOptions } from "./redux/slices/newZoneSlise";

function AddZoneButton ({title, variant, onAddOptions}) {
  const dispatch = useDispatch()
  // const state = useSelector((state) => state.creatingZones.zoneCounter);

//   const handleAdd = () => {
// dispatch({
// type: 'ADD_ZONE',
// payload: {
// id: uuid(),
// },
// })
// }
  return (
    <>
      <Button
        className="backgroundWhite"
        variant={variant}
        // onClick={onAddOptions}
        onClick={
          // handleAdd
          () => {
          const addZone = {
            id: uuidv4(),
          };
        
          dispatch(addImagineOptions(addZone));
        }
        }      >
        {title}
      </Button>{" "}
    </>
  );
}

export default AddZoneButton;
