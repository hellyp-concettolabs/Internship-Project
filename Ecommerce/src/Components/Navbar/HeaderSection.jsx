import {Navbar,Row, Col, Nav, Form, Button, Container, Image} from 'react-bootstrap';
import main_logo from '../../assets/main-logo.png'
import search from '../../assets/search-normal.png'
import wishlist from '../../assets/wishlist.png'
import shopping_cart from '../../assets/shopping-cart.png'
import user from '../../assets/user.png'
import "../Navbar/header.scss"
function HeaderSection() {
  return (
    <div>
      <header className='shadow-sm'>
        <Container fluid="lg">
          <Row className='align-items-center'>
            <Col className='leftsection'>
              <Navbar.Brand href="#home">
                <Image src={main_logo} className=' img-fluid '/>
              </Navbar.Brand>
            </Col>
            <Col className='centersection d-none d-md-block'>
                        <Form className='search d-flex w-100 '>
                            <Form.Control type="text" placeholder="Search Products" className='rounded-start-2 rounded-end-0' />
                            <Button variant="outline-success" className='search-icon rounded-end-2 rounded-start-0'>
                              <img src={search}/>
                            </Button>
                        </Form>
              </Col>
              <Col className=' rightsection d-flex align-items-center gap-2 gap-sm-4 justify-content-end '>
                  <Nav.Link href='#wishlist'>
                    <Image src={wishlist} className=' img-fluid '/>
                  </Nav.Link>
                  <Nav.Link href='#shopping_cart'>
                    <Image src={shopping_cart} className=' img-fluid '/>
                  </Nav.Link>
                  <div className=' d-flex align-items-center navbar navbar-expand-md '>
                    <Nav.Link href='#user'>
                      <Image src={user} className=' img-fluid '/>
                    </Nav.Link>
                    <div className='greet d-flex flex-column  small d-none d-xl-block'>
                      <p className='mb-0'>Hello there,</p>
                      <span className='fw-bold'>SIGN IN/REGISTER</span>
                    </div>
                  </div>
              </Col>
          </Row>
          <Row>
            <Col className='centersection d-md-none m-2'>
                <Form className='search d-flex w-100 '>
                    <Form.Control type="text" placeholder="Search Products" className='rounded-start-2 rounded-end-0' />
                    <Button variant="outline-success" className='search-icon rounded-end-2 rounded-start-0'>
                      <img src={search}/>
                    </Button>
                </Form>
              </Col>
          </Row>
        </Container>

      </header>
    </div>
  )
}

export default HeaderSection
