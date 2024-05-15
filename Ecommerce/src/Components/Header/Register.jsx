import { Button, CloseButton, Container, Form, Modal } from "react-bootstrap"
import PropTypes from 'prop-types';
import "./register.scss"
import {Formik} from 'formik'
import axios from 'axios';
import { useContext } from "react";
import { UserContext } from "../UserData/StoreUserContext";
import { useSelector } from "react-redux";
import { Domain_Base_Url } from "../../app/DomainBaseUrl/BaseUrl";

Register.propTypes = {
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    setregister: PropTypes.func.isRequired,
    useremail: PropTypes.string.isRequired,
  };

function Register({onHide,show,setregister,useremail}) {

  const {setUserData} = useContext(UserContext);
  const userName = useSelector((state) => state.userData.name);
  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  if (userName) {
    if (typeof userName === "string" && userName.includes("@")) {
      defaultValues.email = userName;
    } else if (!isNaN(userName)) {
      defaultValues.phoneNumber = userName.toString();
    }
  }

  return (
    <>
        <Modal show={show} onHide={onHide} size="lg" centered className='rounded-5 '>
            <div className='signupcontainer'>
                <Modal.Header className=' d-flex flex-column p-2 border-0 '>
                  <div className='closebtn'>
                    <CloseButton style={{boxShadow:"none"}} onClick={onHide}/>
                  </div>
                  <Modal.Title id="contained-modal-title-vcenter" className=' text-center col-11'>
                    <div className='signin-register'>
                    Looks like you are new here
                    </div>  
                  </Modal.Title>
                </Modal.Header>
                <div className='popupsubheader'>
                    Please fill your information below.
                </div>

                <Modal.Body className=''>
                  <Container className=" p-0 ">
                    <Formik
                      initialValues={{
                        name:'',
                        mobile:'',
                        email:`${useremail}`,
                        //country_code:'+91'
                      }}
                      
                      onSubmit={(values) => {
                        axios.post(`${Domain_Base_Url}/register`, values)
                        .then(response => {
                          // console.log(response.data);
                         if(response.status === 200){
                          localStorage.setItem("token", response.data.result.token);
                          // console.log(localStorage.getItem("token"));
                          setUserData(response.data.result);
                          setregister(false);
                         }
                          })
                          .catch(error => {
                            console.error(error);
                          });
                      }}
                    >
                      {({
                        values,
                        //touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                      }) => (
                      <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                        <Form.Group>
                          <Form.Label>Name<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="name" 
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                          {/* <div style={{color:"red"}}>{}</div> */}
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Phone Number<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="phone_number" 
                            name="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                          {/* <div style={{color:"red"}}>{}</div> */}
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Email<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="email" 
                            value={useremail}
                            disabled
                            id="email" 
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                        </Form.Group>
                        <Button className='search-icon rounded-5 bg-primary text-light w-100 border-0 py-2 ' type="submit">
                          Register
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

export default Register
