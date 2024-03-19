import { CloseButton, Container} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import {Formik} from 'formik'
//import Verifypop from './Verifypop';
//import Register from './Register';
//import axios from 'axios';

Signuppop.propTypes = {
  onHide: PropTypes.func.isRequired,
};
function Signuppop(props) {



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
            <Formik
              initialValues={{emial:''}}
              validate={values => {
                const errors = {};
                if(!values.email || values.email===null){
                  errors.email= 'Required';
                } else if(
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ){
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                  console.log(JSON.stringify(values, null, 2));
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
                 /* and other goodies */
              }) => (
                 <form onSubmit={handleSubmit} className='search d-flex flex-column gap-3'>
                   <input
                     type="email"
                     name="email"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}
                     className=' rounded-5 w-100 border-1'
                   />
                   {errors.email}
                   <button type="submit" disabled={isSubmitting} className='search-icon rounded-5 bg-primary text-light submit w-100 border-0 py-1 '>
                   Continue
                   </button>
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

export default Signuppop



  // const {register, formState: {errors}} = useForm()
  // //const [verify, setVerify] = useState(false);
  // // const onSubmit = () => {
  // //   props.onHide();
  // // }

  // const [email,setEmail] = useState("");
  // //const [data,setData] = useState([]);
  // //const [status,setstatus] = useState(false);
  // const handleinput = (e) =>{
  //  // e.preventDefault();
  //   setEmail(e.target.value);
  // }



//const createUser = async(e) =>{
  //       e.preventDefault();
  //       if(email !== ''){
  //         setEmail[{...email},email];
  //         let item = {email};
  //         let res = await fetch( 'https://bargainfox-dev.concettoprojects.com/api/send-otp',{
  //               method:'Post',
  //               headers:{
  //                 "Content-Type":"application/json",
  //                 "Accept":"*/*"
  //               },
  //               body: JSON.stringify(item)
  //           })
  //           res = await res.json();
  //           localStorage.setItem("user-info",JSON.stringify(res))
  //         }
  // }



 {/* <Form className='search d-flex flex-column gap-2'>
              <Form.Control type="text" placeholder="" className=' rounded-5 '
                onChange={handleinput}
                {...register("email",{ pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: "Enter a valid e-mail",
                },
                required: "Email is required",})}/>
              {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
              <Button onClick={createUser} className='search-icon rounded-5 bg-primary text-light submit' type="submit">
                Continue
              </Button>
            </Form> */}






              {/* <Verifypop show={verify} onHide={() => setVerify(false)}/> */}
              {/* <Register show={verify} onHide={() => setVerify(false)}/> */}