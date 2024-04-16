import { Col, Container,Row } from "react-bootstrap"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./singleproductdetail.scss"
import Star from "../ProductCard/Star";
import ImageAndThumbnail from "./ImageAndThumbnail";
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
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleProductCondition from "./SingleProductCondition.jsx";

function SingleProductDetail() {

      const[productData,setProductData] = useState({});
      const{sku , unique_id} = useParams();

      const fetchData = async() =>{
        await axios.get(` https://bargainfox-dev.concettoprojects.com/api/product/detail/${sku}/${unique_id}`)
        .then(response =>{
            setProductData(response.data.result)
        })
        .catch(error =>{
            console.error('Error making GET request:', error);
          })
      }
      useEffect(() => {
        fetchData(); 
      },[])
console.log(productData)
  return (
    <>
        <Container fluid id="productdetailcontainer">

            <Row className="productimageanddetail py-lg-4 py-2">

                <Col className="border-bottom pb-3 ">
                    <ImageAndThumbnail productImage={productData.product_images}/>
                </Col>

                <Col className="d-flex flex-column gap-3 border-bottom pb-3 ">

                    <Row className="productmaintitle">
                        <SingleProductTitle name={productData.name}/>
                        <Share/>
                    </Row>
                    <Row className="starandvender">
                        <Col className="d-flex col-6">
                            <Star/>
                        </Col>
                        <Col className=" col-6 text-md-end text-start ">
                            <VenderName venderName={productData.vendor_info}/>
                        </Col>
                    </Row>
                    <Row className="priceseller">
                        <Col >
                            <SingleProductPrice 
                                productSalePrice={productData.sale_price}
                                productprice={productData.main_rrp}
                                productDiscount={productData.discount_percentage}/>
                        </Col>
                        <Col className="otherseller">
                            <OtherSeller/>
                        </Col>
                    </Row>
                    <Row>
                        <SingleProductCondition productCondition = {productData.product_condition}/>
                    </Row>
                    {productData.color != "" &&
                        <Row>
                                <SingleProductColor productColor={productData.color}/>
                        </Row>
                    }
                    {productData.size != "" &&
                        <Row>
                                <SingleProductSize productSize={productData.size}/>
                        </Row>
                    }
                    <Row>
                        <SingleProductQuantity />
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
                    {productData.stock <= 15 &&
                    <Row className=" d-none d-md-flex ">
                        <SingleProductStockInfo productInStock={productData.stock}
                            productview={productData.product_view}/>
                    </Row>
                    }
                    <Row className=" d-none d-md-flex ">
                        <SingleProductCartBtn/>
                    </Row>
                    <Row>
                        {productData.expected_delivery &&
                            <SingleProductDeliveryTime productDeliveryTime={productData.expected_delivery}/>
                        }
                    </Row>
                </Col>

            </Row>


            <Row className="d-block d-lg-flex flex-lg-row-reverse">

                <SingleProductHighlight productPurchaseCount={productData.purchase_count}
                    productDescription={productData.description}/>

                <SingleProductReview/>

            </Row>

        </Container> 
    </>
  )
}

export default SingleProductDetail
