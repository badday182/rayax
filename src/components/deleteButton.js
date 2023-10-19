import Button from "react-bootstrap/Button";
function DeleteButton({ onClick, id }) {
  return (
    <>
      <Button
        className="m-2 mb-0 backgroundWhite"
        variant="outline-danger"
        onClick={() => onClick(id)}
      >
        Delete
      </Button>{" "}
    </>
  );
}

export default DeleteButton;
