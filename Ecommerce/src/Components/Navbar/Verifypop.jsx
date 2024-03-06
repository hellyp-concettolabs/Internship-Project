import { Button, CloseButton, Container,FormControl,FormLabel,Modal } from "react-bootstrap"
import PropTypes from 'prop-types';

Verifypop.propTypes = {
  onHide: PropTypes.func.isRequired,
};

function Verifypop(props) {
  return (
    <div>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter"centered className=' rounded-5 '>
        <div className=' py-4 px-4'>
        <Modal.Header className=' d-flex flex-column p-2 border-0 '>
          <div className=' col-12 d-flex '>
            <CloseButton style={{boxShadow:"none"}} onClick={props.onHide}/>
          </div>
          <Modal.Title id="contained-modal-title-vcenter" className=' text-center col-11'>
            <div className=' fs-3 fw-bold '>
            Verification Code
            </div>  
          </Modal.Title>
        </Modal.Header>
        <div className='text-secondary text-center'>
            A verification code is sent to stephenparker@gmail.com
        </div>
        <Modal.Body className=''>
          <Container className=" px-5">
            <FormLabel >Verification code</FormLabel>
            <div className=" d-flex flex-row gap-5">
            <FormControl className=" bg-body-secondary py-3"></FormControl>
            <FormControl className=" bg-body-secondary py-3"></FormControl>
            <FormControl className=" bg-body-secondary py-3"></FormControl>
            <FormControl className=" bg-body-secondary py-3"></FormControl>
            <FormControl className=" bg-body-secondary py-3"></FormControl>
            </div>
            <div className=" d-flex justify-content-between mt-3 ">
              <span className=" small ">
               Expires in 00:30
              </span>
              <span className=" text-primary ">
              Resend Code
              </span>
            </div>
            <Button className=" bg-primary text-light rounded-5 w-100 ">Verify</Button>
          </Container>
        </Modal.Body>
        </div>
      </Modal>
    </div>
  )
}

export default Verifypop
