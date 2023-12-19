import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addDescriptionOnly } from "./redux/slices/newZoneSlise";

export function AddZoneDescriptionOnlyButton ({title, variant}) {
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

