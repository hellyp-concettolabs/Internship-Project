import { Col, Image, Row } from "react-bootstrap"
import "./imageandthumbnail.scss"
import Slider from "react-slick"
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

ImageAndThumbnail.propTypes = {
  productImage: PropTypes.arrayOf(PropTypes.shape({
    product_image_url: PropTypes.string,
  })),
};
function ImageAndThumbnail({productImage = []}) {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    vertical: true,
    verticalSwiping: true,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows:false,
    scroll:false,
    // centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 500,
    infinite : productImage.length > 1,
    vertical: true,
    verticalSwiping: true,
  };
// console.log(productImage)
  return (
    <>
      <Row className="slider-wrapper d-flex flex-row-reverse ">
        {/* ----------product main image---------*/}
        <Col className="image-slider-wrap bg-body-secondary">
          <Slider {...settingsMain} asNavFor={nav2} ref={slider => (setSlider1(slider))}>
              {productImage && productImage.map((slide,i) =>
                  <div className="slick-slide" key={i} >
                      <Image className="slick-slide-image img-fluid" src={slide.product_image_url} style={{height:"346px"}} />
                  </div>
          )}
          </Slider>
        </Col>

        {/* ----------Thumbnail---------- */}
        <Col className="thumbnail-slider-wrap col-2">
          <Slider {...settingsThumbs} asNavFor={nav1} ref={slider => (setSlider2(slider))}>
            {productImage && productImage.map((slide,i) =>
                  <div className="slick-slide d-flex align-items-center " key={i}>
                      <Image className="slick-slide-thumbimage img-fluid " src={slide.product_image_url} />
                  </div>
              )}
          </Slider>
        </Col>
      </Row>
    </>
  )
}

export default ImageAndThumbnail
