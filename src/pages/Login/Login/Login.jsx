import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 ">
      <Form className="w-50 border border-light-subtle p-5 rounded-1">
        <h2 className="text-center mb-5">Login your account</h2>
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100 py-3 mb-2 bg-secondary border-0"
        >
         Login
        </Button>{" "}
        <br />
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Form.Text className="text-muted">
          Don&apos;t have an account? <Link to="/register">Register</Link>{" "}
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
