import { Button, CloseButton, Container, Form, Modal } from "react-bootstrap"
import PropTypes from 'prop-types';
import '../Navbar/register.scss'
import {Formik} from 'formik'
import axios from 'axios';

AddAddressPopUp.propTypes = {
    onHide: PropTypes.function,
    show: PropTypes.boolean,
    setShow: PropTypes.function,
    setNewAdd: PropTypes.function,
    addressId: PropTypes.number,
    storeEditAddress: PropTypes.object
  };


function AddAddressPopUp({show,setShow,onHide,setNewAdd,addressId,storeEditAddress}) {

  const addressValue = {
    id:'',
    country:'',
    full_name:'',
    address:'',
    address2:'',
    city:'',
    state:'',
    postcode:'',
    phone:'',
  }
  
  
  return (
    <>
     <Modal show={show} size="lg" centered className='rounded-5 '>
            <div className='signupcontainer'>
                <Modal.Header className=' d-flex flex-column p-2 border-0 '>
                  <div className='closebtn'>
                    <CloseButton style={{boxShadow:"none"}} onClick={onHide}/>
                  </div>
                  <Modal.Title id="contained-modal-title-vcenter" className=' text-center col-11'>
                    <div className='signin-register'>
                    {addressId ? "Edit Delivery Address" : "Add Delivery Address"}
                    </div>  
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body className=''>
                  <Container className=" p-0 ">
                    <Formik
                      initialValues={addressId ? storeEditAddress : addressValue}
                      validate={(values) => {
                        const errors = {};
                        if (!values.country) {
                          errors.country = 'Country/Region is required';
                        }
                        if (!values.full_name) {
                          errors.full_name = 'Full Name is required';
                        }
                        if (!values.address) {
                          errors.address = 'Address is required';
                        }
                        if (!values.state) {
                          errors.state = 'State is required';
                        }
                        if (!values.city) {
                          errors.city = 'City is required';
                        }
                        if (!values.postcode) {
                          errors.postcode = 'Postcode is required';
                        }
                        if (!values.phone) {
                          errors.phone = 'Phone is required';
                        }
                        return errors;
                      }}
                      
                      onSubmit={async (values) => {
                        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
                        await axios.post(' https://bargainfox-dev.concettoprojects.com/api/store-delivery-address', values)
                        .then(response => {
                          // console.log(response.data);
                         if(response.status === 200){
                            setNewAdd(true);
                            setShow(false);
                         }
                          })
                          .catch(error => {
                            console.error(error);
                          });
                      }}
                    >
                      {({
                        values,
                        errors,
                        //touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                      }) => (
                      <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                        <Form.Group>
                          <Form.Label>Country/Region<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="country" 
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                            {errors.country && <div style={{ color: "red", fontSize:"10px" }}>{errors.country}</div>}                        
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Full Name<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="full_name" 
                            name="full_name"
                            value={values.full_name}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                            {errors.full_name && <div style={{ color: "red", fontSize:"10px" }}>{errors.full_name}</div>}
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Address<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="address" 
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                            {errors.address && <div style={{ color: "red", fontSize:"10px" }}>{errors.address}</div>}
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Apartment,Suite,etc.</Form.Label>
                          <Form.Control 
                            type="text" 
                            id="address2" 
                            name="address2"
                            value={values.address2}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                        </Form.Group>
                        <div className=" d-flex justify-content-between align-items-center gap-3">
                        <Form.Group>
                          <Form.Label>State<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="state" 
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                            {errors.state && <div style={{ color: "red", fontSize:"10px" }}>{errors.state}</div>}
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>City<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="city" 
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                            {errors.city && <div style={{ color: "red", fontSize:"10px" }}>{errors.city}</div>}
                        </Form.Group>
                        </div>
                        <div className=" d-flex justify-content-between align-items-center gap-3">
                        <Form.Group>
                          <Form.Label>Postcode<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="postcode" 
                            name="postcode"
                            value={values.postcode}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                            {errors.postcode && <div style={{ color: "red", fontSize:"10px" }}>{errors.postcode}</div>}
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Phone<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="phone" 
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                            {errors.phone && <div style={{ color: "red", fontSize:"10px" }}>{errors.phone}</div>}
                        </Form.Group>
                        </div>
                        <Button className='search-icon rounded-5 bg-primary text-light w-100 border-0 py-2 ' type="submit">
                          Save Address
                        </Button>
                      </form>
                      )}
                    </Formik> 
                  </Container>
                </Modal.Body>
            </div>
      </Modal>  
    </>
  )
}

export default AddAddressPopUp
