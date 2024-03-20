import { Button, CloseButton, Container,FormLabel,Modal } from "react-bootstrap"
import PropTypes from 'prop-types';
import "./verifypop.scss"
import {useEffect, useRef, useState} from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import Register from "./Register";

Verifypop.propTypes = {
  //onOtpSubmit: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  values: PropTypes.string.isRequired,
  setVerify: PropTypes.func.isRequired,
};

function Verifypop(props) {

  const [register, setRegister] = useState(false);

  let length = 6;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [combinedOtp,setCombinedOtp] = useState("")
  const inputRefs = useRef([]);
  const {
   handleSubmit,
  } = useForm()

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    setCombinedOtp(newOtp.join(""));

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  const onSubmit = () => {
    axios.post('https://bargainfox-dev.concettoprojects.com/api/verify-otp', 
    {otp: combinedOtp,
    email: props.values})
    .then(response => {
    console.log(response.data);
    setOtp(Array(length).fill(""));
    if(response.data.status === 200 && response.data.result.is_new_user === false){
      props.setVerify(false);
    }else if(response.data.status === 200 && response.data.result.is_new_user === true){
      props.setVerify(false);
      setRegister(true);
    }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <Modal {...props} centered className=' rounded-5 '>
        <div className='signupcontainer'>
          <Modal.Header className=' d-flex flex-column p-2 border-0 '>
            <div className='closebtn col-12 d-flex '>
              <CloseButton style={{boxShadow:"none"}} onClick={props.onHide}/>
            </div>
            <Modal.Title id="contained-modal-title-vcenter" className=' text-center'>
              <div className='signin-register'>
                Verification Code
              </div>  
            </Modal.Title>
          </Modal.Header>
          <div className='popupsubheader'>
              A verification code is sent to {props.values}
          </div>
          <Modal.Body className='p-0'>
            <Container className="px-0 py-4 ">
              <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
              <FormLabel className="signupmsg" >Verification code</FormLabel>
              <div className="otpInputContainer">
                {otp.map((value, index) => {
                  return (
                    <input
                      key={index}
                      type="text"
                      ref={(input) => (inputRefs.current[index] = input)}
                      value={value}
                      onChange={(e) => handleChange(index, e)}
                      onClick={() => handleClick(index)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="otpInput"
                    />
                  );
                })}
              </div>
              <div className=" d-flex justify-content-between mt-2 mb-4">
                <span className=" small ">
                 Expires in 00:30
                </span>
                <span className=" text-primary ">
                Resend Code
                </span>
              </div>
              <Button type="submit" className=" bg-primary text-light rounded-5 w-100 ">Verify</Button>
              </form>
            </Container>
          </Modal.Body>
        </div>
      </Modal>
      <Register show={register} setRegister={setRegister} onHide={() => setRegister(false)}/>
    </div>
  )
}

export default Verifypop
