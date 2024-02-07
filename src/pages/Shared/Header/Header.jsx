import moment from "moment";
import logo from "../../../assets/logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      {/* Header container */}
      <div className="text-center">
        <img src={logo} />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="text-secondary">
          <small>{moment().format("dddd, MMMM D, YYYY")}</small>
        </p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="h5" speed={70}>
          <p className="text-info h4 text-decoration-underline">
            Breaking News
          </p>
          &nbsp;: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Harum sapiente dolorem quos asperiores voluptate laudantium quaerat
          eveniet incidunt natus eum.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
        </Marquee>
      </div>

      {/* Nav contaier */}
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-2">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/career">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;