import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"
import "./profile.scss"
import { useContext } from "react";
import { UserContext, userResultDetails } from "../UserData/StoreUserContext";
import {Formik} from 'formik'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";

function Profile() {

    const {userData, setUserData} = useContext(UserContext);
    const navigate = useNavigate();

    const handleAddress = () =>{
      navigate('/address')
    }
    const deleteAccount = async() =>{
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
      await axios.get(' https://bargainfox-dev.concettoprojects.com/api/user-delete')
      .then((response) => {
        if(response.data.status === 200){
          localStorage.removeItem("token");
          setUserData(userResultDetails);
          navigate('/')
        }
      })
      .catch(error => {
        if(error.response.status === 422){
            toast.error(`Can't delete account. It seems your orders are in process.`);
        } else {
            toast.error(`An error occurred while deleting account. Please try again later.`);
        }
        console.error('Error making Get request of Delete Account:', error);
      })
    }

  return (
    <>
      {/* BreadCrumb */}
      <Container fluid className="profileBreadcrumb">
          <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-start ">
              <li className="breadcrumb-item">
                  <a href="/" className=" text-decoration-none text-secondary">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page"> &gt; &nbsp; Profile</li>
            </ol>
          </nav>
      </Container>
      <Container className="profilecontainer ">

        <Row className="profileheading">
            <h2 className="yprofile">Your Profile</h2>
        </Row>
        <Row>
          <Image src={userData.avatar_url}
            className=" rounded-circle mt-3 img-fluid "
            style={{height:"100px"}}/>
        </Row>
        <Row className="profileform">
            <Col>
            <Formik
                      initialValues={{
                        name:`${userData.name}`,
                        mobile:'',
                        email:`${userData.email}`,
                      }}
                      
                      onSubmit={(values) => {
                        axios.post('https://bargainfox-dev.concettoprojects.com/api/update-profile', values)
                        .then(response => {
                          // console.log(response.data);
                          setUserData(response.data.result)
                          toast.success("Your Profile is been updated successfully");
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
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control 
                            type="text" 
                            id="phone_number" 
                            name="mobile"
                            value={userData.mobile}
                            disabled
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control 
                            type="email" 
                            value={userData.email}
                            disabled
                            id="email" 
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                        </Form.Group>
                        <Button className='search-icon rounded-5 bg-primary text-light w-100 border-0 py-2 ' type="submit">
                          Update & Save
                        </Button>
                      </form>
                      )}
                    </Formik>
            <div className=" mt-4 d-flex justify-content-center align-items-center gap-2 fw-medium ">
              <button className=" border-0 p-0 bg-transparent "
                onClick={() => handleAddress()}>
                <div className=" text-center text-primary ">Manage Addresses</div>
              </button>
              <div className=" text-secondary ">|</div>
              <button className=" border-0 p-0 bg-transparent "
                onClick={() => deleteAccount()}>
                <div>Delete Account</div>
              </button>
            </div>
            </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right"/>
    </>
  )
}

export default Profile
