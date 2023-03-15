import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import P1 from "../text/P1";

import { findCarbonFootprintPerCapita } from "@/helpers/helperFunctions";

interface Props {
  country: string;
  budget: number;
  undoSubmit: (submitted: boolean) => void;
}

interface monthlyOffset {
  month: number;
  treePurchased: number;
  currenttCarbonOffset: number;
  totalTrees: number;
}

const CarbonOffsetData: React.FC<Props> = ({ country, budget, undoSubmit }) => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [totalCarbonOffset, setTotalCarbonOffset] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [totalYears, setTotalYears] = useState<number>(0);
  const [totalTreesPurchased, setTotalTreesPurchased] = useState<number>(0);
  const [plan, setPlan] = useState<monthlyOffset[]>();

  useEffect(() => {
    (async () => {
      try {
        const reqUrl = `http://localhost:3001/api/calculate-carbon-offset?footprint=${findCarbonFootprintPerCapita(country)}&budget=${budget}`;
        const request = await fetch(reqUrl);
        const response = await request.json();
        const data = response.data;

        setDataLoaded(true);
      } catch (err) {
        undoSubmit(false);
      }
    })();
  }, []);

  return (
    <Row className="justify-content-center my-5">
      {dataLoaded ? (
        <div>CarbonOffsetData</div>
      ) : (
        <Col style={{ textAlign: "center" }}>
          <P1>Loading Data...</P1>
        </Col>
      )}
      ;
    </Row>
  );
};

export default CarbonOffsetData;
