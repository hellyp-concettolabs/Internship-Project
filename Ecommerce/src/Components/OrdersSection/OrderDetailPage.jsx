import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import SingleProductTitle from "../ProductSection/SingleProductTitle";
import download from "../../assets/download.svg"

function OrderDetailPage() {

    const{order_number,order_id} = useParams();
    const[orderDetail,setOrderDetail] = useState();
    const[storeAddress,setStoreAddress] = useState();
    const[loading,isLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [order_id]);

    const fetchOrderDetail = async () => {
        isLoading(true);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        await axios.get(`https://bargainfox-dev.concettoprojects.com/api/order-detail/${order_number}/${order_id}`)
          .then((response) => {
            setOrderDetail(response.data.result);
            setStoreAddress(JSON.parse(response.data.result.order_info.address));
            isLoading(false);
          })
          .catch(error => {
            console.error('Error making Get request:', error);
          })
      }
    
      useEffect(() => {
        fetchOrderDetail();
      },[order_id])

    //   console.log(orderDetail)

  return (
    <>

        {/* BreadCrumb */}
        <Container fluid className="profileBreadcrumb">
            <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
                <ol className="breadcrumb d-flex justify-content-start ">
                    <li className="breadcrumb-item">
                        <a href="/" className=" text-decoration-none text-secondary">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/orders" className=" text-decoration-none text-secondary">Your Orders</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page"> &gt; &nbsp; order#{orderDetail && orderDetail.sub_order_number}</li>
                </ol>
            </nav>
        </Container>

        <Container fluid style={{padding: "0.5rem 50px 3rem"}}>

            <Row className=" mb-2 d-flex justify-content-between" style={{borderBottom:"3px solid #f5f5fc"}}>
                <Col className="d-flex justify-content-between col-4 ">
                    <h4 className="yprofile">Order Details</h4>
                </Col>
            </Row>
            
            {loading ? 
            <div className=" d-flex justify-content-center align-items-center ">
              <Spinner animation="border" variant='primary' size='lg'/>
            </div> :
            (<>
            <Row className=" mb-2 pb-2 " style={{borderBottom:"3px solid #f5f5fc"}}>
                <Col className=" col-6 mt-2 mb-2 d-flex flex-column gap-3" 
                    style={{borderRight:"3px solid #f5f5fc"}}>
                    <div className=" fw-bold fs-5 text-secondary ">
                      Delivery Address
                    </div>
                    {storeAddress &&
                    <div className=" d-flex flex-column justify-content-center">
                      <span className=" fw-bold ">{storeAddress.full_name}</span>
                      <span>{storeAddress.address}, {storeAddress.address2 === null ?(""): 
                        (`${storeAddress.address2},`)} {storeAddress.city}, 
                        {storeAddress.state}, {storeAddress.country}, 
                        {storeAddress.postcode}</span>
                      <span className=" fw-bold ">Phone Number : <span className=" fw-normal ">{storeAddress.mobile}</span></span>
                    </div>
                    }
                </Col>
                <Col className=" col-6 mt-2 mb-2 d-flex flex-column gap-3 px-5">
                    <div className=" fw-bold fs-5 text-secondary ">
                      Actions
                    </div>
                    <div className=" d-flex gap-3 "
                        style={{cursor:"pointer"}}
                        onClick={() => navigate(orderDetail.invoice_url !== null ? orderDetail.invoice_url : '')}>
                        <Image src={download}/>
                        <span className=" text-primary fw-medium ">Download Invoice</span>
                    </div>
                </Col>
            </Row>

            <Row className=" mb-2 pb-2 " style={{borderBottom:"3px solid #f5f5fc"}}>
                <div className=" d-flex align-items-center gap-4 mb-3 mt-3 ">
                    <div className="  col-sm-2 col-4" 
                      style={{height:"100px", width:"100px",cursor:"pointer"}}
                      onClick={() => navigate(`/singleproduct/${orderDetail.product_info.slug}/${orderDetail.product_info.unique_id}/${orderDetail.product_info.sku}`)}
                    >
                        <Image src={orderDetail && orderDetail.product_info.product_images[0].product_image_url} className=" img-fluid rounded-4 "
                          style={{width:"100px", height:"100px"}}/>
                    </div>
                    <div className=" col-lg-8 d-flex flex-column gap-2">
                        <div className="cartproducttitle"
                          style={{cursor:"pointer"}}
                          onClick={() => navigate(`/orders/${orderDetail.product_info.slug}/${orderDetail.product_info.unique_id}/${orderDetail.product_info.sku}`)}
                        >
                            <SingleProductTitle name={orderDetail && orderDetail.product_info.name}/>
                        </div>
                        <div className=" d-flex align-items-center gap-3 ">
                            <div className=" fw-bold fs-5">
                                <sup>$</sup>{orderDetail && orderDetail.product_variation_id === null ? 
                                    orderDetail && orderDetail.product_info.sale_price : 
                                    orderDetail && orderDetail.product_info.product_variation_detail[0].sale_price}
                            </div>
                                {orderDetail && orderDetail.product_info && orderDetail.product_info.product_variation_detail && 
                                    orderDetail.product_info.product_variation_detail !== null &&
                                (orderDetail.product_info && orderDetail.product_info.product_variation_detail && 
                                    orderDetail.product_info.product_variation_detail.map((pv,i) => (
                                <div key={i}>
                                    <span className=" fw-semibold text-secondary ">{pv.variation_type}: </span> 
                                    {pv.variation_name}
                                </div>
                                )))}
                                <div>
                                    <span className=" fw-semibold text-secondary ">Quantity:</span> {orderDetail && orderDetail.quantity}
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            {orderDetail && orderDetail.other_product_order.length !== 0 &&
            <Row className=" mt-3 d-flex flex-column gap-3 ">
                <div className=" fw-bold fs-5 text-dark ">
                    Other Items in this order:
                </div>
                {orderDetail.other_product_order.map((op) =>(
                <div key={op.id}>
                <div className="  col-sm-2 col-4" 
                    style={{height:"120px", width:"120px",cursor:"pointer"}}
                    onClick={() => navigate(`/orders/${op.sub_order_number}/${op.id}`)}>
                    <Image src={op.product_info.product_images[0].product_image_url} className=" img-fluid rounded-4 "
                        style={{width:"100px", height:"100px"}}/>
                </div>
                <div className=" fw-bold fs-5"><sup>$</sup>{op.product_variation_id === null ? 
                    op.product_info.sale_price : 
                    op.product_info.product_variation_detail[0].sale_price}
                </div>
                </div>
                ))}
            </Row>
            }
            </>)}
        </Container>
      
    </>
  )
}

export default OrderDetailPage
