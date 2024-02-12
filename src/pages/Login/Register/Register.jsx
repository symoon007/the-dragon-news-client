import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    //create user
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        toast.success("Create user Successful!");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("User created failed!");
      });
  };
  const handleCheckChange = (event) => {
    const checkInfo = event.target.checked;
    setIsChecked(checkInfo);
  };
  return (
    <Container className="d-flex justify-content-center align-items-center mt-5 ">
      <Form
        onSubmit={handleRegister}
        className="w-50 border border-light-subtle p-5 rounded-1"
      >
        <h2 className="text-center mb-5">Register your account</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className="bg-light py-3"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            className="bg-light py-3"
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="bg-light py-3"
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="bg-light py-3"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleCheckChange}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms & Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button
          disabled={!isChecked}
          variant="primary"
          type="submit"
          className="w-100 py-3 mb-2 bg-secondary border-0"
        >
          Register
        </Button>
        <br />
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Form.Text className="text-muted">
          Already have an account? <Link to="/login">Login</Link>{" "}
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
