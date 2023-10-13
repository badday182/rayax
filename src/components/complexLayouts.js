import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <Form>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="imagine">
          <Form.Label>№ дослідження</Form.Label>
          <Form.Control placeholder="№ дослідження" />
        </Form.Group>

        <Form.Group as={Col} controlId="date">
          <Form.Label>Дата</Form.Label>
          <Form.Control placeholder="Дата"/>
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="pacientName">
          <Form.Label>П.І.Б</Form.Label>
          <Form.Control placeholder="П.І.Б" />
        </Form.Group>

        <Form.Group as={Col} controlId="birthYear">
          <Form.Label>Рік народження</Form.Label>
          <Form.Control placeholder="Рік народження" />
        </Form.Group>
      </Row>

    </Form>
  );
}

export default GridComplexExample;