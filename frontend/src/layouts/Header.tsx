import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

interface Props {
  children: React.ReactElement;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div style={{ position: "absolute", width: "100vw" }}>
        <Container style={{ padding: "30px 0" }}>
          <Navbar bg="light" style={{ padding: "10px 20px", borderRadius: "10px" }}>
            <Navbar.Brand href="/">
              <Image src="/Switch2Zero-logo.svg" alt="Logo" width={123} height={50} />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="align-items-center">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/sign-up">
                  <Button>Sign Up</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      {children}
    </>
  );
};

export default Header;
