import moment from "moment";
import logo from "../../../assets/logo.png";
import { Button, Container, } from "react-bootstrap";
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
          &nbsp;: Bangladesh Govt. ruling party Awami League secured their
          consecutive fourth time by an unfair election today.&nbsp;
          <p className="text-danger h4 text-decoration-underline">
            Sports News
          </p>
          &nbsp;: Christiano Ronaldo and Messi are in the same match after a
          long since in Saudi Arabia. Australia won the ODI World Cup title for
          sixth time . &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </Marquee>
      </div>

      {/* Nav contaier */}
     
    </Container>
  );
};

export default Header;
