import { CloseButton, Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form'
import { useState } from 'react';
//import Verifypop from './Verifypop';
import Register from './Register';

Signuppop.propTypes = {
  onHide: PropTypes.func.isRequired,
};
function Signuppop(props) {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const [verify, setVerify] = useState(false);
  const onSubmit = () => {
    props.onHide();
  }
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter"centered className=' rounded-5 '>
        <div className=' py-4 px-4'>
        <Modal.Header className=' d-flex flex-column p-2 border-0 '>
          <div className=' col-12 d-flex '>
            <CloseButton style={{boxShadow:"none"}} onClick={props.onHide}/>
          </div>
          <Modal.Title id="contained-modal-title-vcenter" className=' text-center col-11'>
            <div className=' fs-3 fw-bold '>
                Sign In / Register
            </div>  
          </Modal.Title>
        </Modal.Header>
        <div className='text-secondary text-center'>
            Please enter your phone number or email below
        </div>
        <Modal.Body className=''>
          <Container>
            <span className=' fw-medium '>Enter phone number or email</span>
            <Form className='search d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
              <Form.Control type="email" placeholder="" className=' rounded-5 ' {...register("email",{pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,required:"Enter valid e-mail"})}/>
              {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
              <Button onClick={() => setVerify(true)}  className='search-icon rounded-5 bg-primary text-light submit' type="submit">
                Continue
              </Button>
              {/* <Verifypop show={verify} onHide={() => setVerify(false)}/> */}
              <Register show={verify} onHide={() => setVerify(false)}/>
            </Form>
          </Container>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props}>Close</Button>
        </Modal.Footer> */}
        </div>
      </Modal>
    </>
  )
}

export default Signuppop
