import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteImagineOptions } from "./redux/slices/newZoneSlise";
import { resetDescriptionOnly } from "./redux/slices/descriptionOnlyReducer";

function DeleteButton({ title, variant, onClick, id }) {
  const dispatch = useDispatch()
  // const state = useSelector((state) => state.creatingZones.zoneCounter);


  return (
    <>
      <Button
        className="backgroundWhite"
        variant={variant}
        // onClick={() => onClick(id)}
        onClick={
          () => {
            dispatch(deleteImagineOptions({id}));
            dispatch(resetDescriptionOnly()); // сброс стейта для описания без шапки
            
          }
        }
      >
        {title}
      </Button>{" "}
    </>
  );
}

export default DeleteButton;
