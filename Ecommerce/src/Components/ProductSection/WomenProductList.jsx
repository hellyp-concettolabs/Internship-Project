import { Col, Image } from "react-bootstrap"


function WomenProductList({data}) {
  return (
    <>
            {data && data.map((d) => (
            <Col className=" col-3 " key={d.title}>
            <div className=" mx-2 ">
                <div className=" border rounded-5 ">
                    <div>
                        <Image src={d.img} className=" img-fluid w-100 "/>
                    </div>
                    <div className=" p-3 ">
                        <p className=" small">{d.title}</p>
                        <div className=" d-flex justify-content-between align-items-center ">
                            <div className="">
                                <span className=" fw-bold mx-2 fs-6 "><sup>$</sup>{d.price}</span>
                                <span className=" text-decoration-line-through ">${d.actualprice}</span>
                            </div>
                            <div>
                                <span>{d.discount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Col>
            ))}        
    </>
  )
}

export default WomenProductList
