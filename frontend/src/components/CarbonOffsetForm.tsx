import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CarbonOffsetForm = () => {
  return (
    <Card className="mt-5 p-5 mx-auto" style={{ width: "70%" }}>
      <Form>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>What Country do you live in?</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="GE">Gemany</option>
              <option value="SA">South Africa</option>
              <option value="IN">India</option>
              <option value="IN">India</option>
              <option value="IN">India</option>
              <option value="IN">India</option>
              <option value="CH">China</option>
              <option value="SG">Singapore</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>How much are you willing to spend? $/yr</Form.Label>
            <Form.Control placeholder="500" />
          </Form.Group>
        </Row>
        <Row className="justify-content-end">
          <Col xs="auto">
            <Button>Find My Plan</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default CarbonOffsetForm;
