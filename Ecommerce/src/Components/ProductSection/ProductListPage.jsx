import { Col, Container, Row } from "react-bootstrap"
import CheckboxCard from "./CheckboxCard"
import WomenProductList from "./WomenProductList"
import wp1 from "../../assets/wp1.png"
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
     <Container fluid className=" d-flex flex-row">
        <Container className=" col-3 ">
            <Col className="">
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
        </Container>
        <Container className=" col-9">
            <Col className=" d-flex flex-column">
                <Row className=" mb-3 ">
                    <div className=" fs-4 fw-bold ">Results</div>
                </Row>
                <Row>
                        <WomenProductList data={data}/>
                </Row>
            </Col>
        </Container>

    </Container> 
    </>
  )
}

export default ProductListPage
