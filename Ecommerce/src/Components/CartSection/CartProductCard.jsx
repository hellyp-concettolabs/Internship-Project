import {Form, Image} from "react-bootstrap"
import main from "../../assets/main.png"
import SingleProductQuantity from "../ProductSection/SingleProductQuantity.jsx"
import SingleProductTitle from "../ProductSection/SingleProductTitle.jsx"
function CartProductCard() {

    const data = [
        {
            img:main,
            title:`Women's Blouse Solid Simple Long Sleeve V Neck Button Blouse`,
            dp:`12`,
            ap:`38.98`,
            dis:'65'
        },
        {
            img:main,
            title:`Women's Blouse Solid Simple Long Sleeve V Neck Button Blouse`,
            dp:`12`,
            ap:`38.98`,
            dis:'65'
        },
        {
            img:main,
            title:`Women's Blouse Solid Simple Long Sleeve V Neck Button Blouse`,
            dp:`12`,
            ap:`38.98`,
            dis:'65'
        },
    ]

  return (
    <>
      <>
      {data.map((d,i) => (
        <div key={i} className=" py-4 border-bottom d-lg-flex d-block align-items-center">

            <div className=" d-flex align-items-center gap-4">
                <Form.Check checked></Form.Check>
                <div className="  col-sm-2 col-3" >
                    <Image src={d.img} className=" w-100 rounded-4"/>
                </div>
                <div className=" col-lg-10 d-flex flex-column gap-2">
                        <div className="cartproducttitle">
                                <SingleProductTitle data={d}/>
                        </div>
                        <div>
                            <div className=" d-flex flex-row align-items-center gap-2 ">
                                <div className=" fw-bold fs-6"><sup>$</sup>{d.dp}</div>
                                <div className=" small text-decoration-line-through">${d.ap}</div>
                                <div className=" small text-primary">-{d.dis}%</div>
                            </div>
                        </div>
                    <div className=" d-none d-md-flex ">
                        <div className=" d-flex align-items-center gap-3">
                            <SingleProductQuantity/>
                            <div className="fw-bold px-2 " style={{borderLeft:"2px solid #A4A4B8"}}>Delete</div>
                            <div className="fw-bold px-2 " style={{borderLeft:"2px solid #A4A4B8"}}>Share</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" d-block d-md-none my-3">
                        <div className=" d-flex align-items-center gap-md-3 gap-1 ">
                            <div className=" fw-bold text-secondary ">Quantity: | - | 1 | + |</div>
                            <div className="fw-bold px-md-2 px-1" style={{borderLeft:"2px solid #A4A4B8"}}>Delete</div>
                            <div className="fw-bold px-md-2 px-1" style={{borderLeft:"2px solid #A4A4B8"}}>Share</div>
                        </div>
                    </div>
            <div className=" col-lg-4 col-12 px-2 ">
                <div className="d-flex flex-lg-column gap-3 text-md-end mt-lg-0 mt-2 ">
                    <span className=" small ">Condition: Brand New</span>
                    <span className=" small ">374 sold, by Celby Store, 2 left</span>
                </div>
            </div>
        </div>
        ))}
      </>
    </>
  )
}

export default CartProductCard
