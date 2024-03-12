import { Button, Col, Container, Image, Row } from "react-bootstrap"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./singleproductdetail.scss"
import deliveryvan from "../../assets/deliveryvan.png"
import warranty from "../../assets/warranty.png"
import returntimer from "../../assets/returntimer.png"
import Star from "../ProductCard/Star";
import ImageAndThumbnail from "./ImageAndThumbnail";
import main from "../../assets/main.png"
import SingleProductTitle from "./SingleProductTitle";
import Share from "./Share";
import VenderName from "./VenderName";

function SingleProductDetail() {

    const data = [

        {
            img1 : main,
            title:`Women's Blouse Solid Simple Long Sleeve V Neck Button Blouse`,
            vender:`Celby Store`
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
            <Row className="productimageanddetail py-lg-5 py-2">
                <Col className="border-bottom pb-3 ">
                    <ImageAndThumbnail data={data}/>
                </Col>

                <Col className="d-flex flex-column gap-3 border-bottom pb-3 ">

                    <Row>
                        <SingleProductTitle data={data[0]}/>
                        <Share/>
                    </Row>
                <Row>
                    <Col className="d-flex col-6">
                        <Star/>
                    </Col>
                    <Col className=" col-6 text-end ">
                        <VenderName data={data[0]}/>
                    </Col>
                </Row>
                <Row>
                    <Col className=" d-flex align-items-center gap-3 ">
                        <div className=" fs-4 fw-bold "><sup>$</sup>12</div>
                        <div className=" text-decoration-line-through ">$38.98</div>
                        <div className=" bg-primary small text-light rounded-5 text-center p-1 ">65% off</div>
                    </Col>
                    {/* <Col className="d-flex justify-content-end align-items-center ">
                        <div className=" small">
                            View this product from other sellers
                        </div>
                    </Col> */}
                </Row>
                <Row>
                    <div>Color: Orange</div>
                    <div className=" d-flex gap-2 mt-2 "> 
                        <Button className=" col-1 rounded-2" style={{backgroundColor:"#f76c3e"}}>&nbsp;</Button>
                        <Button className=" bg-dark col-1 rounded-2">&nbsp;</Button>
                        <Button className=" bg-success  col-1 rounded-2">&nbsp;</Button>
                        <Button className=" bg-primary col-1 rounded-2">&nbsp;</Button>
                    </div>
                </Row>
                <Row>
                    <div className=" d-lg-flex  gap-2 align-items-center ">Size:
                        <button className=" text-secondary text-dark border-secondary rounded-4 px-3 bg-light ">XS</button>
                        <button className=" text-secondary text-dark border-secondary rounded-4 px-3 bg-light ">S</button>
                        <button className=" text-secondary text-dark border-secondary rounded-4 px-3 bg-light ">M</button>
                        <button className=" text-secondary text-dark border-secondary rounded-4 px-3 bg-light ">L</button>
                        <button className=" text-secondary text-dark border-secondary rounded-4 px-3 bg-light ">XL</button>
                        <button className=" text-secondary text-dark border-secondary rounded-4 px-3 bg-light ">XXL</button>
                    </div>
                    <div className=" mt-2 small ">Size Guide</div>
                </Row>
                <Row>
                    <div className=" text-secondary d-flex gap-2 ">
                        Quantity:
                    </div>
                </Row>
                <Row className=" border-top border-bottom">
                    <div className=" my-3 d-flex flex-column flex-lg-row justify-content-center align-items-center ">
                    <Col className=" col-md-4 col-12 mb-3 mb-md-0 d-flex flex-column justify-content-center align-items-center ">
                        <Row>
                            <div><Image src={deliveryvan} className=" img-fluid"/></div>
                        </Row>
                        <Row>
                            <span className="small text-center mt-2 ">Free delivery on orders over £50. Read More</span>
                        </Row>
                    </Col>
                    <Col className=" col-md-4 col-12 mb-3 mb-md-0 d-flex flex-column justify-content-center align-items-center ">
                        <Row>
                            <div><Image src={returntimer} className=" img-fluid"/></div>
                        </Row>
                        <Row>
                            <span className="small text-center mt-2 ">Free 45 day returns. Read More</span>
                        </Row>
                    </Col>
                    <Col className=" col-md-4 col-12 mb-1 mb-md-0 d-flex flex-column justify-content-center align-items-center ">
                        <Row>
                            <div><Image src={warranty} className=" img-fluid"/></div>
                        </Row>
                        <Row>
                            <span className="small text-center mt-2">6 month warranty with the Bargain Fox. Read More</span>
                        </Row>
                    </Col>
                    </div>
                </Row>
                <Row>
                    <div className="mb-2 d-block d-md-flex justify-content-between ">
                        <div>
                            <span className=" text-danger fw-bold ">HURRY, THERE ARE ONLY 6 ITEM(S) LEFT!</span>
                        </div>
                        <div>
                            <span><i className="bi bi-people"></i></span>
                            <span>People looking at this product</span>
                        </div>
                    </div>
                    <Col className=" col-6 ">
                        <Button className=" bg-primary text-light rounded-5 w-100 ">Add to cart</Button>
                    </Col>
                    <Col className=" col-6 ">
                        <Button className=" bg-primary text-light rounded-5 w-100 ">Add to cart</Button>
                    </Col>
                </Row>
                <Row>
                    <div className=" mt-2 small ">Order within 2h 25m and choose Express Shipping to get it by Tuesday 25/7/2023</div>
                </Row>
            </Col>

            </Row>


            <Row className="d-block d-lg-flex flex-lg-row-reverse">

            <Col className="col-lg-6 col-md-12 d-flex flex-column gap-3">
                    <Row>
                        <div className=" fw-bold fs-6 ">Highlight</div>
                    </Row>

                    <Row>
                        <div>
                            <i className="bi bi-check"></i>
                            80+ Customers bought this item
                        </div>
                    </Row>

                    <Row className=" border-top py-2">
                        <div className=" fw-bold ">Product Description</div>
                        <div className=" px-2 ">
                        <ul className=" small">
                            <li>Stylish design: Fashionable lapel coat with a solid color that will never go out of style</li>
                            <li>Versatile: Perfect for fall and winter, suitable for both casual and formal occasions</li>
                            <li>Comfortable: Made of high-quality materials that are soft and cozy to wear</li>
                            <li>Easy to match: V-neck design makes it easy to match with different outfits</li>
                        </ul>
                        </div>
                    </Row>
                </Col>

                <Col className="col-lg-6 col-md-12 d-flex flex-column gap-3">
                    <Row>
                        <div className=" fw-bold fs-6 ">Customer Reviews</div>
                    </Row>

                    <Row>
                        <Col className="d-flex flex-column gap-3" id="review">
                            <Row>
                                <span className=" fw-bold fs-1 text-center ">0</span>
                            </Row>
                            <Row>
                                <Star/>
                            </Row>
                            <Row>
                                <span className=" text-center ">0 Ratings & Review</span>
                            </Row>
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>

                    <Row className="d-flex border-top border-bottom py-2 ">
                        <Col className="col-6">
                            <Star/>
                        </Col>
                        <Col className=" fw-bold text-end ">
                            Rate This Product
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Container> 
    </>
  )
}

export default SingleProductDetail
