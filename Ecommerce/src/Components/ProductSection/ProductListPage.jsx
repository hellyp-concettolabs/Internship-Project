import { Col, Container, Row } from "react-bootstrap"
import ProductList from "./ProductsList.jsx"
import wp1 from "../../assets/wp1.png"
import "./productlistpage.scss"
import FilterSection from "./FilterSection"
function ProductListPage() {

    const data =[
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `9.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
        {
            img:wp1,
            title:`Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's... Clothing`,
            price: `8.25`,
            actualprice:`16.50`,
            discount:`50%`
        },
    ]
  return (
    <>
     <Container fluid className=" container-lg ">
        <Row className="">
            <span className="">Home &gt; Clothing &gt; Women</span>
        </Row>
        <Row className="productlistcontainer">
            <Col className="className= col-3 d-none d-lg-block">
                <FilterSection/>        
            </Col>

            <Col className=" d-flex flex-column col-lg-9 col-12">
                <ProductList data={data}/>
            </Col>

        </Row>
    </Container> 
    </>
  )
}

export default ProductListPage
