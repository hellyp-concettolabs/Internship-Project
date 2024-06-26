import { Navbar, Row, Col, Nav, Form, Button, Container, Image, ListGroup, Offcanvas, Spinner } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserContext, userResultDetails } from '../UserData/StoreUserContext';
import eCart from "../../assets/eCart.svg"
import search from '../../assets/search-normal.png'
import wishlist from '../../assets/wishlist.png'
import shopping_cart from '../../assets/shopping-cart.png'
import usericon from '../../assets/user.png'
import "../Header/header.scss"
import Signuppop from './Signuppop';
import { Domain_Base_Url } from '../../app/DomainBaseUrl/BaseUrl';

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
      link: `orders`
    },
    {
      item: `Address`,
      link: `address`
    },
    {
      item: `Notifications`,
      link: `notification`
    },
    {
      item: `Wishlists`,
      link: `wishlist`
    },
  ]
  const { userData , setUserData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartLoading,setIsCartLoading] = useState(false);
  const [searchResult,setSearchResult] = useState([])
  const [query,setQuery] = useState('');
  const [searchText,setSearchText] = useState("");
  
  const [cartProductCount,setCartProductCount] = useState("");
  const cartProductQuantity = useSelector((state) => state.cartCount.count);
  const [wishListProductCount,setWishListProductCount] = useState("");
  const wishListProductQuantity = useSelector((state) => state.wishListCount.count);
  const navigate = useNavigate();

  useEffect(() => {
    cartQuantity();
  },[cartProductQuantity,localStorage.getItem("token")]);

  useEffect(() => {
    wishlistQuantity();
  },[wishListProductQuantity,localStorage.getItem("token")]);

//For Logout
  const handleLogout = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    axios.get(`${Domain_Base_Url}/logout`)
      .then(response => {
        // console.log(response);
        if (response.data.status === 200) {
          localStorage.removeItem("token");
          setUserData(userResultDetails);
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
      const response = await axios.post(`${Domain_Base_Url}/product/list`,{
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

  const cartQuantity = async () => {
    setIsCartLoading(true);
    if(localStorage.getItem("token") !== null){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    axios.get(`${Domain_Base_Url}/cart-item-count`)
      .then(response => {
        //console.log(response);
        if (response.data.status === 200) {
          setCartProductCount(response.data.result);
          setIsCartLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
    }else{
      setIsCartLoading(false);
    }
  }

  const wishlistQuantity = async () => {
    setIsCartLoading(true);
    if(localStorage.getItem("token") !== null){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    axios.get(`${Domain_Base_Url}/wishlist-count`)
      .then(response => {
        //console.log(response);
        if (response.data.status === 200) {
          setWishListProductCount(response.data.result);
          setIsCartLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
    }else{
      setIsCartLoading(false);
    }
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
                id="searchResult"
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
                <button className=" text-decoration-none bg-transparent border-0 w-100" style={{color:"black"}}
                    onClick={() => navigate(`/singleproduct/${item.slug}/${item.unique_id}/${item.sku}`)}>
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
                </button>
                </>
                )}
                selected={query ? [query] : []}
              />
              <Button className='search-icon rounded-end-2 rounded-start-0'
                onClick={handleProductListSearch}>
                <img src={search} alt="Search" />
              </Button>
              </div>
            </Col>

            <Col className=' rightsection d-flex align-items-center gap-3 gap-sm-4 justify-content-end '>
              <button className=' p-0 bg-transparent border-0 ' onClick={() => { localStorage.getItem("token") === null ? (setShow(true)) :
                        navigate(`/wishlist`)}}>
                <div className='wishlist-container'>
                  <Image src={wishlist} className=' img-fluid wishlist-icon' />
                  <div className='wishlist-count'>
                    {localStorage.getItem("token") === null ? 0 : 
                    (isCartLoading ? 
                      <div className=" d-flex justify-content-center align-items-center ">
                          <Spinner animation="border" variant='light' size='sm'/>
                      </div> :
                    wishListProductCount.wishlistcount)}
                  </div>
                </div>
              </button>

              <Nav.Link href='/cart'>
                <div className='shopping-cart-container'>
                  <Image src={shopping_cart} className='img-fluid shopping-cart-icon' />
                  <div className='shopping-cart-count'>
                    {localStorage.getItem("token") === null ? 0 : 
                    (isCartLoading ? 
                      <div className=" d-flex justify-content-center align-items-center ">
                          <Spinner animation="border" variant='light' size='sm'/>
                      </div> :
                    cartProductCount.cart_item_count)}
                  </div>
                </div>
              </Nav.Link>

              <div className=' Signup d-flex align-items-center navbar navbar-expand-md position-relative dropdown ' aria-expanded="false">
                <Button onClick={() => setShow(true)} className=' bg-transparent border-0 p-0 '>
                  <div className='user-container'><Image src={usericon} className=' img-fluid user-icon' /></div>
                </Button>
                {localStorage.getItem("token") === null ?
                  (<div className='d-flex flex-column  small d-none d-xl-block'>
                    <div className='greet mb-0'>
                      Hello there,
                    </div>
                    <span className='signin'>
                      SIGN IN/REGISTER
                    </span>
                  </div>):
                (localStorage.getItem("token") !== null && userData.name !== "" ? 
                  (<div className='d-flex flex-column  small d-none d-xl-block'>
                    <div className='greet mb-0'>
                      Welcome {userData.name},
                    </div>
                    <span className='signin'>
                      ACCOUNT & ORDER
                    </span>
                  </div>) : 
                  <div className=" d-flex justify-content-center align-items-center ">
                    <Spinner animation="border" variant='primary' />
                  </div> ) }
                <div className={` p-0  dropdown-menu position-md-static ${userData.name !== "" ? 'dropdown-after-login' : 'dropdown-before-login' }`} id="SignupDropdown" >
                  <ListGroup as="ul" className=' dropdown-item p-0 '>
                    {userData.name === "" ?
                      (<ListGroup.Item as="li" className=' px-2'>
                        <Button onClick={() => setShow(true)} className=' text-center bg-primary text-light border-0 rounded-5 py-2 px-3 '>Login/Register</Button>
                      </ListGroup.Item>) :
                      (<button onClick={() => {navigate(`/profile`)}} className=' text-decoration-none border-0 bg-transparent p-0'>
                      <ListGroup.Item as="li" className='d-flex justify-content-center align-items-center gap-2 text-black px-2'>
                          <Image src={usericon} className=' img-fluid' style={{ width: "28px", height: "28px" }} />
                          <div className=' m-0 ' style={{ fontSize: "15px", fontWeight: "500", color: "#0036FF", textTransform: "capitalize" }}>
                            {userData.name}
                            <div style={{ fontSize: "13px", color: "black", fontWeight: "500" }}>View Profile</div>
                          </div>
                      </ListGroup.Item>
                      </button>)
                    }
            
                    {data.map((d, i) => (
                      <button onClick={() => { localStorage.getItem("token") === null ? (setShow(true)) :
                        navigate(`/${d.link}`)}} key={i} className=' text-decoration-none border-0 bg-light p-0 '>
                        <ListGroup.Item as="li" className='dropdown-item '>{d.item}</ListGroup.Item>
                      </button>
                    ))}
                    {userData.name !== "" &&
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
                  {data.map((d) => (
                    <a key={d.link} href={`/${d.link}`} className=' text-decoration-none text-dark'>
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
                <Form.Control id='sm_product_search' type="text" placeholder="Search Products" className='rounded-start-2 rounded-end-0' />
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
