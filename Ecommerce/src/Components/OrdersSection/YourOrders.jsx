import { Col, Container, Image, Row, Spinner } from "react-bootstrap"
import SingleProductTitle from "../ProductSection/SingleProductTitle"
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import axios from "axios";
import NoProduct from "../ProductNotFoundPage/NoProduct";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import "./yourorders.scss";

function YourOrders() {

    const filterData = [
        {
          id: 1,
          title: "Period",
          key: "period",
          data: [
            { id: 1, title: "2024", slug: "2024" },
            { id: 2, title: "2023", slug: "2023" },
            { id: 3, title: "2022", slug: "2022" },
            { id: 4, title: "2021", slug: "2021" },
            { id: 5, title: "2020", slug: "2020" },
            { id: 6, title: "Older", slug: "older" },
          ],
        },
        {
          id: 2,
          title: "Type",
          key: "type",
          data: [
            { id: 1, title: "All orders", slug: "" },
            { id: 2, title: "On the way", slug: "out_for_delivery" },
            { id: 3, title: "Delivered", slug: "delivered" },
            { id: 4, title: "Cancelled", slug: "order_cancel" },
            { id: 5, title: "Returned", slug: "return_request" },
          ],
        },
      ];

      const[storeOrderDetail,setStoreOrderDetail] = useState([]);
      const[selectedPeriod,setSelectedPeriod] = useState("");
      const[selectedType,setSelectedType] = useState("");
      const[loading,isLoading] = useState(false);
      const navigate = useNavigate();

      const handlePeriodSelect = (e) => {
        setSelectedPeriod(e.target.value)
      }

      const handleTypeSelect = (e) => {
        setSelectedType(e.target.value)
      }

    const fetchYourOrder = async () => {
      isLoading(true);
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
      await axios.post(' https://bargainfox-dev.concettoprojects.com/api/my-order-list',{
        order_type: selectedType,
        period: selectedPeriod
      })
        .then((response) => {
          // console.log(response.data.result.data);
          setStoreOrderDetail(response.data.result.data);
          isLoading(false);
        })
        .catch(error => {
          console.error('Error making Post request:', error);
        })
    }
  
    useEffect(() => {
      fetchYourOrder();
    }, [selectedPeriod,selectedType])

    const handleCancelOrder = async(order_id) =>{
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
      await axios.post(' https://bargainfox-dev.concettoprojects.com/api/order-cancel',{
        order_detail_id: order_id
      }).then((response) => {
        console.log(response);
        if(response.data.status === 200){
          toast.success(`Order Cancelled successfully`);
        }
      })
      .catch(error => {
        console.error('Error making Post request:', error);
      })
    }

    // console.log(selectedPeriod,selectedType);

  return (
    <>
      {/* BreadCrumb */}
      <Container fluid className="orderBreadcrumb d-none d-md-block ">
          <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-start ">
              <li className="breadcrumb-item">
                  <a href="/" className=" text-decoration-none text-secondary">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page"> &gt; &nbsp; Your Orders</li>
            </ol>
          </nav>
      </Container>

      <Container fluid className="ordercontainer">

        <Row className="orderheading mb-2 d-flex flex-md-row flex-column justify-content-between align-items-md-center ">
            <Col className="d-flex align-items-center justify-content-between col-md-4 col-6">
                <h3 className="yprofile pb-md-0">Your Orders</h3>
            </Col>
            <Col className=" d-flex mx-sm-3 mx-0 justify-content-md-end justify-content-start align-items-baseline col-md-6 col-11">
            <Form className="orderfiltercontainer d-flex gap-3 ">
                <Form.Group className="orderfilter d-flex align-items-center border border-1 border-secondary rounded-5 py-1 ">
                    <Form.Label htmlFor="select_period" className=" fw-semibold text-secondary fs-6 m-0 ">Period: </Form.Label>
                    <Form.Select
                      id="select_period"
                      onChange={(e) => handlePeriodSelect(e)}
                      className=' border-0 rounded-5'
                      style={{width: "114px", padding: "0 0 0 10px"}}
                      defaultValue="">
                        <option value="" disabled hidden>Select... </option>
                        {filterData[0].data.map((d) => (
                          <option value={d.slug} key={d.id}>
                            {d.title}
                          </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="orderfilter d-flex align-items-center border border-1 border-secondary rounded-5 py-1 ">
                    <Form.Label htmlFor="select_type" className=" fw-semibold text-secondary fs-6 m-0 ">Type: </Form.Label>
                    <Form.Select
                      id="select_type"
                      onChange={(e) => handleTypeSelect(e)}
                      className=' border-0 rounded-5 '
                      style={{width: "130px", padding: "0 0 0 10px"}}>
                      {filterData[1].data.map((d) => (
                        <option value={d.slug} key={d.id}>{d.title}</option>
                      ))}
                    </Form.Select>
                </Form.Group>
            </Form>
            </Col>
        </Row>

        <Row className=" mb-5">
          {loading ? 
            <div className=" d-flex justify-content-center align-items-center ">
              <Spinner animation="border" variant='primary' size='lg'/>
            </div> :
            <>
            {storeOrderDetail.map((d,i) => (
            <div key={i} className=" py-1 border-bottom d-flex flex-column ">
                <div className=" mb-3 ">
                    Order #: <b>{d.sub_order_number}</b>
                </div>
                <div className="orderitemcontainer">
                  <div className="orderimgtitle col-8 ">
                    <div className="orderitemimgcontainer col-2" 
                      style={{cursor:"pointer"}}
                      onClick={() => navigate(`/orders/${d.sub_order_number}/${d.id}`)}>
                        <Image src={d.product_info.product_images[0].product_image_url} className="orderitemimg img-fluid rounded-4 "/>
                    </div>
                    <div className=" col-lg-8 d-flex flex-column gap-2">
                        <div className="orderitemtitle"
                          style={{cursor:"pointer"}}
                          onClick={() => navigate(`/orders/${d.sub_order_number}/${d.id}`)}>
                                <SingleProductTitle name={d.product_info.name}/>
                        </div>
                        <div className=" fw-bold fs-5"><sup>$</sup>{d.product_variation_id === null ? d.product_info.sale_price : d.product_info.product_variation_detail[0].sale_price}</div>
                        <div className=" d-flex gap-3 ">
                            {d.product_info && d.product_info.product_variation_detail && d.product_info.product_variation_detail !== null &&
                            (d.product_info && d.product_info.product_variation_detail && d.product_info.product_variation_detail.map((pv,i) => (
                            <div key={i}>
                                <span className=" fw-semibold text-secondary ">{pv.variation_type}: </span> 
                                {pv.variation_name}
                            </div>
                            )))}
                            <div>
                                <span className=" fw-semibold text-secondary ">Quantity:</span> {d.quantity}
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="orderitemstatus col-2 ">
                    <div className="orderstatus">{d.order_status.name}</div>
                    {d.is_cancel_enabled === true &&
                    <button className="cancelbtn border-1 rounded-5 px-2 bg-transparent d-flex align-items-center "
                      onClick={() => handleCancelOrder(d.order_id)}>
                      <div className="bi bi-x text-primary" style={{fontSize:"21px", height:"30px", fontWeight:"bold"}}></div>
                      <div className="fw-medium fst-normal ">Cancel Order</div>
                    </button>
                    }
                  </div>
                </div>
            </div>
            ))}
            {storeOrderDetail.length <=0 && 
              <Col className=" d-flex justify-content-center productlistsec">
                <NoProduct heading={'No order found'} 
                   desc={`Looks like you haven't your order yet.`}/>
              </Col>
            }
            </>
          }
        </Row>

        </Container>
    </>
  )
}

export default YourOrders
