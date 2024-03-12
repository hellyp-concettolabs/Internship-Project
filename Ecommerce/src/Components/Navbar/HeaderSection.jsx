import {Navbar,Row, Col, Nav, Form, Button, Container, Image, ListGroup, Offcanvas} from 'react-bootstrap';
import { useState } from 'react';
import eCart from "../../assets/eCart.svg"
import search from '../../assets/search-normal.png'
import wishlist from '../../assets/wishlist.png'
import shopping_cart from '../../assets/shopping-cart.png'
import user from '../../assets/user.png'
import "../Navbar/header.scss"
import Signuppop from './Signuppop';

function HeaderSection() {

  const [show, setShow] = useState(false);

  const [showList, setShowList] = useState(false);

  const handleHamburgerClose = () => setShowList(false);
  const handleHamburger = () => setShowList(true);

  const data = [
    {
      item:`Your Profile`,
      link:`profile`
    },
    {
      item:`Your Orders`,
      link:`profile`
    },
    {
      item:`Address`,
      link:`profile`
    },
    {
      item:`Notifications`,
      link:`profile`
    },
    {
      item:`Wishlists`,
      link:`profile`
    },
  ]

  return (
    <div>
      
      <header className='shadow-sm mb-3'>
        <Container fluid className='navsection'>
          <Row className='align-items-center px-md-3 py-2 '>

            <Col className='leftsection d-flex align-items-center '>
              <button className='Menu d-md-none border-0' style={{backgroundColor:"white"}}
                onClick={handleHamburger}>
                <i className="bi bi-list "></i>
              </button>
              <Navbar.Brand href="/">
                <Image src={eCart} className=' img-fluid col-sm-4 col-8'/>
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

              <Col className=' rightsection d-flex align-items-center gap-3 gap-sm-4 justify-content-end '>
                  <Nav.Link href='#wishlist'>
                    <div className='wishlist-container'>
                      <Image src={wishlist} className=' img-fluid wishlist-icon'/>
                      <div className='wishlist-count'>0</div>
                    </div>
                  </Nav.Link>

                  <Nav.Link href='/cart'>
                    <div className='shopping-cart-container'>
                      <Image src={shopping_cart} className='img-fluid shopping-cart-icon'/>
                      <div className='shopping-cart-count'>0</div>
                    </div>
                  </Nav.Link>

                  <div className=' Signup d-flex align-items-center navbar navbar-expand-md position-relative dropdown '  aria-expanded="false">
                    <Nav.Link href='#user' onClick={() => setShow(true)} className=''>
                      <div className='user-container'><Image src={user} className=' img-fluid user-icon'/></div>
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
                          {data.map((d,i) => (
                            <a href={`/${d.link}`} key={i} className=' text-decoration-none '>
                              <ListGroup.Item as="li"  className='dropdown-item '>{d.item}</ListGroup.Item>
                            </a>
                          ))}
                        </ListGroup>
                    </div>
                  </div>
              </Col>
          </Row>
          <Signuppop show={show} onHide={() => setShow(false)}/>

          <Row>
            <Offcanvas show={showList} onHide={handleHamburgerClose}>
              <Offcanvas.Header closeButton className='col-12 justify-content-end '>
                
              </Offcanvas.Header>
              <Offcanvas.Body className='d-flex justify-content-center '>
                <ul className='list-unstyled w-75 d-flex flex-column gap-3 '>
                  <li  className='text-center bg-primary text-light rounded-5 py-2 px-3 ' 
                    onClick={() => setShow(true)}>
                      Login/Register
                  </li>
                  {data.map((d,i) => (
                    <a key={i} href={`/${d.link}`}className=' text-decoration-none text-dark'>
                      <li>{d.item}</li>
                    </a>
                  ))}
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
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
