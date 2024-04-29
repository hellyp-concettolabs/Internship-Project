import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router"
import axios from "axios";
import "./payment.scss"

function Payment() {

  const location = useLocation();
  const addressId = location.state.addressId;
  const [storeAddress, setStoreAddress] = useState();
  const navigate = useNavigate();
  const [cartProductData, setCartProductData] = useState({});
  const [diffBillAdd,setDiffBillAdd] = useState(false);
  const[deliveryTypeId,setDeliveryTypeId] = useState(1);
  const[storeBillAdd,setStoreBillAdd] = useState({id:'',
                                                  country:'',
                                                  full_name:'',
                                                  address:'',
                                                  address2:'',
                                                  city:'',
                                                  state:'',
                                                  postcode:'',
                                                  phone:'',})


  const fetchAddress = async () => {
    if (localStorage.getItem("token") !== null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
      await axios.get(`https://bargainfox-dev.concettoprojects.com/api/get-delivery-address`)
        .then((response) => {
          setStoreAddress(response.data.result);
          if(addressId !== null){
            const storeIdAddress = response.data.result.find((item) => item.id === addressId);
          setStoreAddress(storeIdAddress);
        }
        })
        .catch(error => {
          console.error('Error making Get request of Address:', error);
        })
    }
  }

  useEffect(() => {
    fetchAddress();
  }, []);



  const fetchOrderSummary = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    await axios.post(' https://bargainfox-dev.concettoprojects.com/api/my-cart')
      .then((response) => {
        console.log(response.data.result);
        setCartProductData(response.data.result);
      })
      .catch(error => {
        console.error('Error making Post request:', error);
      })
  }

  useEffect(() => {
    fetchOrderSummary();
  }, [])

  const handleSameBillAddress = () => {
    setDiffBillAdd(false);
    setStoreBillAdd({id:storeAddress.id,
      country:storeAddress.country,
      full_name:storeAddress.full_name,
      address:storeAddress.address,
      address2:storeAddress.address2,
      city:storeAddress.city,
      state:storeAddress.state,
      postcode:storeAddress.postcode,
      phone:storeAddress.mobile,})
  }
 console.log(storeBillAdd)
  return (
    <>
      <Container fluid className=" my-5">
        <Row className=" d-flex justify-content-between mx-3">

          <Col className="addressSummaryConatiner col-sm-12">

            <Row className="d-flex align-items-center justify-content-between">
              <Col className="text-center text-sm-start">
                <p className="fw-bold fs-3">Payment</p>
              </Col>
            </Row>
            <hr className="mt-3 mt-sm-0" />

            <Row>
              <Col className=" col-12 col-md-7 mt-2 mb-2 d-flex flex-column gap-3">
                <div className=" fw-bold fs-5 text-secondary ">
                  Delivery Address
                </div>
                {storeAddress &&
                <div className=" d-flex flex-column justify-content-center p-4 border border-1 border-secondary rounded-3 ">
                  <span className=" fw-bold ">{storeAddress.full_name}</span>
                  <span>{storeAddress.address}, {storeAddress.address2 === null ?(""): (`${storeAddress.address2},`)} {storeAddress.city}, {storeAddress.state}, {storeAddress.country}, {storeAddress.postcode}</span>
                  <span className=" fw-bold ">Phone Number : <span className=" fw-normal ">{storeAddress.mobile}</span></span>
                </div>
                }

                <div className="d-flex align-items-baseline justify-content-end ">
                  <button
                    className="editadd text-primary fw-bold d-flex align-items-center justify-content-end"
                    onClick={() => {
                      navigate('/checkout/address')
                    }}>
                    Change address
                  </button>
                </div>
              </Col>
              <Col className=" col-5 px-4 " style={{borderLeft:"2px solid #f5f5fc"}}>
                <Row className=" fw-bold fs-5 text-secondary ">
                  Delivery Method
                </Row>
                <Row>
                  <Form.Check
                      type="radio"
                      name="delivery_method"
                      id="standard"
                      className=" p-0 mt-3"
                      checked={deliveryTypeId === 1}
                      onChange={ () => setDeliveryTypeId(1)}
                  />
                  <span className=" fw-bold fs-6">Standard</span>
                  <span style={{fontSize:"14px"}}>{cartProductData && cartProductData.standard_expected_delivery}</span>
                  <Form.Check
                      type="radio"
                      name="delivery_method"
                      id="express"
                      className=" p-0 mt-3"
                      onChange={ () => setDeliveryTypeId(2)}
                  />
                  <span className=" fw-bold fs-6">Express</span>
                  <span style={{fontSize:"14px"}}>{cartProductData && cartProductData.express_expected_delivery}</span>
                  <Form.Check
                      type="radio"
                      name="delivery_method"
                      id="express"
                      className=" p-0 mt-3"
                  />
                  <span className=" fw-bold fs-6">FASTFOX</span>
                </Row>
              </Col>
            </Row>

            <Row>
              <div className=" fs-5 fw-bold text-secondary mb-3">
                Item Details({ cartProductData && cartProductData.user_cart && cartProductData.user_cart.length})
              </div>
              <hr/>
              <div className="d-flex flex-wrap justify-content-start align-items-center gap-4 ">
              {cartProductData && cartProductData.user_cart && cartProductData.user_cart.map((d) => (
                <Col key={d.id} className=" col-2">
                <div>
                    <Image src={d.product_info.product_images[0] && d.product_info.product_images[0].product_image_url} className="productimages img-fluid rounded-4 "/>
                    <div className=" d-flex align-items-center gap-3 mt-3">
                    <span className=" fw-bold fs-5"><sup>$</sup>{Math.floor(d.product_variation_id === null ?  
                        d.product_info.sale_price : 
                        d.product_info.product_variation_detail && d.product_info.product_variation_detail[0].sale_price)}</span>
                    <span className=" small text-decoration-line-through">${Math.floor(d.product_variation_id === null ?  
                        d.product_info.main_rrp : 
                        d.product_info.product_variation_detail && d.product_info.product_variation_detail[0].rrp)}</span>
                    </div>
                    <div>
                      <span className=" fw-semibold text-secondary ">Quantity:</span>
                      <span className=" fw-bold "> {d.quantity}</span>
                    </div>
                </div>
                </Col>
              ))}
              </div>
            </Row>
            <Row>
              <div className=" fw-bold fs-4 mt-5 mb-3">
                Payment Method
              </div>
              <Col>
              <div className=" p-3 rounded-4"
                style={{border:"1.5px solid #f5f5fc"}}>
                      <Form className='d-flex flex-column gap-3'>
                        <Form.Group>
                          <Form.Label>Name on Card<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="card_holder_name" 
                            name="card_holder_name"
                            className='signupemail rounded-5 w-100 px-3 py-2'/>                      
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Card Number<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="card_number" 
                            name="card_number"
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                        </Form.Group>
                        <div className=" d-flex justify-content-between align-items-center gap-1">
                        <Form.Group className="col-4">
                          <Form.Label>Month<span className=" text-danger ">*</span></Form.Label>
                          <Form.Select
                            className='signupemail rounded-5 w-100 px-3 py-2 '>
                              <option value="" disabled selected hidden>Select...</option>
                            {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                              <option value={i} key={i}>{i}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-4">
                          <Form.Label>Year<span className=" text-danger ">*</span></Form.Label>
                          <Form.Select 
                            className='signupemail rounded-5 w-100 px-3 py-2 '>
                              <option value="" disabled selected hidden>Select...</option>
                            {[24,25,26,27,28,29,30,31,32,33,34].map((i) => (
                              <option value={`20${i}`} key={i}>20{i}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-4">
                          <Form.Label>CVV<span className=" text-danger ">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            id="cvv" 
                            name="cvv"
                            className='signupemail rounded-5 w-100 px-3 py-2'/>
                        </Form.Group>
                        </div>
                      </Form>
                    </div>
              </Col>
            </Row>
            <Row className=" d-flex flex-column gap-3 ">
              <div className=" fw-bold fs-4 mt-5 ">
                Billing Address
              </div>
              <hr/>
              <Col className=" d-flex gap-3 ">
                <Form.Check
                    type="radio"
                    name="billing_address"
                    id="same_billing_address"
                    onChange={handleSameBillAddress}
                />
                <span>Same as Delivery Address</span>
              </Col>
              <Col className=" d-flex gap-3 ">
                <Form.Check
                    type="radio"
                    name="billing_address"
                    id="different_billing_address"
                    onChange={() => {setDiffBillAdd(""); setDiffBillAdd(true)}}
                />
                <span>Use Different Address</span>
              </Col>
              {diffBillAdd &&
              <Col>
              <div className=" p-3 rounded-4"
                style={{border:"1.5px solid #f5f5fc"}}>
                <Form  className='d-flex flex-column gap-4'>
                  <div className=" d-flex gap-4">
                    <Form.Group style={{width:"50%"}}>
                      <Form.Label>Country/Region<span className=" text-danger ">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        id="country" 
                        name="country"
                        onChange={(e) => 
                          {const country = e.target.value ;
                            setDiffBillAdd({country :country})}}
                        className='signupemail rounded-5 w-100 px-3 py-2'/>
                    </Form.Group>
                    <Form.Group style={{width:"50%"}}>
                      <Form.Label>Full Name<span className=" text-danger ">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        id="full_name" 
                        name="full_name"
                        className='signupemail rounded-5 w-100 px-3 py-2'/>
                    </Form.Group>
                  </div>
                  <div className=" d-flex gap-4">
                    <Form.Group style={{width:"50%"}}>
                      <Form.Label>Address<span className=" text-danger ">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        id="address" 
                        name="address"
                        className='signupemail rounded-5 w-100 px-3 py-2'/>
                    </Form.Group>
                    <Form.Group style={{width:"50%"}}>
                      <Form.Label>Apartment,Suite,etc.</Form.Label>
                      <Form.Control 
                        type="text" 
                        id="address2" 
                        name="address2"
                        className='signupemail rounded-5 w-100 px-3 py-2'/>
                    </Form.Group>
                  </div>
                  <div className=" d-flex gap-4">
                    <Form.Group style={{width:"50%"}}>
                      <Form.Label>State<span className=" text-danger ">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        id="state" 
                        name="state"
                        className='signupemail rounded-5 w-100 px-3 py-2'/>
                    </Form.Group>
                    <Form.Group style={{width:"50%"}}>
                      <Form.Label>City<span className=" text-danger ">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        id="city" 
                        name="city"
                        className='signupemail rounded-5 w-100 px-3 py-2'/>
                    </Form.Group>
                  </div>
                  <div className=" d-flex gap-4">
                    <Form.Group style={{width:"50%"}}>
                      <Form.Label>Postcode<span className=" text-danger ">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        id="postcode" 
                        name="postcode"
                        className='signupemail rounded-5 w-100 px-3 py-2'/>
                    </Form.Group>
                    <Form.Group style={{width:"50%"}}>
                      <Form.Label>Phone<span className=" text-danger ">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        id="phone" 
                        name="phone"
                        className='signupemail rounded-5 w-100 px-3 py-2'/>
                    </Form.Group>
                  </div>
                </Form>
                </div>
              </Col>
              }
            </Row>
          </Col>

          <Col className="orderSummaryContainer">
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <Card.Text>
                <hr className=" m-0 "/>
                <div className=" d-flex flex-column gap-3 py-3">
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Item(s) total:</div>
                    <div>${cartProductData.cart_total}</div>
                </div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Item(s) discount:</div>
                    <div className=" text-primary">-${cartProductData.product_discount_total}</div>
                </div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Subtotal:</div>
                    <div>${cartProductData.product_sub_total}</div>
                </div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Delivery:</div>
                    <div className=" text-success ">FREE</div>
                </div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Taxes:</div>
                    <div className="">$0.00</div>
                </div>
                </div>
                <hr className=" m-0 "/>
                <div className=" d-flex justify-content-between align-items-center mt-3 mb-3 fw-bold ">
                    <div>Total:</div>
                    <div>${cartProductData.grand_total}</div>
                </div>
                <hr className=" m-0 "/>
                <div className=" d-flex justify-content-between align-items-center mt-3 mb-3 fw-bold ">
                    <div className=" text-primary "> Grand Total:</div>
                    <div className=" text-primary ">${cartProductData.grand_total}</div>
                </div>
                <hr className=" m-0 "/>
                <Button variant="primary" className=" w-100 rounded-5 mt-3"
                  onClick={() => navigate("/checkout/address")}>
                  Pay Now
                </Button>
              </Card.Text>
            </Card.Body>
        </Card>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Payment
