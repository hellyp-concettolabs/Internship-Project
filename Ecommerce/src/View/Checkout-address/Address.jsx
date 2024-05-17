import { Row, Col, Container, Form, Spinner} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mastercard from "../../assets/mastercard.png";
import american from "../../assets/american.png";
import visa from "../../assets/visa.png";
import add from "../../assets/plus.svg"
import NoProduct from "../ProductNotFoundPage/NoProduct";
import AddAddressPopUp from "./AddAddressPopUp";
import "./address.scss";
import { Domain_Base_Url } from "../../app/DomainBaseUrl/BaseUrl";

const Address = () => {

    const[loading,isLoading] = useState(false);
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

    useEffect(() => {
      fetchAddress();
      setNewAdd(false);
    }, [newadd]);

    const fetchAddress = async() => {
      try{
      if(localStorage.getItem("token") !== ""){
        isLoading(true);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        const response = await axios.get(`${Domain_Base_Url}/get-delivery-address`)
          setStoreAddress(response.data.result);
          isLoading(false);
      }}
      catch(error) {
        console.error('Error making Get request of Address:', error);
      }
    }

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
    // console.log(storeAddress)
    // console.log(storeEditAddress)

  return (
    <>
      <Container fluid className="my-5">
        <Row className="d-flex justify-content-around align-items-start ">

          <Col className="col-lg-7  col-sm-12">
            
            <Row className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom ">
              <Col className="text-center text-sm-start">
                <div className="fw-bold fs-3">Select Delivery address</div>
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
            
            {loading ? 
              (
                <div className=" d-flex justify-content-center align-items-center ">
                  <Spinner animation="border" variant="primary" />
                </div>
              )  :
            (storeAddress.length > 0 ? 
            (
            <> 
            {storeAddress.map((data) => (
            <Row key={data.id} className=" mb-3 pb-3 border-bottom ">
              <Col className=" col-12 col-md-8 mt-2 mb-2 d-flex  gap-3">
                <div>
                  <Form.Check
                    type="radio"
                    aria-label="radio 1"
                    name="user_address"
                    id={data.id}
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
            </Row>
            ))}</>):
            (
              <Row className=" mt-5 "> 
                <NoProduct heading={'No Address Yet'}
                  desc={'Please add your address for your better experience.'}/>
              </Row>
            ))}

          </Col>

          <Col className="paymentContainerBorder border col-lg-4 col-sm-7  col-10  m-0 ">
            <Row className="border-bottom p-3 d-flex align-items-center justify-content-center">
              <button
                onClick={handlePayment}
                className=" rounded-5 btn btn-primary w-100 "
              >
                Continue To Payment
              </button>
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
