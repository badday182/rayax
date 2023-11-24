import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteImagineOptions } from "./redux/slices/newZoneSlise";

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
          }
        }
      >
        {title}
      </Button>{" "}
    </>
  );
}

export default DeleteButton;
