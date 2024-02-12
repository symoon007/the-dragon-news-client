import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-2">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex ">
              <Link className="ps-2" to="/categories/0">
                Home
              </Link>
              <Link className="ps-2" to="/About">
                About
              </Link>
              <Link className="ps-2" to="/career">
                Career
              </Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle
                  style={{ fontSize: "2.2rem", marginRight: "7px" }}
                />
              )}

              {user ? (
                <Button onClick={() => logOut()} variant="secondary">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
