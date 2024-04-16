import { Navbar, Row, Col, Nav, Form, Button, Container, Image, ListGroup, Offcanvas } from 'react-bootstrap';
import { useContext, useState } from 'react';
import eCart from "../../assets/eCart.svg"
import search from '../../assets/search-normal.png'
import wishlist from '../../assets/wishlist.png'
import shopping_cart from '../../assets/shopping-cart.png'
import usericon from '../../assets/user.png'
import "../Navbar/header.scss"
import Signuppop from './Signuppop';
import { UserContext } from '../UserData/StoreUserContext';
import axios from 'axios';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Link, useNavigate} from 'react-router-dom';

function HeaderSection() {

  const [show, setShow] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleHamburgerClose = () => setShowList(false);
  const handleHamburger = () => setShowList(true);

  const data = [
    {
      item: `Your Profile`,
      link: `profile`
    },
    {
      item: `Your Orders`,
      link: `profile`
    },
    {
      item: `Address`,
      link: `profile`
    },
    {
      item: `Notifications`,
      link: `profile`
    },
    {
      item: `Wishlists`,
      link: `profile`
    },
  ]
  const { userData } = useContext(UserContext);
  const { setUserData } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const [searchResult,setSearchResult] = useState([])
  const [query,setQuery] = useState('');
  const [searchText,setSearchText] = useState("");
  
  const navigate = useNavigate();
//For Logout
  const handleLogout = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    axios.get(' https://bargainfox-dev.concettoprojects.com/api/logout')
      .then(response => {
        console.log(response);
        if (response.data.status === 200) {
          setUserData('');
        }
      })
      .catch(error => {
        console.log(error);
      });

  }
  

  const handleSearch = async (query) =>{
    if(query.length > 0 ){
      setIsLoading(true);
    }

    try{
      const response = await axios.post(" https://bargainfox-dev.concettoprojects.com/api/product/list",{
      search : query
      })
      if(response.status === 200){
        setSearchResult(response.data.result.data);
        setSearchText(query)
        setIsLoading(false);
      }
    }
    catch(error){
      console.log("error while searching",error);
    }
  }
  const filterBy = () => true;
  
  //For search-icon
  const handleProductListSearch = () =>{

    setTimeout(() => {
      navigate(`/productList/search?searchText=${searchText}`)
    }, 300);

  }

  return (
    <div>
      <header className='shadow-sm mb-3'>
        <Container fluid className='navsection'>
          <Row className='align-items-center px-md-4 px-1 py-2 '>

            <Col className='leftsection d-flex align-items-center '>
              <button className='Menu d-md-none border-0' style={{ backgroundColor: "white" }}
                onClick={handleHamburger}>
                <i className="bi bi-list "></i>
              </button>
              <Navbar.Brand href="/">
                <Image src={eCart} className=' img-fluid col-sm-4 col-8' />
              </Navbar.Brand>
            </Col>

            <Col className='centersection d-none d-md-block'>
              <div className=' d-flex '>
              <AsyncTypeahead
                filterBy={filterBy}
                id="async-example"
                className="w-100 "
                isLoading={isLoading}
                labelKey="name"
                minLength={1}
                onChange={() => setQuery([])}
                onSearch={handleSearch}
                options={searchResult}
                placeholder="Search Products..."
                renderMenuItemChildren={(item) => (
                <>
                <Link className=" text-decoration-none " style={{color:"black"}}
                    to={`/singleproduct/${item.sku}/${item.unique_id}`}>
                    <div className='suggestion d-flex'>
                      <img
                        src={item.product_images[0].product_image_url}
                        style={{
                          height: "24px",
                          marginRight: "10px",
                          width: "24px",
                        }}
                      />
                      <div className='suggestiontext'>{item.name}</div>
                    </div>
                </Link>
                </>
                )}
                selected={query}
              />
              <Button className='search-icon rounded-end-2 rounded-start-0'
                onClick={handleProductListSearch}>
                <img src={search} alt="Search" />
              </Button>
              </div>
            </Col>

            <Col className=' rightsection d-flex align-items-center gap-3 gap-sm-4 justify-content-end '>
              <Nav.Link href='#wishlist'>
                <div className='wishlist-container'>
                  <Image src={wishlist} className=' img-fluid wishlist-icon' />
                  <div className='wishlist-count'>0</div>
                </div>
              </Nav.Link>

              <Nav.Link href='/cart'>
                <div className='shopping-cart-container'>
                  <Image src={shopping_cart} className='img-fluid shopping-cart-icon' />
                  <div className='shopping-cart-count'>0</div>
                </div>
              </Nav.Link>

              <div className=' Signup d-flex align-items-center navbar navbar-expand-md position-relative dropdown ' aria-expanded="false">
                <Nav.Link href='#user' onClick={() => setShow(true)} className=''>
                  <div className='user-container'><Image src={usericon} className=' img-fluid user-icon' /></div>
                </Nav.Link>
                <div className='d-flex flex-column  small d-none d-xl-block'>
                  <p className='greet mb-0'>
                    {userData ? (`Welcome ${userData.name},`) : (`Hello there,`)}
                  </p>
                  <span className='signin'>
                    {userData ? ('ACCOUNT & ORDER') : ('SIGN IN/REGISTER')}
                  </span>
                </div>
                <div className=' p-0 dropdown-content dropdown-menu position-md-static' id="SignupDropdown" >
                  <ListGroup as="ul" className=' dropdown-item p-0 '>
                    {!userData ?
                      (<ListGroup.Item as="li" className=' px-2'>
                        <Button onClick={() => setShow(true)} className=' text-center bg-primary text-light border-0 rounded-5 py-2 px-3 '>Login/Register</Button>
                      </ListGroup.Item>) :
                      (<ListGroup.Item as="li" className=' px-2'>
                        <a href='/profile' className=' d-flex align-items-center gap-2 text-black text-decoration-none '>
                          <Image src={usericon} className=' img-fluid' style={{ width: "28px", height: "28px" }} />
                          <p className=' m-0 ' style={{ fontSize: "15px", fontWeight: "500", color: "#0036FF", textTransform: "capitalize" }}>
                            {userData.name}
                            <div style={{ fontSize: "13px", color: "black", fontWeight: "500" }}>View Profile</div>
                          </p>
                        </a>
                      </ListGroup.Item>)
                    }
                    {data.map((d, i) => (
                      <a href={`/${d.link}`} key={i} className=' text-decoration-none '>
                        <ListGroup.Item as="li" className='dropdown-item '>{d.item}</ListGroup.Item>
                      </a>
                    ))}
                    {userData &&
                      (<ListGroup.Item as="li" className=' px-2'>
                        <Button onClick={handleLogout} className=' text-center bg-primary text-light border-0 rounded-5 p-1 w-100 '>Logout</Button>
                      </ListGroup.Item>)}
                  </ListGroup>
                </div>
              </div>
            </Col>
          </Row>
          <Signuppop show={show} setShow={setShow} onHide={() => setShow(false)} />

          <Row>
            <Offcanvas show={showList} onHide={handleHamburgerClose}>
              <Offcanvas.Header closeButton className='col-12 justify-content-end '>

              </Offcanvas.Header>
              <Offcanvas.Body className='d-flex justify-content-center '>
                <ul className='list-unstyled w-75 d-flex flex-column gap-3 '>
                  <li className='text-center bg-primary text-light rounded-5 py-2 px-3 '
                    onClick={() => setShow(true)}>
                    Login/Register
                  </li>
                  {data.map((d, i) => (
                    <a key={i} href={`/${d.link}`} className=' text-decoration-none text-dark'>
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
                  <img src={search} alt="Search" />
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
