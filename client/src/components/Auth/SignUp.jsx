import React, { useRef, useState } from "react";
import { Alert, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/UserAuth";

export default function SignUp() {
  const { signup } = useAuth();

  const [error, setError] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleAction = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords dont match");
    }

    try {
      await signup(emailRef.current.value, confirmPasswordRef.current.value);
      
    } catch (error) {
      console.log(error);
      setError("Failed to create an account");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <Card style={{ minWidth: 300 }}>
        <Card.Body>
          <h2>Sign up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleAction}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                ref={confirmPasswordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button className="w-100 mt-3" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center">
          <p>
            Do you already have an account? <br />{" "}
            <Link to="/login">Click here</Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
