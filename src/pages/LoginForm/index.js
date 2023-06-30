import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    console.log(typeof event.target.name);
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    console.log(email, "email");
    console.log(password, "password");
  };

  const navigate = useNavigate()

  const handleSignUpClick =() =>{
    console.log('sign up click')
    navigate('/register')
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="reset">
          Reset
        </Button>
      </Form>
      <p>
        Don't Have an account . <span onClick={handleSignUpClick}>Sign up now</span>
      </p>
    </>
  );
};

export default LoginForm;
