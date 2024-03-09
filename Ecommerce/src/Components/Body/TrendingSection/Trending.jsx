import { Col, Container, Row, Image} from "react-bootstrap";
import rightarrow from "../../../assets/rightarrow.png";
import electronics2 from "../../../assets/electronics2.png";
import kitchen from "../../../assets/kitchen.png"
import home from "../../../assets/home.png"
import toys from "../../../assets/toys.png"
import sports from "../../../assets/sports.png"
import cabinet from "../../../assets/cabinet.png"
import pets from "../../../assets/pets.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../DealsOfTheDay/deal.scss"
import TrendingCard from "./TrendingCard";
import "./trending.scss"
function Trending() {

  const data= [
    {
      img: electronics2,
      title: `Electronics`,
      discount:`Up to 10% off`
    },
    {
      img: kitchen,
      title: `Kitchen`,
      discount:`Up to 50% off`
    },
    {
      img: home,
      title: `Home`,
      discount:`From £50`
    },
    {
      img: toys,
      title: `Toys & Crafts`,
      discount:`From £100`
    },
    {
      img: sports,
      title: `Sports & Leisure`,
      discount:`Up to 5% off`
    },
    {
      img: cabinet,
      title: `Job Lots`,
      discount:`Up to 15% off`
    },
    {
      img: pets,
      title: `Pets`,
      discount:`Up to 10% off`
    },
  ]



  return (
    <>
      <Container className="trendcontainer">
        <Row className="mb-4 position-relative">
          <Col className="d-flex align-items-center col-8 ">
            <h2 className="trendheader mb-0">Trending on BargainFox</h2>
          </Col>
          <Col className="d-flex justify-content-end align-items-center gap-2 ">
            <span className="viewall">View All</span>
            <Image src={rightarrow} className="img-fluid" />
          </Col>
        </Row>
        <div className="d-flex justify-content-between align-items-center ">
          {data.map((d,i) => (
            <TrendingCard d={d} key={i}/>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Trending;