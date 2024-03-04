import { CloseButton, Container,Modal } from "react-bootstrap"
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
          <Container>
            
          </Container>
        </Modal.Body>
        </div>
      </Modal>
    </div>
  )
}

export default Verifypop
