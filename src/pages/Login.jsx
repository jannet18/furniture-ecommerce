import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import MainSection from "../components/UI/MainSection";
import { Link } from "react-router-dom";
import "../pages/sytles/Login.css";

const Login = () => {
  return (
    <section>
      <MainSection />
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Login</h3>
              <Form className="auth__form">
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="password" placeholder="Enter your password" />
                </FormGroup>
                <button className="buy__btn auth__btn">Login</button>
                <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Login;
