import PropTypes from 'prop-types';

SingleProductDeliveryTime.propTypes = {
  productDeliveryTime: PropTypes.string,
};
function SingleProductDeliveryTime({productDeliveryTime}) {
  const [time, shipping, date] = productDeliveryTime.match(/<span class='time'>(.*?)<\/span>.*?<span class='shipping'>(.*?)<\/span>.*?<strong>(.*?)<\/strong>/).slice(1);

  return (
    <>
      {productDeliveryTime &&
        <div className="deliverytime mt-2">Order within {time} and choose {shipping} to get it by {date}</div>
      }
    </>
  )
}

export default SingleProductDeliveryTime
