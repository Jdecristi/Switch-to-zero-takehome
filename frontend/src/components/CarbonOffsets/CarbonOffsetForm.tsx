import { useState } from "react";
import type { FormEvent, ChangeEvent, Dispatch, SetStateAction } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import H2 from "@/components/text/H2";
interface Props {
  submit: (submitted: boolean) => void;
  setCountry: (country: string) => void;
  setBudget: (budget: number) => void;
}

const CarbonOffsetForm: React.FC<Props> = ({ submit, setCountry, setBudget }) => {
  const updateCountry = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setCountry(target.value);
  };

  const updateBudget = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setBudget(Number(target.value));
  };

  const calculateCarbonOffset = (e: FormEvent) => {
    e.preventDefault();
    submit(true);
  };

  return (
    <>
      <Row>
        <H2>Let's find your best path towards carbon neutrality!</H2>
      </Row>
      <Card className="mt-5 p-5 mx-auto" style={{ width: "70%" }}>
        <Form onSubmit={calculateCarbonOffset}>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label>What Country do you live in?</Form.Label>
              <Form.Select aria-label="select a country" onChange={updateCountry}>
                <option>select a country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="GE">Gemany</option>
                <option value="SA">South Africa</option>
                <option value="IN">India</option>
                <option value="CH">China</option>
                <option value="SG">Singapore</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label>How much are you willing to spend? $/yr</Form.Label>
              <Form.Control placeholder="500" onChange={updateBudget} />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Col xs="auto">
              <Button type="submit">Find My Plan</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default CarbonOffsetForm;
