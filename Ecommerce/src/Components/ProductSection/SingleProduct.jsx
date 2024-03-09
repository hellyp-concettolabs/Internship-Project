import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import main from "../../assets/main.png"
import "../ProductSection/singleproduct.scss"
import deliveryvan from "../../assets/deliveryvan.png"
import warranty from "../../assets/warranty.png"
import returntimer from "../../assets/returntimer.png"
import Star from "../ProductCard/Star";

function SingleProduct() {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
  
    useEffect(() => {
  
      setNav1(slider1);
      setNav2(slider2);
  
    });

const data = [

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
    {
        img1 : main 
    },
]

const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    vertical: true,
    // verticalSwiping: true,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows:false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    //centerPadding: '10px',
    infinite : true,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <>
        <Container fluid id="productdetailcontainer">
            <Row className=" py-lg-5 py-2 d-block d-lg-flex ">

            <Col className=" col-lg-6 col-md-12 border-bottom pb-3 ">
                <Row className="slider-wrapper d-flex flex-row-reverse ">
                    <Col className=" bg-body-secondary col-10 ">
                    <Slider {...settingsMain} asNavFor={nav2} ref={slider => (setSlider1(slider))}>
                        {data.map((slide,id) =>
                            <div className="slick-slide" key={id}>
                                <Image className="slick-slide-image img-fluid w-100 " src={slide.img1} />
                            </div>
                    )}
                    </Slider>
                    </Col>
                    <Col className="thumbnail-slider-wrap col-2">
                    <Slider {...settingsThumbs} asNavFor={nav1} ref={slider => (setSlider2(slider))}>
                        {data.map((slide,id) =>
                            <div className="slick-slide" key={id}>
                                <Image className="slick-slide-image img-fluid " src={slide.img1} />
                            </div>
                        )}
                    </Slider>
                    </Col>
                </Row>
            </Col>

            <Col className=" col-lg-6 col-md-12 d-flex flex-column gap-3 border-bottom pb-3 ">
                <Row>
                    <Col className=" col-11 ">
                            <span className=" fw-bold fs-5">Women&#39;s Blouse Solid Simple Long Sleeve V Neck Button Blouse</span>
                    </Col>
                    <Col className=" col-1 align-items-center">
                            <div className="">
                                <i className="bi bi-box-arrow-up-right img-fluid "></i>
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col className=" col-6">
                        <div className=" d-flex gap-2 ">
                            <i className="bi bi-star img-fluid "></i>
                            <i className="bi bi-star img-fluid "></i>
                            <i className="bi bi-star img-fluid "></i>
                            <i className="bi bi-star img-fluid "></i>
                            <i className="bi bi-star img-fluid "></i>
                        </div>
                    </Col>
                    <Col className=" col-6 text-end ">
                        <span className=" text-secondary ">374 sold, by <b className=" text-dark ">Celby Store</b></span>
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

                    <Row className=" border-top border-bottom py-2 ">
                        <Col className=" d-flex gap-2 ">
                            <i className="bi bi-star img-fluid "></i>
                            <i className="bi bi-star img-fluid "></i>
                            <i className="bi bi-star img-fluid "></i>
                            <i className="bi bi-star img-fluid "></i>
                            <i className="bi bi-star img-fluid "></i>
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

export default SingleProduct
