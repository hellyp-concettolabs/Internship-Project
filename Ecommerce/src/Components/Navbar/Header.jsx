import {Navbar, Nav, Form, Button, Container} from 'react-bootstrap';
import main_logo from '../../assets/main-logo.png'
import search from '../../assets/search-normal.png'
import wishlist from '../../assets/wishlist.png'
import shopping_cart from '../../assets/shopping-cart.png'
import user from '../../assets/user.png'
import "../Navbar/header.scss"
function Header() {
  return (
    <div>
      <Header>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={main_logo}/>
          </Navbar.Brand>
          <Nav className="ml-auto">
                    <Form className='search d-flex '>
                        <Form.Control type="text" placeholder="Search Products" className='rounded-start-2 rounded-end-0' />
                        <Button variant="outline-success" className='search-icon rounded-end-2 rounded-start-0'>
                          <img src={search}/>
                        </Button>
                    </Form>
          </Nav>
          <Nav>
            <Nav.Link href='#wishlist'>
              <img src={wishlist}/>
            </Nav.Link>
            <Nav.Link href='#shopping_cart'>
              <img src={shopping_cart}/>
            </Nav.Link>
            <Nav>
              <Nav.Link href='#user'>
                <img src={user}/>
              </Nav.Link>
              <Navbar.Collapse className='d-flex flex-column'>
                <p className='mb-0'>Hello there,</p>
                <span className='fw-bold'>SIGN IN/REGISTER</span>
              </Navbar.Collapse>
            </Nav>
          </Nav>
        </Container>

      </Header>
    </div>
  )
}

export default Header
