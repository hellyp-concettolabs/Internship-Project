import { Button } from "react-bootstrap"

function SingleProductCartBtn() {
  return (
    <div className="buybtncontainer">
        <div className=" w-100 ">
            <Button className="cartbtn rounded-5">Add to cart</Button>
        </div>
        <div className=" w-100 ">
            <Button className="buybtn rounded-5">Buy Now</Button>
        </div>
    </div>
  )
}

export default SingleProductCartBtn
