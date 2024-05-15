import PropTypes from 'prop-types';

SingleProductPrice.propTypes = {
  productSalePrice: PropTypes.string,
  productprice: PropTypes.string,
  productDiscount: PropTypes.string,
  };

function SingleProductPrice({productSalePrice,productprice,productDiscount}) {
  
  return (
    <>
      {productSalePrice && productprice && productDiscount &&
      <div className="pricecontainer ">
          <div className="price "><sup>$</sup>{productSalePrice}</div>
          <div className="cutprice">${productprice}</div>
          <div className="discountoff rounded-5 ">{Math.floor(productDiscount)}% off</div>
      </div>
      }
    </>
  )
}

export default SingleProductPrice
