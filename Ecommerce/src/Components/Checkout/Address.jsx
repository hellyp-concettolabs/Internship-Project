import mastercard from "../../assets/mastercard.png";
import american from "../../assets/american.png";
import visa from "../../assets/visa.png";
import add from "../../assets/plus.svg"
import "./address.scss";
import { Row, Col, Container, Form} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import NoProduct from "../ProductNotFoundPage/NoProduct";
import AddAddressPopUp from "./AddAddressPopUp";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Address = () => {


  const[storeAddress,setStoreAddress] = useState([]);
  const[storeEditAddress,setStoreEditAddress] = useState({  id:'',
                                                            country:'',
                                                            full_name:'',
                                                            address:'',
                                                            address2:'',
                                                            city:'',
                                                            state:'',
                                                            postcode:'',
                                                            phone:'',
                                                          });
  const[show,setShow] = useState(false);
  const[newadd,setNewAdd] = useState(false);
  const[addressId,setAddressId] = useState(null);
  const navigate = useNavigate();

  const fetchAddress = async() => {
    if(localStorage.getItem("token") !== ""){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    await axios.get(' https://bargainfox-dev.concettoprojects.com/api/get-delivery-address')
    .then((response) => {
      setStoreAddress(response.data.result);
    })
    .catch(error => {
      console.error('Error making Get request of Address:', error);
    })
  }
  }

  useEffect(() => {
    fetchAddress();
    setNewAdd(false);
  }, [newadd])

  const handlePayment = () =>{
    if(addressId){
    navigate(`/checkout/payment`,{state:{addressId:addressId}});
    }else{
    toast.error("Please select delivery address.");
    }
  }

  const handleSelect = (id) =>{
    setAddressId(id);
  }


  const handleAddressEdit = async(id,data) =>{
    setAddressId(id);
    setStoreEditAddress({id:data.id,
    country:data.country,
    full_name:data.full_name,
    address:data.address,
    address2:data.address2,
    city:data.city,
    state:data.state,
    postcode:data.postcode,
    phone:data.mobile,})
    setShow(true);
  }
  console.log(storeAddress)
  console.log(storeEditAddress)
  return (
    <>
      <Container fluid className="my-5">
        <Row className="d-flex justify-content-around align-items-start ">

          <Col className="col-lg-7  col-sm-12">
            
            <Row className="d-flex align-items-center justify-content-between">
              <Col className="text-center text-sm-start">
                <p className="fw-bold fs-3">Select Delivery address</p>
              </Col>
              <Col className="col-md-3 col-4">
                <div className=" d-flex justify-content-end ">
                  <button
                    className="border-0 d-flex justify-content-end align-items-center gap-2 addbtn"
                    onClick={() => {setAddressId(null) , setShow(true)}}>
                    <img src={add} className="img-fluid" /> <span>Add new</span>
                  </button>
                </div>
              </Col>
            </Row>
            {show &&
              <AddAddressPopUp show={show} setShow={setShow} onHide={() => setShow(false)} setNewAdd={setNewAdd} 
                 addressId={addressId} storeEditAddress={storeEditAddress}/>
            }
            <hr className="mt-3 mt-sm-0" />
            
            {storeAddress.length > 0 ? 
            (
            <> 
            {storeAddress.map((data) => (
            <Row key={data.id}>
              <Col className=" col-12 col-md-8 mt-2 mb-2 d-flex  gap-3">
                <div>
                  <Form.Check
                    type="radio"
                    aria-label="radio 1"
                    onChange={() => {handleSelect(data.id)}}
                  />
                </div>
                <div className=" d-flex flex-column ">
                  <span className=" fw-bold ">{data.full_name}</span>
                  <span>{data.address}, {data.address2 === null ?(""): (`${data.address2},`)} {data.city}, {data.state}, {data.country}, {data.postcode}</span>
                  <span className=" fw-bold ">Phone Number : <span className=" fw-normal ">{data.mobile}</span></span>
                </div>
              </Col>
              <Col className="d-flex align-items-baseline justify-content-end ">
                <button onClick={() => handleAddressEdit(data.id,data)}
                  className="editadd text-primary fw-bold d-flex align-items-center justify-content-end" >
                  Edit address
                </button>
              </Col>
                <hr />
            </Row>
            ))}</>):
            (
              <Row className=" mt-5 "> 
                <NoProduct heading={'No Address Yet'}
                  desc={'Please add your address for your better experience.'}/>
              </Row>
            )}
          </Col>

          <Col className="paymentContainerBorder border col-lg-4 col-sm-7  col-10  m-0 ">
            <Row className="border-bottom p-3 d-flex align-items-center justify-content-center">
              <button
                onClick={handlePayment}
                className=" rounded-5 btn btn-primary w-100 "
              >
                Continue To Payment
              </button>
              <ToastContainer />
            </Row>
            <Row className="py-4">
              <div>
                <div className=" ">We accept :</div>
                <div className="d-flex justify-content-start align-items-center gap-1 mt-1">
                  <div>
                    <img src={mastercard} className=" img-fluid" />
                  </div>
                  <div>
                    <img src={visa} className=" img-fluid" />
                  </div>
                  <div>
                    <img src={american} className=" img-fluid" />
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Address;
