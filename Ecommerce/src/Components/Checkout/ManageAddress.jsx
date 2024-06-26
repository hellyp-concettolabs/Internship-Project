import { Col, Container, Row, Spinner } from "react-bootstrap"
import NoProduct from "../ProductNotFoundPage/NoProduct"
import add from "../../assets/plus.svg"
import axios from "axios";
import { useEffect, useState } from "react";
import AddAddressPopUp from "./AddAddressPopUp";
import { Domain_Base_Url } from "../../app/DomainBaseUrl/BaseUrl";

function ManageAddress() {

    const[loading,isLoading] = useState(false);
    const[show,setShow] = useState(false);
    const[storeAddress,setStoreAddress] = useState([]);
    const[newadd,setNewAdd] = useState(false);
    const[deleteAdd,isDeleteAdd] = useState(false);
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
    const[addressId,setAddressId] = useState(null);
  
    useEffect(() => {
      fetchAddress();
      setNewAdd(false);
    }, [newadd,deleteAdd]);

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

    const deleteAddress = async(id) => {
      try{
      isLoading(true);
      isDeleteAdd(true);
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
      const response = await axios.post(`${Domain_Base_Url}/delete-delivery-address`,{
        id: id
      })
      if(response.data.status === 200){
        isDeleteAdd(false);
        isLoading(false);
      }
      }
      catch(error) {
        console.error('Error making Get request of Address:', error);
      }
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
    };

    // console.log(storeAddress)
  return (
    <>
      {loading ? 
          <div className=" d-flex justify-content-center align-items-center ">
              <Spinner animation="border" variant="primary" />
          </div>:
      (
        <>
          {/* BreadCrumb */}
          <div className=" mx-4">
            <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/" className=" text-decoration-none text-secondary">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page"> &gt; &nbsp; Your Address</li>
              </ol>
            </nav>
          </div>

          <Container className=" mt-4 mb-5 ">
            <Row className=" d-flex align-items-center mb-3 pb-3 border-bottom ">
                <Col>
                    <div className=" fw-bold fs-4 ">
                        Your Addresses
                    </div>
                </Col>
                <Col className="col-md-3 col-4">
                    <div className=" d-flex justify-content-end ">
                      <button
                        className="border-0 d-flex justify-content-end align-items-center gap-2 addbtn"
                        onClick={() => {setAddressId(null) ,setShow(true)}}>
                        <img src={add} className="img-fluid" /> <span>Add new</span>
                      </button>
                    </div>
                </Col>
            </Row>

            <Row>
              <Col>
              {storeAddress && storeAddress.length > 0 ? 
                (
                  <> 
                    {storeAddress.map((data,i) => ( 
                      <div key={data.id || i}>
                        <Row  className=" mb-3 pb-3 border-bottom ">
                          <Col className=" col-12 col-md-8 d-flex  gap-3">
                            <div className=" d-flex flex-column ">
                              <span className=" fw-bold ">{data.full_name}</span>
                              <span>{data.address}, {data.address2 === null ?(""): (`${data.address2},`)} {data.city}, {data.state}, {data.country}, {data.postcode}</span>
                              <span className=" fw-bold ">Phone Number : <span className=" fw-normal ">{data.mobile}</span></span>
                            </div>
                          </Col>
                          <Col className="d-flex align-items-baseline justify-content-end gap-3 p-0 ">
                            <div>
                                <button
                                  onClick={() => handleAddressEdit(data.id,data)}
                                  className="editadd text-primary fw-bold d-flex align-items-center justify-content-end" >
                                  Edit address
                                </button>
                            </div>
                            <div className=" bg-primary rounded-circle " style={{width:"29px"}}>
                                <button onClick={() => deleteAddress(data.id)}
                                  className="border-0 bg-transparent text-light fw-bold d-flex align-items-center justify-content-end" >
                                  <i className="bi bi-trash3"></i>
                                </button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </>
                ):
                (<Row className=" mt-5 "> 
                    <NoProduct heading={'No Address Yet'}
                      desc={'Please add your address for your better experience.'}/>
                  </Row>
                )}
                </Col>
            </Row>
              {show &&
                <AddAddressPopUp show={show} setShow={setShow} onHide={() => setShow(false)} setNewAdd={setNewAdd} 
                  addressId={addressId} storeEditAddress={storeEditAddress}/>
              }        
          </Container>
        </>
      )}
    </>
  )
}

export default ManageAddress
