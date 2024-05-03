import { Container, Image, Row } from "react-bootstrap"
import watch from "../../assets/watch.png"
import tablet from "../../assets/tablet.png"
import SingleProductTitle from "../ProductSection/SingleProductTitle"
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import axios from "axios";

function YourOrders() {

    const data = [
        {
            image : watch,
            title : 'watch',
            price : '20',
            quantity:'1'
        },
        {
            image : tablet,
            title : 'tablet',
            price : '30',
            color: 'black',
            quantity:'1'
        },
    ];

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

      const[selectedPeriod,setSelectedPeriod] = useState("");
      const[selectedType,setSelectedType] = useState("");

      const handlePeriodSelect = (e) => {
        setSelectedPeriod(e.target.value)
    }
      const handleTypeSelect = (e) => {
        setSelectedType(e.target.value)
    }
    const fetchYourOrder = async () => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
      await axios.post(' https://bargainfox-dev.concettoprojects.com/api/my-order-list')
        .then(() => {
          // console.log(response);
        })
        .catch(error => {
          console.error('Error making Post request:', error);
        })
    }
  
    useEffect(() => {
      fetchYourOrder();
    }, [])
      console.log(selectedPeriod,selectedType);
  return (
    <>
      {/* BreadCrumb */}
      <Container fluid className="profileBreadcrumb">
          <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-start ">
              <li className="breadcrumb-item">
                  <a href="/" className=" text-decoration-none text-secondary">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page"> &gt; &nbsp; Your Orders</li>
            </ol>
          </nav>
      </Container>
      <Container className=" ">

        <Row className=" mb-2 " style={{borderBottom:"3px solid #f5f5fc"}}>
            <div className="d-flex justify-content-between ">
                <h3 className="yprofile">Your Orders</h3>
            <div>
            <Form className=" d-flex gap-3 ">
                <Form.Group className=" d-flex align-items-center px-3 border border-1 border-secondary rounded-5 col-6">
                    <Form.Label className=" fw-semibold text-secondary fs-6 m-0 ">Period: </Form.Label>
                    <Form.Select
                      onChange={(e) => handlePeriodSelect(e)}
                      className=' border-0 rounded-5'>
                        <option value="" disabled selected hidden>Select... </option>
                      {filterData[0].data.map((d) => (
                        <option value={d.slug} key={d.id}>
                            {d.title}
                        </option>
                      ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className=" d-flex align-items-center px-3 border border-1 border-secondary rounded-5 col-6">
                    <Form.Label className=" fw-semibold text-secondary fs-6 m-0 ">Type: </Form.Label>
                    <Form.Select
                      onChange={(e) => handleTypeSelect(e)}
                      className=' border-0 rounded-5 '>
                      {filterData[1].data.map((d) => (
                        <option value={d.slug} key={d.id}>{d.title}</option>
                      ))}
                    </Form.Select>
                </Form.Group>
            </Form>
            </div>
            </div>
        </Row>

        <Row className=" mb-5">
            {data.map((d,i) => (
            <div key={i} className=" py-1 border-bottom d-flex flex-column ">
                <div className=" mb-3 ">
                    Order #:
                </div>
                <div className=" d-flex align-items-center gap-4 mb-3 ">
                    <div className="  col-sm-2 col-4" 
                     style={{height:"100px", width:"100px"}}>
                        <Image src={d.image} className=" img-fluid rounded-4 "/>
                    </div>
                    <div className=" col-lg-10 d-flex flex-column gap-2">
                        <div className="cartproducttitle">
                                <SingleProductTitle name={d.title}/>
                        </div>
                        <div className=" fw-bold fs-5"><sup>$</sup>{d.price}</div>
                        <div className=" d-flex gap-3 ">
                            {d.color &&
                            <div>
                                <span className=" fw-semibold text-secondary ">Color:</span> {d.color}
                            </div>
                            }
                            <div>
                                <span className=" fw-semibold text-secondary ">Quantity:</span> {d.quantity}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </Row>

        </Container>
    </>
  )
}

export default YourOrders
