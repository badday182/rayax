import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteImagineOptions } from "./redux/slices/newZoneSlise";

function DeleteButton({ title, variant, onClick, id }) {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.creatingZones.zoneCounter);


  return (
    <>
      <Button
        className="backgroundWhite"
        variant={variant}
        // onClick={() => onClick(id)}
        onClick={
          () => {
            const deleteZoneId = {
              id: {id},
            };
          // console.log(deleteZoneId.id)
            dispatch(deleteImagineOptions(deleteZoneId));
          }
        }
      >
        {title}
      </Button>{" "}
    </>
  );
}

export default DeleteButton;
