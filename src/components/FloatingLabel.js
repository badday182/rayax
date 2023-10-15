
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export function FormFloatingSelect({ items, label, onZoneSelect }) {
  const itemGenerator = () => {
    const fixedZone = (item) => {
      return item.replace('\$\'', "'");
    };

    return items.map((item) => (
      <option key={fixedZone(item)} value={fixedZone(item)}>
        {fixedZone(item)}
      </option>
    ));
  };

//   const itemsToRender = itemGenerator();
const handleZoneSelect = (event) => {
  const selectedZone = event.target.value;
  onZoneSelect(selectedZone); 
}; 
 return (
    <FloatingLabel controlId="floatingSelect" label={label}>
      <Form.Select aria-label="Floating label select example" onChange={handleZoneSelect}>
        {/* <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
  <option value="3">Three</option> */}

        {itemGenerator()}
      </Form.Select>
    </FloatingLabel>
  );
}
