import { Button, Card} from "react-bootstrap"
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";

OrderSummary.propTypes = {
  cartDetail: PropTypes.PropTypes.shape({
    expected_delivery: PropTypes.string,
    cart_total: PropTypes.string,
    product_discount_total: PropTypes.string,
    product_sub_total: PropTypes.string,
    grand_total: PropTypes.string,
    user_cart: PropTypes.array,
  }),
};
function OrderSummary({cartDetail}) {

  let time = '', shipping = '', date = '';

  if (cartDetail && cartDetail.expected_delivery) {
    const matches = cartDetail.expected_delivery.match(/<span class='main'>(.*?)<\/span>.*?<span class='main'>(.*?)<\/span>.*?<span class='main'>(.*?)<\/span>/);
    if (matches && matches.length > 1) {
      [time, shipping, date] = matches.slice(1);
    }
  }

  const navigate = useNavigate();

  return (
    <>
        <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              {/* <Card.Text> */}
                <div className=" border-top border-bottom d-flex flex-column gap-3 py-3">
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Item(s) total:</div>
                    <div>${cartDetail.cart_total}</div>
                </div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Item(s) discount:</div>
                    <div className=" text-primary">-${cartDetail.product_discount_total}</div>
                </div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Subtotal:</div>
                    <div>${cartDetail.product_sub_total}</div>
                </div>
                </div>
                <div className=" d-flex justify-content-between align-items-center mt-2 mb-2 fw-bold ">
                    <div>Total ({cartDetail.user_cart && cartDetail.user_cart.length} Items):</div>
                    <div>${cartDetail.grand_total}</div>
                </div>
                <Button variant="primary" className=" w-100 rounded-5 "
                  onClick={() => navigate("/checkout/address")}>
                  Proceed to Checkout
                </Button>
                <div className=" mt-2 small text-start ">Order within {time} and choose {shipping} to get it by {date}</div>
              {/* </Card.Text> */}
            </Card.Body>
        </Card>
    </>
  )
}

export default OrderSummary
