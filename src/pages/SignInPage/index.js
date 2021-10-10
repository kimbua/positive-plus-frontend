import React from "react";
import "./style.css";
import PublicNavBar from "../../components/PublicNavBar";
import { Form, Button } from "react-bootstrap";
import avatar from "./avatar.svg.png";

const SignInPage = () => {
  return (
    <div className="blogPage">
      <PublicNavBar />
      <div>
        <div className="full-height signin">
          <div className="container formContainer glass">
            <div className="avatar">
              <img src={avatar} alt="user-avatar" className="user-avatar" />
            </div>
            <div className="login-form">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div className="inner-glass"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
