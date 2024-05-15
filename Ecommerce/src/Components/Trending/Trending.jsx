import { Col, Container, Row, Image} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import rightarrow from "../../assets/rightarrow.png";
import ProductCard from "../ProductCard/ProductCard";
import WishListBtn from "../WishList/WishListBtn";
import "../ElectronicsSection/electronics.scss"
import { Domain_Base_Url } from "../../app/DomainBaseUrl/BaseUrl";

function Trending() {

  const[trendingProduct,setTrendingProduct] = useState([]);
  
  useEffect(() => {
    axios.post(`${Domain_Base_Url}/trending-product`,{
      trending:true
    })
    .then(response =>{
      setTrendingProduct(response.data.result.data)
    })
    .catch((error) =>{
      console.error('Error making GET request for trending section:',error)
    })
  },[]);
  
  const sliderRef = useRef();
  
  const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      };

      const goToPrev = () => {
        sliderRef.current.slickPrev();
      };

      const goToNext = () => {
        sliderRef.current.slickNext();
      };

      const handleWishListChange = (productId, isWishListed) => {
        // Update the productData state based on productId and isWishListed
        setTrendingProduct((prevProductData) =>
          prevProductData.map((product) =>
            product.id === productId ? { ...product, is_wishlisted: isWishListed } : product
          )
        );
      };
  return (
    <>

    <Container className="gardencontainer">
      <div>
        <Row className="mb-3 mb-md-4 ">
          <Col className="d-flex align-items-center col-8 ">
            <h2 className="gardenheader">Trending on eCart</h2>
          </Col>
          <Col className="d-flex justify-content-md-end align-items-center gap-2 ">
            <span className="viewall ">View All</span>
            <Image src={rightarrow} className="img-fluid" />
          </Col>
        </Row>

        <Row className=" d-flex justify-content-center align-items-center ">
          <Col className="leftarrow">
            <div className=" p-0 w-100 h-100 d-flex justify-content-center align-items-center " style={{backgroundColor:"#F5F5FC", borderRadius:"50%", textAlign:"center"}}
              onClick={goToPrev}>
              <i className="bi bi-arrow-left-short" style={{ color: '#0036FF' }}></i>
            </div>
          </Col>
          <Col className="centerslider">
            <Slider ref={sliderRef} {...settings}>
                {trendingProduct.map((d) =>(
                  <div key={d.id}>
                    <div className="gardenlistwishlist">
                      <WishListBtn 
                      isWishList={d.is_wishlisted} 
                      d={d} 
                      id={d.id}
                      variationId={d.product_variation_detail ? d.product_variation_detail.id : null} 
                      handleWishListChange={handleWishListChange}/>
                    </div>
                    <Link
                      className=" text-decoration-none " style={{color:"black"}}
                      to={`/singleproduct/${d.slug}/${d.unique_id}/${d.sku}`}>
                      <ProductCard d={d} key={d.id}/>
                    </Link>
                  </div>
                ))}
            </Slider>
          </Col>
          <Col className="rightarrow">
          <div className=" p-0 w-100 h-100 d-flex justify-content-center align-items-center " style={{backgroundColor:"#F5F5FC", borderRadius:"50%", textAlign:"center"}}
           onClick={goToNext}>
              <i className="bi bi-arrow-right-short" style={{ color: '#0036FF' }}></i>
            </div>
          </Col>
        </Row>
        </div>
    </Container>
    </>
  );
}

export default Trending;