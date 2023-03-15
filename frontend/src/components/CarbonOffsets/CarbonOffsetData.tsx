import { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, CartesianGrid } from "recharts";

import H2 from "../text/H2";
import H3 from "../text/H3";
import P1 from "../text/P1";

import { findCarbonFootprintPerCapita } from "@/helpers/helperFunctions";

interface Props {
  country: string;
  budget: number;
  undoSubmit: (submitted: boolean) => void;
}

interface monthlyOffset {
  date: string;
  currentOffset: number;
  currentExpenses: number;
}

const CarbonOffsetData: React.FC<Props> = ({ country, budget, undoSubmit }) => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [carbonFootprint, _] = useState<number>(findCarbonFootprintPerCapita(country));
  const [totalCarbonOffset, setTotalCarbonOffset] = useState<number>(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [totalYears, setTotalYears] = useState<number>(0);
  const [totalTreesPurchased, setTotalTreesPurchased] = useState<number>(0);
  const [plan, setPlan] = useState<monthlyOffset[]>();

  const resetForm = () => undoSubmit(false);

  useEffect(() => {
    (async () => {
      try {
        const reqUrl = `http://localhost:3001/api/calculate-carbon-offset?footprint=${carbonFootprint}&budget=${budget}`;
        const request = await fetch(reqUrl);
        const response = await request.json();
        const data = response.data;

        setTotalCarbonOffset(data.totalCarbonOffset);
        setMonthlyExpenses(data.monthlyExpenses);
        setTotalExpenses(data.totalExpenses);
        setTotalYears(data.totalYears);
        setTotalTreesPurchased(data.totalTreesPurchased);
        setPlan(data.plan);
        setDataLoaded(true);
      } catch (err) {
        undoSubmit(false);
      }
    })();
  }, []);

  return (
    <Row className="my-5">
      {dataLoaded ? (
        <>
          <Row>
            <Col style={{ textAlign: "center" }}>
              {totalCarbonOffset / 1000 >= carbonFootprint ? (
                <H2>{`Congrats! You will have reached carbon neutrality in ${totalYears} years`}</H2>
              ) : (
                <H2>{`Congrats! in ${totalYears} years you will have offset ${(totalCarbonOffset / 1000).toFixed(1)} tons of carbon`}</H2>
              )}
            </Col>
          </Row>
          <Row className="my-5">
            <Row className="my-3">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={plan}>
                  <Area dataKey="currentOffset" stroke="#00000000" fill="var(--bs-secondary)" />
                  <XAxis dataKey="date" axisLine={false} angle={-30} tickMargin={9} />
                  <YAxis dataKey="currentOffset" axisLine={false} tickLine={false} tickFormatter={(number) => `${(number / 1000).toFixed(1)}T`} />
                  <CartesianGrid vertical={false} />
                </AreaChart>
              </ResponsiveContainer>
            </Row>
          </Row>

          <Row className="my-5">
            <Row className="my-3">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={plan}>
                  <Area dataKey="currentExpenses" stroke="#00000000" fill="var(--bs-info)" />
                  <XAxis dataKey="date" axisLine={false} angle={-30} tickMargin={9} />
                  <YAxis dataKey="currentExpenses" axisLine={false} tickLine={false} tickFormatter={(number) => `$${number}`} />
                  <CartesianGrid vertical={false} />
                </AreaChart>
              </ResponsiveContainer>
            </Row>
          </Row>
          <Row className="my-5">
            <Row className="my-3">
              <H3>Summary</H3>
            </Row>
            <Row className="my-3 mx-3">
              <P1>{`You've helped plant ${totalTreesPurchased} trees and offset ${(totalCarbonOffset / 1000).toFixed(1)} tons of Carbon`}</P1>
              <P1>{`Your monthly maintainence expenses will be $${monthlyExpenses} USD`}</P1>
              <P1>{`Your estimated total expenses will be $${totalExpenses
                .toFixed(2)
                .toLocaleString()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD over the next ${totalYears} years`}</P1>
            </Row>
          </Row>
          <Row className="mt-5 align-items-center">
            <Col style={{ textAlign: "right" }}>
              <span>Want to reach carbon neutrality faster?</span>
            </Col>
            <Col xs="auto">
              <Button onClick={resetForm}>Re-enter Info</Button>
            </Col>
          </Row>
        </>
      ) : (
        <Col style={{ textAlign: "center" }}>
          <P1>Loading Data...</P1>
        </Col>
      )}
    </Row>
  );
};

export default CarbonOffsetData;
