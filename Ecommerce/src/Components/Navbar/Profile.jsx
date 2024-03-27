import { Button, Col, Container, Form, Row } from "react-bootstrap"
import "./profile.scss"
import { useContext } from "react";
import { UserContext } from "../UserData/StoreUserContext";
import {Formik} from 'formik'
import axios from 'axios';

function Profile() {

    const {userData} = useContext(UserContext);

  return (
    <div>
      <Container className="profilecontainer ">
        <Row className="profileheading">
            <h2 className="yprofile">Your Profile</h2>
        </Row>
        <Row className="profileform">
            <Col>
            <Formik
                      initialValues={{
                        name:'',
                        mobile:'',
                        email:`${userData.email}`,
                      }}
                      
                      onSubmit={(values) => {
                        axios.post('https://bargainfox-dev.concettoprojects.com/api/register', values)
                        .then(response => {
                          console.log(response.data);
                          })
                          .catch(error => {
                            console.error(error);
                          });
                      }}
                    >
                      {({
                        //values,
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
                            value={userData.name}
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
            <div className=" mt-4 text-center text-primary ">Manage Addresses</div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
