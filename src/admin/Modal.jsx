import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { updateDoc } from "firebase/firestore";

const Modal = () => {
    const {id} = useParams();

  const [updateProduct, setUpdateProduct] = useState({
    productName: "",
    shortDesc: "",
    description: "",
    category: "",
    price: "",
    imgUrl: "",
  });

  const handleChange = () => {
    setUpdateProduct({...setUpdateProduct, [e.target.id]: e.target.value});
  };

  useEffect(() => {

  },[])


  const handleSubmit = () => {
    e.preventDefault();
    try {
        const docRef = await collection(db, "products");
  
        const storageRef = ref(
          storage,
          `productImages/${Date.now() + setUpdateProduct(imgUrl).name}`
        );
  
        const uploadTask = uploadBytesResumable(storageRef, setUpdateProduct(imgUrl));
  
        uploadTask.on(
          () => {
            toast.error("Images not uploaded");
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await UpdateDoc(docRef, {
                productName,
                shortDesc,
                description,
                category,
                price,
                imgUrl: downloadURL,
              });
            });
          }
        );
        toast.success("Product successfully updated");
        navigate("/dashboard/allproducts");
  
      } catch (error) {
        setLoading(false);
        toast.error("Product not added!");
      }
  
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5">Loading...</h4>
            ) : (
              <>
                <h4 className="mb-5">Add Product</h4>
                <Form onSubmit={updateProduct}>
                  <FormGroup className="form__group">
                    <span>Product title</span>
                    <input
                      type="text"
                      placeholder=""
                      value={productName}
                      onChange={(e) => setUpdateProduct(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder=""
                      value={shortDesc}
                      onChange={(e) => setUpdateProduct(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder=""
                      value={description}
                      onChange={(e) => setUpdateProduct(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="w-50 form__group">
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="$"
                        value={price}
                        onChange={(e) => setUpdateProduct(Number(e.target.value))}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="w-50 form__group">
                      <span>Category</span>
                      <select
                        className="w-100 p-2"
                        value={category}
                        onChange={(e) => setUpdateProduct(e.target.value)}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="chaise">Chaise</option>
                        <option value="outdoor">Outdoor</option>
                      </select>
                    </FormGroup>
                  </div>
                </Form>
              </>
            )}
            <div>
              <FormGroup className="form__group">
                <span>Product Image</span>
                <input
                  type="file"
                  placeholder=""
                  value={imgUrl}
                  onChange={(e) => setUpdateProduct(e.target.files[0])}
                />
              </FormGroup>
            </div>

            <motion.button
              whileTap={{ scale: 1.2 }}
              className="buy__btn"
              type="submit"
              onClick={updateProduct}
            >
              save
            </motion.button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Modal;
