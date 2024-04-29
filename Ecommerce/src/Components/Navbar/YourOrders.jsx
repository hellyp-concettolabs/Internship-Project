import { Container, Row } from "react-bootstrap"

function YourOrders() {
  return (
    <>
      {/* BreadCrumb */}
      <Container fluid className="profileBreadcrumb">
          <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-start ">
              <li className="breadcrumb-item">
                  <a href="/" className=" text-decoration-none text-secondary">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page"> &gt; &nbsp; Your Orders</li>
            </ol>
          </nav>
      </Container>
      <Container className=" ">

        <Row className=" mb-2 " style={{borderBottom:"3px solid #f5f5fc"}}>
            <h3 className="yprofile">Your Orders</h3>
        </Row>
        
        <Row className=" mb-5">

        </Row>

        </Container>
    </>
  )
}

export default YourOrders
