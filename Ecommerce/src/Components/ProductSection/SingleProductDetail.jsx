import { Col, Container,Row } from "react-bootstrap"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./singleproductdetail.scss"
import Star from "../ProductCard/Star";
import ImageAndThumbnail from "./ImageAndThumbnail";
import main from "../../assets/main.png"
import SingleProductTitle from "./SingleProductTitle";
import Share from "./Share";
import VenderName from "./VenderName";
import SingleProductPrice from "./SingleProductPrice";
import OtherSeller from "./OtherSeller";
import SingleProductColor from "./SingleProductColor.jsx"
import SingleProductSize from "./SingleProductSize.jsx";
import SingleProductQuantity from "./SingleProductQuantity.jsx";
import SingleProductDeliveryinfo from "./SingleProductDeliveryinfo.jsx";
import SingleProductStockInfo from "./SingleProductStockInfo.jsx";
import SingleProductCartBtn from "./SingleProductCartBtn.jsx";
import SingleProductDeliveryTime from "./SingleProductDeliveryTime.jsx";
import SingleProductHighlight from "./SingleProductHighlight.jsx";
import SingleProductReview from "./SingleProductReview.jsx";

function SingleProductDetail() {

    const data = [

        {
            img1 : main,
            title:`Women's Blouse Solid Simple Long Sleeve V Neck Button Blouse`,
            vender:`Celby Store`,
            color : [`#F76F3D`,`#000000`,`#327E07`,`#1B3497`],
            size: [`XS`,`S`,`M`,`L`,`XL`,'XXL'],
        },
        {
            img1 : main
        },
        {
            img1 : main 
        },
        {
            img1 : main
        },
        {
            img1 : main 
        },
        {
            img1 : main 
        },
      ]

  return (
    <>
        <Container fluid id="productdetailcontainer">

            <Row className="productimageanddetail py-lg-4 py-2">

                <Col className="border-bottom pb-3 ">
                    <ImageAndThumbnail data={data}/>
                </Col>

                <Col className="d-flex flex-column gap-3 border-bottom pb-3 ">

                    <Row className="productmaintitle">
                        <SingleProductTitle data={data[0]}/>
                        <Share/>
                    </Row>
                    <Row className="starandvender">
                        <Col className="d-flex col-6">
                            <Star/>
                        </Col>
                        <Col className=" col-6 text-md-end text-start ">
                            <VenderName data={data[0]}/>
                        </Col>
                    </Row>
                    <Row className="priceseller">
                        <Col >
                            <SingleProductPrice/>
                        </Col>
                        <Col className="otherseller">
                            <OtherSeller/>
                        </Col>
                    </Row>
                    <Row>
                        <SingleProductColor data={data[0]}/>
                    </Row>
                    <Row>
                        <SingleProductSize data={data[0]}/>
                    </Row>
                    <Row>
                        <SingleProductQuantity/>
                    </Row>
                    <Row className=" d-flex d-md-none ">
                        <SingleProductStockInfo/>
                    </Row>
                    <Row className=" d-flex d-md-none ">
                        <SingleProductCartBtn/>
                    </Row>
                    <Row className=" border-top border-bottom">
                        <SingleProductDeliveryinfo/>
                    </Row>
                    <Row className=" d-none d-md-flex ">
                        <SingleProductStockInfo/>
                    </Row>
                    <Row className=" d-none d-md-flex ">
                        <SingleProductCartBtn/>
                    </Row>
                    <Row>
                        <SingleProductDeliveryTime/>
                    </Row>
                </Col>

            </Row>


            <Row className="d-block d-lg-flex flex-lg-row-reverse">

                <SingleProductHighlight/>

                <SingleProductReview/>

            </Row>

        </Container> 
    </>
  )
}

export default SingleProductDetail
