import { Col, Container, Image, Row } from "react-bootstrap"
import rightarrow from "../../../assets/rightarrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ElectronicsSection/electronics.scss"
import ProductCard from "../../ProductCard/ProductCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import WishListBtn from "../../WishListSection/WishListBtn";

function Electronics() {

  const sliderRef = useRef();
  const[productData,setProductData] = useState([]);
  const [requestMade,setRequestMade] = useState(false);
  useEffect(() => {
    const fetchData = async() =>{
    if(!requestMade){
    await axios.post(' https://bargainfox-dev.concettoprojects.com/api/product/list',{
      per_page:"100",
      category_id:"electronics",
   })
    .then(response =>{
      setProductData(response.data.result.data)
      //console.log(productData);
      setRequestMade(true);
    })
    .catch(error =>{
      console.error('Error making GET request:', error);
    })
  }
  }
  fetchData();
  },[requestMade]);

  useEffect( () =>{
  },[productData]);
  
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
        setProductData((prevProductData) =>
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
            <h2 className="gardenheader">Electronics</h2>
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
                {productData.map((d) =>(
                  <div key={d.id}>
                    <div className="gardenlistwishlist">
                      <WishListBtn 
                        isWishList={d.is_wishlisted} 
                        d={d}   
                        id={d.id}
                        variationId={d.product_variation_detail ? d.product_variation_detail.id : null}
                        handleWishListChange={handleWishListChange} />
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
  )
}

export default Electronics
