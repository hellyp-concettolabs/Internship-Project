import { Button, CloseButton, Container, Form, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import "./register.scss"

Register.propTypes = {
    onHide: PropTypes.func.isRequired,
  };

function Register(props) {

    const {register, handleSubmit, formState: {errors}} = useForm()

  return (
    <>
        <Modal {...props} size="lg" centered className='registercontainer rounded-5 '>
            <div className=' py-4 px-4'>
                <Modal.Header className=' d-flex flex-column p-2 border-0 '>
                  <div className=' col-12 d-flex '>
                    <CloseButton style={{boxShadow:"none"}} onClick={props.onHide}/>
                  </div>
                  <Modal.Title id="contained-modal-title-vcenter" className=' text-center col-11'>
                    <div className=' fs-3 fw-bold '>
                    Looks like you are new here
                    </div>  
                  </Modal.Title>
                </Modal.Header>
                <div className='text-secondary text-center'>
                    Please fill your information below.
                </div>

                <Modal.Body className=''>
                  <Container>
                    <Form className='search d-flex flex-column gap-2' onSubmit={handleSubmit()}>
                      <span className=' fw-medium '>Name*</span>
                      <Form.Control type="text" className=' rounded-5 ' {...register("username")}/>
                      {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
                      <span className=' fw-medium '>Phone number</span>
                      <Form.Control type="number" className=' rounded-5 ' {...register("phonenumber")}/>
                      {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
                      <span className=' fw-medium '>Email</span>
                      <Form.Control type="email" className=' rounded-5 ' {...register("email",{pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,required:"Enter valid e-mail"})}/>
                      {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}

                      <Button onClick  className='search-icon rounded-5 bg-primary text-light submit' type="submit">
                        Register
                      </Button>
                    </Form>
                  </Container>
                </Modal.Body>
            </div>
      </Modal> 
    </>
  )
}

export default Register
