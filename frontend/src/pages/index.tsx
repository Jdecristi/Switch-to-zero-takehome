import Head from "next/head";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import H1 from "@/components/text/H1";
import P1 from "@/components/text/P1";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carbon Offset Simulator</title>
        <meta name="description" content="Carbon Offset Simulator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section style={{ padding: "150px 0 100px 0", backgroundColor: "var(--bs-secondary)", borderRadius: "0 0 40px 40px" }}>
          <Container>
            <Row className="my-5">
              <H1 color="white">Take your first steps towards carbon neutrality</H1>
            </Row>
            <Row className="my-5">
              <Col xs="8">
                <div className="d-grid gap-2">
                  <P1 color="white">Make a Sustainable Impact - Sign Up for Our Carbon Neutral Plans Today!</P1>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col xs="3">
                <div className="d-grid gap-2">
                  <Button size="lg">Start Now</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
