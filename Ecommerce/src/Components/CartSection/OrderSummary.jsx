import { Button, Card} from "react-bootstrap"

function OrderSummary() {

  return (
    <>
        <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <Card.Text>
                <div className=" border-top border-bottom d-flex flex-column gap-3 py-3">
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Item(s) total:</div>
                    <div>$68.50</div>
                </div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Item(s) discount:</div>
                    <div className=" text-primary">-$40</div>
                </div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Subtotal:</div>
                    <div>$28.50</div>
                </div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div>Delivery:</div>
                    <div className=" text-success ">FREE</div>
                </div>
                </div>
                <div className=" d-flex justify-content-between align-items-center mt-2 mb-2 fw-bold ">
                    <div>Total (3 Items):</div>
                    <div>$28.50</div>
                </div>
                <Button variant="primary" className=" w-100 rounded-5 ">Proceed to Checkout</Button>
                <div className=" mt-2 small text-start ">Order within 2h 25m and choose Express Shipping to get it by Tuesday 25/7/2023</div>
              </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default OrderSummary
