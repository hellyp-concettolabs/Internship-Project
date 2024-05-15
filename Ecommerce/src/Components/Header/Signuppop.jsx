import { CloseButton, Container} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import {Formik} from 'formik'
import Verifypop from './Verifypop';
import axios from 'axios';
import * as Yup from 'yup';
import "./signuppop.scss"
import { useState } from 'react';
import { Domain_Base_Url } from '../../app/DomainBaseUrl/BaseUrl';

Signuppop.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  onHide: PropTypes.func,
};
function Signuppop(props) {

  const [verify, setVerify] = useState(false);
  const [userValues,setValues] = useState('');


  return (
    <>
      <Modal show={props.show} onHide={props.onHide} centered className=' rounded-5 '>
        <div className='signupcontainer'>
        <Modal.Header className=' d-flex flex-column p-2 border-0 '>
          <div className='closebtn '>
            <CloseButton style={{boxShadow:"none"}} onClick={props.onHide}/>
          </div>
          <Modal.Title id="contained-modal-title-vcenter" className=' text-center'>
            <div className='signin-register'>
                Sign In / Register
            </div>  
          </Modal.Title>
        </Modal.Header>
        <div className='popupsubheader'>
            Please enter your phone number or email below
        </div>
        <Modal.Body className='px-0 py-4'>
          <Container className=' p-0 '>
            <div className='signupmsg mb-1'>Enter phone number or email</div>
            <Formik
              initialValues={{email:''}}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Please enter valid phone number or email')
                  .required('Please enter your phone number or email')
                  .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)
              })}
              onSubmit={(values, { setSubmitting }) => {
                axios.post(`${Domain_Base_Url}/send-otp`, values)
                .then(response => {
                // console.log(response.data);
                setValues(values.email);
                // console.log(values.email);
                if(response.data.status === 200){
                  props.setShow(false)
                  setVerify(true)
                }
                })
                .catch(error => {
                  console.error(error);
                });
               setSubmitting(false);
              }}
            >
              {({
                 values,
                 errors,
                 //touched,
                 handleChange,
                 handleBlur,
                 handleSubmit,
                 isSubmitting,
              }) => (
                 <form onSubmit={handleSubmit} className='d-flex flex-column'>
                   <input
                     type="text"
                     name="email"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}
                     autoCorrect='false'
                     className='signupemail rounded-5 w-100 px-3 py-2'
                   />
                   <p className=' text-danger small '>{errors.email}</p>
                   <button type="submit" disabled={isSubmitting} className='search-icon rounded-5 bg-primary text-light w-100 border-0 py-2 '>
                   Continue
                   </button>
                 </form>
               )}
            </Formik>
          </Container>
        </Modal.Body>
        </div>
      </Modal>
      <Verifypop show={verify} setVerify={setVerify} useremail={userValues} onHide={() => setVerify(false)}/>

    </>
  )
}

export default Signuppop




