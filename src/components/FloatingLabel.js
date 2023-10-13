import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export function FormFloatingSelect({ zones }) {
  const itemGenerator = () => {
    const fixedZone = (zone) => {
      return zone.replace('\$\'', "'");
    };

    return zones.map((zone) => (
      <option key={fixedZone(zone)} value={fixedZone(zone)}>
        {fixedZone(zone)}
      </option>
    ));
  };

//   const itemsToRender = itemGenerator();

  return (
    <FloatingLabel controlId="floatingSelect" label="Зона дослідження">
      <Form.Select aria-label="Floating label select example">
        {/* <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
  <option value="3">Three</option> */}

        {itemGenerator()}
      </Form.Select>
    </FloatingLabel>
  );
}
