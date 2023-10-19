import Button from "react-bootstrap/Button";
function AddZoneButton ({title, variant, onAddOptions}) {
  return (
    <>
      <Button
        className="backgroundWhite"
        variant={variant}
        onClick={onAddOptions}
      >
        {title}
      </Button>{" "}
    </>
  );
}

export default AddZoneButton;
