import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

const AllProducts = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Product</h4>
            <div>
              <Form>
                <FormGroup className="form__group">
                  <span>Product title</span>
                  <input type="text" placeholder="" />
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Short Description</span>
                  <input type="text" placeholder="" />
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Description</span>
                  <input type="text" placeholder="" />
                </FormGroup>
                <div className="d-flex align-items-center justify-content-between">
                  <FormGroup className="form__group w-50">
                    <span>Price</span>
                    <input type="number" placeholder="$" />
                  </FormGroup>
                  <FormGroup className="form__group w-50">
                    <span>Category</span>
                    <select className="w-100">
                      <option value="chair">Chairs</option>
                      <option value="sofa">Sofas</option>
                      <option value="chaise">Chaise</option>
                      <option value="outdoor">Outdoor</option>
                    </select>
                  </FormGroup>
                </div>
              </Form>
            </div>
            <div>
              <FormGroup className="form__group">
                <span>Product Image</span>
                <input type="file" placeholder="$" />
              </FormGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
