import Button from "react-bootstrap/Button";
function DeleteButton({ title, variant, onClick, id }) {
  return (
    <>
      <Button
        className="backgroundWhite"
        variant={variant}
        onClick={() => onClick(id)}
      >
        {title}
      </Button>{" "}
    </>
  );
}

export default DeleteButton;
