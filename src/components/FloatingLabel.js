
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";


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
  const floatingId = uuidv4()
 return (
    <FloatingLabel className="mb-2" controlId={floatingId} label={label}>
      <Form.Select id={floatingId} onChange={handleZoneSelect}>
 
        {itemGenerator()}
      </Form.Select>
    </FloatingLabel>
  );
}
