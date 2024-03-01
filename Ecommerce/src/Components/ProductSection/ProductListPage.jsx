import { Col, Container, Form, FormControl, Row } from "react-bootstrap"
import CheckboxCard from "./CheckboxCard"
import WomenProductList from "./WomenProductList"
import wp1 from "../../assets/wp1.png"
import "../ProductSection/productlist.scss"
function ProductListPage() {

    const conditions = [
        {
            cat:`Brand new`
        },
        {
            cat:'Open Box'
        },
        {
            cat:'Like New'
        },
        {
            cat:'Very Good'
        },
        {
            cat:'Good'
        },
        {
            cat:'Acceptable'
        }
    ]
    const discounts = [
        {
            dis:`90% off or more`
        },
        {
            dis:`80% off or more`
        },
        {
            dis:`70% off or more`
        },
        {
            dis:`60% off or more`
        },
        {
            dis:`50% off or more`
        },
        {
            dis:`40% off or more`
        },
    ]
    const prices = [
        {
            p:`Under $10`
        },
        {
            p:`$10-$25`
        },
        {
            p:`$25-$50`
        },
        {
            p:`$50-100`
        },
        {
            p:`Over $100`
        },
    ]
    const data =[
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `9.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            dicount:`50%`
        },
    ]
  return (
    <>
     <Container className=" p-0 ">
        <Row className=" mb-4 ">
            <span>Home &gt; Clothing &gt; Women</span>
        </Row>
        <Row>

            <Col className="className= col-3">
                <Row>
                    <div className=" text-secondary fw-bold fs-5">Filters</div>
                </Row>
                <Row className=" mt-3 ">
                    <div className=" border-bottom pb-2 fw-bold ">Condition</div>
                        <Col className=" mt-3 ">
                            <CheckboxCard conditions={conditions}/>
                        </Col>
                </Row>
                <Row className=" mt-3 ">
                    <div className=" border-bottom pb-2 fw-bold ">Discount</div>
                        <Col className=" mt-3 ">
                            <CheckboxCard discounts={discounts}/>
                        </Col>
                </Row>
                <Row className=" mt-3 ">
                    <div className=" border-bottom pb-2 fw-bold ">Price</div>
                        <Col className=" mt-3 ">
                            <CheckboxCard prices={prices}/>
                        </Col>
                </Row>            
            </Col>

            <Col className=" d-flex flex-column col-9">
                <Row className=" mb-3 justify-content-end  ">
                    <Col>
                        <div className=" fs-4 fw-bold ">Results</div>
                    </Col>
                    <Col className=" col-lg-4">
                           <Form>
                                <div className=" align-items-center d-flex rounded-5 border border-secondary p-1">
                                    <Form.Label className=" m-0 small fw-bold text-secondary text-center col-4">Sort By:</Form.Label>
                                    <div className="dropdown d-flex justify-content-center col-7">
                                        <FormControl type="text" placeholder="Select..." className="border-0 p-0" style={{ boxShadow:"none", cursor:"pointer"}} data-bs-toggle="dropdown" aria-expanded="false"/>
                                        <div className=" dropdown-toggle " data-bs-toggle="dropdown" style={{cursor:"pointer"}}></div>
                                        <ul className=" dropdown-menu Dropdownmenu">
                                        <li className=" dropdown-item ">Select...</li>
                                        <li className=" dropdown-item ">Lowest Price</li>
                                        <li className=" dropdown-item ">Highest Price</li>                       
                                        <li className=" dropdown-item ">Tops Customer Review</li>                       
                                        <li className=" dropdown-item ">Most Recent</li>                       
                                        </ul>
                                    </div>
                                </div>
                            </Form>
                    </Col>
                </Row>
                <Row>
                        <WomenProductList data={data}/>
                </Row>
            </Col>

        </Row>
    </Container> 
    </>
  )
}

export default ProductListPage
