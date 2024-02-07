import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <div>
      <h4 className="mb-4">Login with</h4>
      <Button className="mb-2 w-100" variant="outline-info">
        <FaGoogle /> &nbsp; Login with Google
      </Button>
      <Button className="mb-2 w-100" variant="outline-secondary">
        <FaGithub /> &nbsp; Login with Github
      </Button>
      <div>
        <h4 className="mb-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF
              size={30}
              className="bg-body-secondary p-1 rounded-circle"
            />
            &nbsp; Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter
              size={30}
              className="bg-body-secondary  p-1 rounded-circle"
            />
            &nbsp; Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram
              size={30}
              className="bg-body-secondary  p-1 rounded-circle"
            />
            &nbsp; Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone />
      <div className="position-relative">
        <img src={bg} alt="bg" />
        <div className="text-center position-absolute postion-div">
          <h2 className="fw-bold">Create an Amazing Newspaper</h2>
          <p className="px-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger rounded-0">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
