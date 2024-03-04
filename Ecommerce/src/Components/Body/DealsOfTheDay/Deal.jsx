import { Container, Image,Row, Col} from "react-bootstrap"
import rightarrow from "../../../assets/rightarrow.png"
import womenclothes from "../../../assets/womanclothes.png"
import manclothing from "../../../assets/manclothing.png"
import shoes from "../../../assets/shoes.png"
import sportsshoe from "../../../assets/sportsshoe.png"
import jewellery from "../../../assets/jewellery.png"
import sunglasses from "../../../assets/sunglasses.png"
//import left from "../../../assets/left.png"
//import right from "../../../assets/right.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../DealsOfTheDay/deal.scss"
import { Link } from "react-router-dom"

function Deal() {

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

  return (
    <>
      <Container className=" mt-3 ">
        <Row className=" d-flex justify-content-between mb-2 mb-sm-3 mb-lg-5">
          <Col className=" d-flex justify-content-start align-items-end gap-3 col-sm-8 col-6 ">
            <span className=" fw-bold fs-4">Deals of the Day</span> 
            <p className="fs-5 m-0 d-none d-md-block " style={{color:"#A4A4B8"}}> Ends in</p>
            <Row className=" d-flex justify-content-between align-items-center gap-2 d-none d-md-flex">
              <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className=" fw-bold ">11</div>
                <div className=" fs-6 ">Hours</div>
              </Col>
              <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className=" fw-bold ">11</div>
                <div className=" fs-6 ">Mins</div>
              </Col>
              <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className=" fw-bold ">11</div>
                <div className=" fs-6 ">Secs</div>
              </Col>
            </Row>
          </Col>
          <Col className=" d-flex justify-content-end align-items-end gap-3 col-6 col-sm-4">
            <Link to="/dealsoftheday" className=" text-decoration-none ">
              <span className=" small fs-md-5 px-2 text-dark ">View All Deals</span> 
              <Image src={rightarrow} className=" img-fluid mb-1"/>
            </Link>
          </Col>
        </Row>

        <Row className=" d-flex d-md-none justify-content-between mb-4">
          <Col className=" d-flex justify-content-start align-items-end gap-3 ">
            <p className="small m-0 d-flex d-md-none " style={{color:"#A4A4B8"}}> Ends in</p>
            <Row className=" d-flex justify-content-between align-items-center gap-2 d-flex d-md-none">
              <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className=" fw-bold ">11</div>
                <div className=" fs-6 ">Hours</div>
              </Col>
              <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className=" fw-bold ">11</div>
                <div className=" fs-6 ">Mins</div>
              </Col>
              <Col className=" d-flex flex-column justify-content-center align-items-center rounded " style={{backgroundColor:"#2569F3", color:"white"}}>
                <div className=" fw-bold ">11</div>
                <div className=" fs-6 ">Secs</div>
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>
        <Container>
            <div className=" mt-3 Slider">
              <Slider {...settings}>
              {data.map((d) => (
                <div key={d.title} className="px-2 ">
                  <div className="border rounded-5">
                  <div>
                    <Image src={d.img} className=" img-fluid w-100"/>
                  </div>
                  <div>
                    <span className=" px-2 ">{d.discount}</span>
                    <p className=" fw-bold px-2 ">{d.title}</p>
                  </div>
                  </div>
                </div>
              ))}
              </Slider>
            </div>
        </Container>
        
    </> 
  )
}


export default Deal
