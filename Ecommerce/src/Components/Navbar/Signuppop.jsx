import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Signuppop(props) {


  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className=' pb-0 '>
        <Modal.Title id="contained-modal-title-vcenter" className=' text-center col-11'>
            <div className=' fs-1 fw-bold '>
                Sign In / Register
                {/* <CloseButton aria-label="Hide" /> */}
            </div>
            
        </Modal.Title>
      </Modal.Header>
      <div className='text-secondary text-center pb-4 '>
            Please enter your phone number or email below
        </div>
      <Modal.Body className='pt-0 '>
        <Container>
        <span className=' fw-medium fs-5'>Enter phone number or email</span>
        <Form className='search d-flex flex-column gap-4'>
            <Form.Control type="text" placeholder="Enter phone number or email" className=' rounded-5 ' />
            <Button variant="outline-success" className='search-icon rounded-5 bg-primary text-light '>
                Continue
            </Button>
        </Form>
        </Container>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </div>
  )
}

export default Signuppop
