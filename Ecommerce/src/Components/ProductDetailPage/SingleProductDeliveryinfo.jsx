import deliveryvan from "../../assets/deliveryvan.png"
import warranty from "../../assets/warranty.png"
import returntimer from "../../assets/returntimer.png"
import { Image } from "react-bootstrap"

function SingleProductDeliveryinfo() {

    const imageicon =[
        {
            img:deliveryvan,
            desc:`Free delivery on orders over £50.`,
        },
        {
            img:warranty,
            desc:`Free 45 day returns.`,
        },
        {
            img:returntimer,
            desc:`6 month warranty with the Bargain Fox.`,
        },
    ];
    
  return (
    <>
        <div className="deliveryinfocontainer">
            {imageicon.map((d,i) => (
                <div key={i} className="subinfo">
                    <div className="imgcontainer">
                        <Image src={d.img} className=" img-fluid "/>
                    </div>
                    <div className="infodesc">{d.desc}<span className=" text-primary "> Read more</span></div>
                </div>
            ))}    
        </div>
    </>
  )
}

export default SingleProductDeliveryinfo
