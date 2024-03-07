import {Navbar,Row, Col, Nav, Form, Button, Container, Image, ListGroup} from 'react-bootstrap';
import { useState } from 'react';
import main_logo from '../../assets/main-logo.png'
import search from '../../assets/search-normal.png'
import wishlist from '../../assets/wishlist.png'
import shopping_cart from '../../assets/shopping-cart.png'
import user from '../../assets/user.png'
import "../Navbar/header.scss"
import Signuppop from './Signuppop';

function HeaderSection() {

  const [show, setShow] = useState(false);

  return (
    <div>
      
      <header className='shadow-sm mb-3'>
        <Container fluid className='navsection'>
          <Row className='align-items-center px-md-3 py-2 '>

            <Col className='leftsection d-flex align-items-center '>
              <button className='Menu d-md-none border-0 bg-light ' data-bs-toggle="collapse" data-bs-target="#responsive-navbar-nav" aria-expanded="false" aria-controls="responsive-navbar-nav">
                <i className="bi bi-list "></i>
              </button>
              <Navbar.Brand href="/">
                <Image src={main_logo} className=' img-fluid col-sm-9  '/>
              </Navbar.Brand>
            </Col>

            <Col className='centersection d-none d-md-block'>
                        <Form className='search d-flex  '>
                            <Form.Control type="text" placeholder="Search Products" className='searchtext rounded-start-2 rounded-end-0'style={{boxShadow:"none",borderColor:"#e2e3e5"}} />
                            <Button className='search-icon rounded-end-2 rounded-start-0'>
                              <img src={search}/>
                            </Button>
                        </Form>
              </Col>

              <Col className=' rightsection d-flex align-items-center gap-2 gap-sm-4 justify-content-end '>
                  <Nav.Link href='#wishlist'>
                    <Image src={wishlist} className=' img-fluid '/>
                  </Nav.Link>

                  <Nav.Link href='/cart'>
                    <Image src={shopping_cart} className=' img-fluid '/>
                  </Nav.Link>

                  <div className=' Signup d-flex align-items-center navbar navbar-expand-md position-relative dropdown '  aria-expanded="false">
                    <Nav.Link href='#user' onClick={() => setShow(true)} className=''>
                      <Image src={user} className=' img-fluid '/>
                    </Nav.Link>
                    <div className='d-flex flex-column  small d-none d-xl-block'>
                      <p className='greet mb-0'>Hello there,</p>
                      <span className='signin'>SIGN IN/REGISTER</span>
                    </div>
                    <div className=' p-0 dropdown-content dropdown-menu position-md-static' id="SignupDropdown" >
                        <ListGroup as="ul"  className=' dropdown-item p-0 '>
                          <ListGroup.Item as="li"  className=' px-3'>
                            <Button onClick={() => setShow(true)} className=' text-center bg-primary text-light border-0 rounded-5 py-2 px-3 '>Login/Register</Button>
                          </ListGroup.Item>
                          <ListGroup.Item as="li"  className='dropdown-item '>Your Profile</ListGroup.Item>
                          <ListGroup.Item as="li"  className='dropdown-item '>Your Orders</ListGroup.Item>
                          <ListGroup.Item as="li"  className='dropdown-item '>Address</ListGroup.Item>
                          <ListGroup.Item as="li"  className='dropdown-item '>Notifications</ListGroup.Item>
                          <ListGroup.Item as="li"  className='dropdown-item '>Wishlists</ListGroup.Item>
                        </ListGroup>
                    </div>
                  </div>
              </Col>
          </Row>
          <Signuppop show={show} onHide={() => setShow(false)}/>

          <Row>
          <div className=" collapse collapse-horizontal position-absolute" id="responsive-navbar-nav">
                <div className='bg-light rounded-4 '>
                  <ListGroup className=''>
                    <ListGroup.Item className=' px-3'>
                      <div className=' text-center bg-primary text-light rounded-5 py-2 px-3 '>Login/Register</div>
                    </ListGroup.Item>
                    <ListGroup.Item className=' '>Your Profile</ListGroup.Item>
                    <ListGroup.Item className=' '>Your Orders</ListGroup.Item>
                    <ListGroup.Item className=' '>Address</ListGroup.Item>
                    <ListGroup.Item className=' '>Notifications</ListGroup.Item>
                    <ListGroup.Item className=' '>Wishlists</ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
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
