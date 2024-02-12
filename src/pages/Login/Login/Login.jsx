import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/categories/0";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //login user
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        toast.success("Login successful");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid email or password!");
      });
  };
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 ">
      <Form
        onSubmit={handleLogin}
        className="w-50 border border-light-subtle p-5 rounded-1"
      >
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
