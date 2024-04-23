import { useContext, useEffect, useState } from "react";
import mastercard from "../../assets/mastercard.png";
import american from "../../assets/american.png";
import visa from "../../assets/visa.png";
// import add from "/Images/add.png";
import "./payment.scss";
import { Row, Col, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserData/StoreUserContext";

const paymentImage = [visa, mastercard, american];

const Payment = () => {
    const { userData } = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);
  const [deliveryAddress, setDeliverAddress] = useState("");
  const [showEditAddress, setShowEditAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

  const handleSelectedAddress = (addressId) => {
    setSelectedAddress(addressId);
    console.log(addressId);
  };

  const handleClose = () => {
    setShowPopup(!showPopup);
  };

  const defaultValues = {
    id: showEditAddress ? showEditAddress.id : "",
    selectField: showEditAddress ? showEditAddress.selectField : "",
    fullName: showEditAddress ? showEditAddress.full_name : "",
    phoneNumber: showEditAddress ? showEditAddress.phoneNumber : "",
    city: showEditAddress ? showEditAddress.city : "",
    postcode: showEditAddress ? showEditAddress.postcode : "",
    address: showEditAddress ? showEditAddress.address : "",
    address2: showEditAddress ? showEditAddress.address2 : "",
    state: showEditAddress ? showEditAddress.state : "",
  };

  const validationSchema = yup.object({
    fullName: yup
      .string()
      .required("* Full Name is required")
      .min(5, "* Name must be more than 5 letters"),

    address: yup
      .string()
      .required("* Address is required")
      .min(10, "* Address must be more than 10 letters"),

    address2: yup
      .string()
      .required("* Address-2 is required")
      .min(5, "* Address2 must be more than 5 letters"),

    city: yup
      .string()
      .required("* City Name is required")
      .min(3, "City Name must be  3 letters."),

    state: yup
      .string()
      .required("* State Name is required")
      .min(3, "State Name must be  3 letters."),

    phoneNumber: yup
      .number()
      .required("* Phone number is required")
      .typeError("That doesn't look like phone number")
      .positive("Phone number can not start with minus")
      .integer("Phone number can not be decimal number")
      .min(10, "Phone number must be length of 10"),

    postcode: yup
      .number()
      .required("* Post Code is required")
      .typeError("That doesn't look like post code.")
      .positive("Postcode can not start with minus")
      .integer("Postcode can not be decimal number")
      .min(6, "Postcode must be length of 6"),

    selectField: yup.string().required("* Please select country"),
  });

  const newDeliveryAddress = async (values) => {
    // console.log("values from formik form", values);
    try {
      const {
        id,
        selectField,
        fullName,
        address,
        city,
        postcode,
        phoneNumber,
        state,
        address2,
      } = values;
      const response = 
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
      await axios.post(' https://bargainfox-dev.concettoprojects.com/api/store-delivery-address',
        {
          id: id,
          country: selectField,
          full_name: fullName,
          address: address,
          address2: address2,
          city: city,
          state: state,
          postcode: postcode,
          phone: phoneNumber,
        },
      );
      if (response.status === 200) {
        // console.log("Stored address successfully", response);
        setShowPopup(false);
      }
    } catch (error) {
      console.log("Error while storing the Address", error);
    }
  };

  const getDeliveryAddress = async () => {
    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
      const response = await axios.get( 'https://bargainfox-dev.concettoprojects.com/api/get-delivery-address');
      if (response.status === 200) {
        setDeliverAddress(response.data.result);
        console.log("Successfull retrieved api call", response.data.result);
      }
    } catch (error) {
      console.log("Some error while getting Address", error);
    }
  };

  useEffect(() => {
    getDeliveryAddress();
  }, []);

  const handleEditAddress = (values) => {
    // console.log("values in edit address", values);
    setShowPopup(true);
    setShowEditAddress({
      id: values.id,
      selectField: values.country,
      full_name: values.full_name,
      phoneNumber: values.mobile,
      city: values.city,
      postcode: values.postcode,
      address: values.address,
      address2: values.address2,
      state: values.state,
    });
  };

  const handleNewAddress = () => {
    setShowPopup(true);
    setShowEditAddress();
  };

  return (
    <>
      <Container className="mt-5 ">
        <Row className="d-flex  ">
          <Col className="col-12 col-xl-6 col-lg-7  col-sm-12">
            <Row className="d-flex align-items-center justify-content-between">
              <Col className="col-md-9 col-12  mx-sm-0 text-center text-sm-start">
                <p className="fw-bold fs-3">Select Delivery address</p>
              </Col>
              <Col className="col-md-3">
                <div className="d-flex align-items-center justify-content-end gap-2">
                  <button
                    className="border-0 addNew-button"
                    onClick={handleNewAddress}
                  >
                    {/* <img src={add} className="img-fluid" /> <span>Add new</span> */}
                  </button>
                </div>
              </Col>
            </Row>
            <hr className="mt-3 mt-sm-0" />
            {deliveryAddress &&
              deliveryAddress.map((addressItem) => {
                return (
                  <Row key={addressItem.id}>
                    <span className="fw-bold text-warning d-flex d-sm-none align-items-center justify-content-end">
                      Edit Address
                    </span>

                    <Col className=" col-12 col-md-8 mt-2 mb-2 d-flex align-items-center gap-3">
                      <div>
                        <Form.Check
                          type="radio"
                          onChange={() => handleSelectedAddress(addressItem.id)}
                          checked={selectedAddress === addressItem.id}
                          aria-label="radio 1"
                        />
                      </div>

                      <span>
                        <span className="fw-bold h5">
                          {addressItem.full_name}
                        </span>{" "}
                        <br />
                        {addressItem.address} {addressItem.address2},{" "}
                        {addressItem.city}, {addressItem.state},{" "}
                        {addressItem.country}, {addressItem.postcode} <br />
                        Phone number: {addressItem.mobile}
                      </span>
                    </Col>
                    <Col className="d-md-flex align-items-baseline d-none  justify-content-end ">
                      <button
                        onClick={() => handleEditAddress(addressItem)}
                        className="editAddress-button text-warning fw-bold d-flex align-items-center justify-content-end"
                      >
                        Edit address
                      </button>
                    </Col>
                    <hr />
                  </Row>
                );
              })}
          </Col>

          {/* Column for payment section  */}

          <Col className="mt-3 mt-sm-1 offset-2 justify-content-end border col-lg-4 p-md-3 mx-lg-4 col-xl-4  col-sm-7  col-10  payment-border mx-xl-5 ">
            <Row className="border-bottom p-3 d-flex align-items-center justify-content-center">
              <button
                onClick={() => {
                  navigate("/payment", {
                    state: { selectedAddress },
                  });
                }}
                className="continue-button btn btn-primary w-100 "
              >
                Continue To Payment
              </button>
            </Row>
            <Row className="py-3">
              <div>
                <div className="fw-bold ">We accept :</div>
                <div className="d-flex align-items-center justify-content-start gap-1 mt-1">
                  {paymentImage.map((eachImg, index) => (
                    <div key={index}>
                      <img src={eachImg} className=" img-fluid" />
                    </div>
                  ))}
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      {showPopup && (
        <Modal
          show={showPopup}
          onHide={handleClose}
          backdrop="static"
          className="p-0"
        >
          <Modal.Header className="border-bottom-0 p-sm-4 " closeButton>
            <Modal.Title className="text-start">
              <div>
                <span className="fw-bold h2 ">Add Delivery Address</span>
              </div>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Formik
              validationSchema={validationSchema}
              initialValues={defaultValues}
              onSubmit={(values, { resetForm }) => {
                // console.log("values from on submit", values);
                newDeliveryAddress(values);
                setShowEditAddress(values);
                getDeliveryAddress();
                resetForm();
              }}
            >
              {({ handleSubmit, handleChange, values }) => {
                {
                  /* console.log(errors); */
                }
                return (
                  <Form onSubmit={handleSubmit} className="px-3">
                    <Form.Group
                      className="mb-3 "
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Select
                        aria-label="Default select example"
                        className="select-input text-dark px-3"
                        value={values.selectField}
                        onChange={handleChange}
                        name="selectField"
                      >
                        <option className="text-dark">
                          Country/Region <sup className="text-danger">*</sup>
                        </option>
                        <option value="india">India</option>
                        <option value="uk">UK</option>
                        <option value="usa">USA</option>
                      </Form.Select>
                      <small className="mx-2 text-danger">
                        <ErrorMessage name="selectField" />
                      </small>
                      <br />

                      <Form.Label className="fw-bold">
                        Full Name<sup className="text-danger mx-1">*</sup>
                      </Form.Label>
                      <Form.Control
                        className="register-input"
                        type="text"
                        value={values.fullName}
                        name="fullName"
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <small className="text-danger">
                        <ErrorMessage name="fullName" />
                      </small>
                      <br />

                      <Form.Label className="fw-bold">
                        Address<sup className="text-danger mx-1">*</sup>
                      </Form.Label>
                      <Form.Control
                        className="register-input"
                        type="text"
                        value={values.address}
                        name="address"
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <small className="text-danger">
                        <ErrorMessage name="address" />
                      </small>
                      <br />

                      <Form.Label className="fw-bold">
                        Address-2<sup className="text-danger mx-1">*</sup>
                      </Form.Label>
                      <Form.Control
                        className="register-input"
                        type="text"
                        value={values.address2}
                        name="address2"
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <small className="text-danger">
                        <ErrorMessage name="address2" />
                      </small>
                      <br />

                      <Row className="d-flex gap-2 p-0">
                        <Col className="col-12 col-sm-5">
                          <div>
                            <Form.Label className="fw-bold">City</Form.Label>
                          </div>
                          <div>
                            <Form.Control
                              className="register-input"
                              type="text"
                              value={values.city}
                              name="city"
                              onChange={handleChange}
                              autoComplete="off"
                            />
                            <small className="text-danger">
                              <ErrorMessage name="city" />
                            </small>
                          </div>
                        </Col>

                        <Col className="col-12 col-sm-5">
                          <div>
                            <Form.Label className="fw-bold">
                              PostCode<sup className="text-danger mx-1">*</sup>
                            </Form.Label>
                          </div>
                          <div>
                            <Form.Control
                              className="register-input"
                              type="number"
                              value={values.postcode}
                              name="postcode"
                              onChange={handleChange}
                              autoComplete="off"
                            />
                            <small className="text-danger">
                              <ErrorMessage name="postcode" />
                            </small>
                          </div>
                        </Col>
                      </Row>

                      <Form.Label className="fw-bold mt-3">
                        State<sup className="text-danger mx-1 ">*</sup>
                      </Form.Label>
                      <Form.Control
                        className="register-input"
                        type="text"
                        value={values.state}
                        name="state"
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <small className="text-danger">
                        <ErrorMessage name="state" />
                      </small>
                      <br />

                      <Form.Label className="fw-bold">Phone</Form.Label>
                      <Form.Control
                        className="register-input"
                        type="number"
                        value={values.phoneNumber}
                        name="phoneNumber"
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <small className="text-danger">
                        <ErrorMessage name="phoneNumber" />
                      </small>
                      <br />

                      {/* <div className="d-flex gap-2 mt-2 ">
                        <Form.Check aria-label="option 1" />
                        <span>Save this information for next time</span>
                      </div> */}
                    </Form.Group>
                    <button
                      type="submit"
                      className="register-button text-white w-100 p-2 border-0"
                    >
                      Continue
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Payment;
