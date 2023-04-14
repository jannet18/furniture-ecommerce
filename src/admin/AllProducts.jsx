import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../firebase/useGetData";
import { db } from "../firebase/config";

import { doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");
  console.log(productsData);
  const[updateProductName, setUpdateProductName] = useState("");
  const[updateShortDesc, setUpdateShortDesc] = useState("");
  const[updateProductDescription, setUpdateProductDescription] = useState("");
  const[updateProductCategory, setUpdateProductCategory] = useState("");
  const[updateProductPrice, setUpdateProductPrice] = useState("");
  const[updateProductImgUrl, setUpdateProductImgUrl] = useState("");

  const updateProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, {
      productName: updateProductName,
      shortDesc: updateShortDesc,
      description: updateProductDescription,
      category: updateProductCategory,
      price:updateProductPrice,
      imgUrl: updateProductImgUrl,
    });
    toast.success("Updated successfully!");
  };

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    toast.success("Deleted successfully!");
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <td>
                    <button className="btn btn-outlitne-primary">Update</button>
                  </td>
                  <th>
                    <button className="btn btn-danger">Delete</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h3 className="py-5 text-center fw-bold">Loading...</h3>
                ) : (
                  productsData?.map((product, id) => (
                    <tr key={id}>
                      <td>
                        <img src={product?.imgUrl} alt="" />
                      </td>
                      <td>{product?.productName}</td>
                      <td>{product?.category}</td>
                      <td>{product?.price}</td>

                      <td>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          onClick={() => updateProduct(product.id)}
                          className="btn btn-outline-primary"
                        >
                          Update
                        </motion.button>
                      </td>
                      <td>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          onClick={() => deleteProduct(product.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </motion.button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
