import Head from "next/head";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import H1 from "@/components/text/H1";
import H2 from "@/components/text/H2";
import P1 from "@/components/text/P1";

import CarbonOffsetForm from "@/components/CarbonOffsetForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carbon Offset Simulator</title>
        <meta name="description" content="Carbon Offset Simulator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section style={{ padding: "100px 0 100px 0", backgroundColor: "var(--bs-secondary)", borderRadius: "0 0 40px 40px" }}>
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
        <section>
          <Container className="my-5">
            <Row>
              <P1>
                Are you looking for a simple and effective way to make a positive impact on the environment and combat climate change? Our new tree planting service is here to
                help. By signing up, you'll be contributing to the fight against carbon emissions and deforestation, while also helping to improve air quality, prevent soil
                erosion, and create habitats for wildlife.
              </P1>
            </Row>
            <Row>
              <P1>
                Our tree planting plans are tailored to your needs, with options for planting trees in your backyard, community spaces, or in designated reforestation areas around
                the world. Our team of experts will work with you to choose the best locations, tree species, and planting techniques to maximize the impact of your efforts.
              </P1>
            </Row>
            <Row>
              <P1>
                Together, we can make a difference and create a more sustainable future. Sign up for our tree planting service today and join the movement towards carbon
                neutrality!
              </P1>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="my-5">
            <Row>
              <H2>Let's find your best path towards carbon neutrality!</H2>
            </Row>
            <Row>
              <CarbonOffsetForm />
            </Row>
          </Container>
        </section>
        <footer style={{ height: "100px" }} />
      </main>
    </>
  );
}
