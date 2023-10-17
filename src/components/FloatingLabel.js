
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

const handleZoneSelect = (event) => {
  const selectedZone = event.target.value;
  onZoneSelect(selectedZone); 
}; 
 return (
    <FloatingLabel controlId="floatingSelect" label={label}>
      <Form.Select aria-label="Floating label select example" onChange={handleZoneSelect}>
 
        {itemGenerator()}
      </Form.Select>
    </FloatingLabel>
  );
}
