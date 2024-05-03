import { Col, Container, Row } from "react-bootstrap"
import "../FooterSection/footer.scss"

function Footer() {

    const data = [
        {
            heading:`Help`,
            list:[`Delivery`,`Returns`,`Help Centre`]
        },
        {
            heading:`About Us`,
            list:[`About Us`,`Our Blogs`,`Contact Us`]
        },
        {
            heading:`Your Account`,
            list:[`Your Orders`,`Checkout`,`Download the App`,`FastFox Subscription`]
        },
    ]

    const socialicons =[
        {
            icon:`bi bi-facebook`,
        },
        {
            icon:`bi bi-twitter`,
        },
        {
            icon:`bi bi-instagram`,
        },
        {
            icon:`bi bi-pinterest`,
        },
    ]

  return (
    <>
        <footer className="text-light">
            <Container className="footersection">
                <div className="footertopsec d-flex justify-content-between">
                    {data.map((d,i) => (
                        <div key={i} className="footertopsubsec">
                            <div className="footerheading">{d.heading}</div>
                            <ul className=" list-unstyled">
                                {d.list.map((l) => (
                                    <a key={l} href="" className="text-decoration-none ">
                                        <li className="footersublist">{l}</li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footerbottomsec">
                    <Row className="align-items-center g-3 gap-lg-0 w-100 ">
                        <Col className=" d-flex gap-4 col-12 col-lg-4 justify-content-center justify-content-lg-start ">
                            {socialicons.map((iimg) => (
                                <div key={iimg.icon} className="socialicon">
                                    <i className={`${iimg.icon} img-fluid `}></i>
                                </div>
                            ))}
                        </Col>
                        <Col className=" col-12 col-lg-4">
                            <p className="rights m-0 ">All rights reserved © 2023 BargainFox.com</p>
                        </Col>
                        <Col className=" text-md-end text-xl-end col-12 col-lg-4">
                            <p  className="terms m-0 ">Terms of Service | Privacy Policy</p>
                        </Col>
                    </Row>
                </div>
            </Container> 
        </footer>
    </>
  )
}

export default Footer
