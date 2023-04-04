import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
// import MainSection from "../components/UI/MainSection";
import { Link } from "react-router-dom";
import "../pages/sytles/Login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "firebase/auth";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);


  const signup = async(e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user;
      console.log(user)

    } catch (error) {

    }
  }
  return (
    <section>
      {/* <MainSection /> */}
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Signup</h3>
              <Form className="auth__form" onSubmit={signup}>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="file"
                    placeholder=""
                    onChange={(e) => setFile(e.target.file[0])}
                  />
                </FormGroup>

                <button type="submit" className="buy__btn auth__btn">
                  Signup
                </button>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Signup;
