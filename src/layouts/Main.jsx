import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftSidebar from "../pages/Shared/LeftSide/LeftSidebar";
import RightSidebar from "../pages/Shared/RightSide/RightSidebar";

const Main = () => {
  return (
    <div>
      <Header className="mb-10" />
      <Container className="mt-5">
        <Row>
          <Col lg={3}>
            <LeftSidebar />
          </Col>
          <Col lg={6} >
            <h3>Main</h3>
          </Col>
          <Col lg={3}>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
