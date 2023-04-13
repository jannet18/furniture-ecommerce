import React from 'react';
import { Container, Row, Col, Form, FormGroup } from "reactstrap"

const AddProducts = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4>Add Product</h4>
            <Form>
              <div>
              <FormGroup className='form__group'>
                <span>Product title</span>
                <input type="text" placeholder='' />
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Short Description</span>
                <input type="text" placeholder='' />
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Description</span>
                <input type="text" placeholder='' />
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Price</span>
                <input type="number" placeholder='' />
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Category</span>
                <select>
                  <option value="chair">Chair</option>
                  <option value="sofa">Sofa</option>
                  <option value="chaise">Chaise</option>
                  <option value="outdoor">Outdoor</option>
                </select>
              </FormGroup>
              </div>
              <FormGroup className='form__group'>
                <span>Product Image</span>
                <input type="file" placeholder='' />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts