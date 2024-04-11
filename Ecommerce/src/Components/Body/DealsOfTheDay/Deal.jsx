import { Container, Image,Row, Col} from "react-bootstrap"
import rightarrow from "../../../assets/rightarrow.png"
import womenclothes from "../../../assets/womanclothes.png"
import manclothing from "../../../assets/manclothing.png"
import shoes from "../../../assets/shoes.png"
import sportsshoe from "../../../assets/sportsshoe.png"
import jewellery from "../../../assets/jewellery.png"
import sunglasses from "../../../assets/sunglasses.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../DealsOfTheDay/deal.scss"
import { Link} from "react-router-dom"
import DealCard from "./DealCard"
import { useRef } from "react"

function Deal() {

  const sliderRef = useRef();

  const data = [
    {
      img : womenclothes,
      discount : `Upto 40% off`,
      title:`Women's Western Clothing`,
    },
    {
      img : manclothing,
      discount : `Upto 40% off`,
      title:`Men's Western Clothing`,
    },
    {
      img : shoes,
      discount : `Upto 50% off`,
      title:`Casual Shoes`,
    },
    {
      img : sportsshoe,
      discount : `Flat 50% off`,
      title:`Men's Running shoes`,
    },
    {
      img : jewellery,
      discount : `Upto 20% off`,
      title:`Statement Fashion Jewellery`,
    },
    {
      img : sunglasses,
      discount : `Upto 10% off`,
      title:`Sunglasses`,
    },
    
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  return (
    <>
      <Container className="dealcontainer mt-3 ">

        {/* ----------  Heading of Section  ---------- */}
        <Row className="dealheader d-flex justify-content-between mb-2 mb-sm-3 mb-lg-5">
          <Col className=" d-flex justify-content-start align-items-end gap-3 col-sm-8 col-6 ">
            <span className="dealheading ">Deals of the Day</span> 
            <p className="subhead d-none d-md-block " > Ends in</p>
            <Row className=" d-flex justify-content-between align-items-center gap-2 d-none d-md-flex">
              <Col className="timer d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className="time">11</div>
                <div className="timeing">Hours</div>
              </Col>
              <Col className="timer d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className="time">11</div>
                <div className="timeing">Mins</div>
              </Col>
              <Col className="timer d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className="time">11</div>
                <div className="timeing">Secs</div>
              </Col>
            </Row>
          </Col>
          <Col className=" d-flex justify-content-end align-items-end gap-3 col-6 col-sm-4">
            <Link to="/dealsoftheday" className=" text-decoration-none ">
              <span className="viewall px-2 text-dark ">View All Deals</span> 
              <Image src={rightarrow} className=" img-fluid mb-1"/>
            </Link>
          </Col>
        </Row>

        <Row className="mdsubhead d-flex d-md-none justify-content-between mb-4">
          <Col className=" d-flex justify-content-start align-items-end gap-3 ">
            <p className="subhead d-flex d-md-none " style={{color:"#A4A4B8"}}> Ends in</p>
            <Row className=" d-flex justify-content-between align-items-center gap-2 d-flex d-md-none">
              <Col className="timer d-flex flex-column justify-content-center align-items-center rounded " >
                <div className="time">11</div>
                <div className="timeing">Hours</div>
              </Col>
              <Col className="timer d-flex flex-column justify-content-center align-items-center rounded " >
                <div className="time">11</div>
                <div className="timeing">Mins </div>
              </Col>
              <Col className="timer d-flex flex-column justify-content-center align-items-center rounded " >
                <div className="time">11</div>
                <div className="timeing">Secs</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* ---------- Cards ----------- */}
        <Container className="dealcardcontainer">
            <Row className=" mt-3 Slider d-flex justify-content-center align-items-center">
              <Col className="leftarrow">
                <div className=" p-0 w-100 h-100 d-flex justify-content-center align-items-center " style={{backgroundColor:"#F5F5FC", borderRadius:"50%", textAlign:"center"}}
                onClick={goToPrev}>
                  <i className="bi bi-arrow-left-short" style={{ color: '#0036FF' }}></i>
                </div>
              </Col>
              <Col className="centerslider">
                  <Slider ref={sliderRef} {...settings}>
                    {data.map((d,i) => (
                      <Link key={i} to="/productlist" className=" text-decoration-none ">
                        <DealCard d={d} key={d.title}/>
                      </Link>
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
        </Container>
        
    </> 
  )
}


export default Deal
