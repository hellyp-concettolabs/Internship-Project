import { Container, Row, Col, Image, Spinner } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import './menu.scss'
import {Domain_Base_Url} from "../../../app/DomainBaseUrl/BaseUrl.js"

function Menu() {

  const [data,setData] = useState([]);
  const[loading,setLoading] = useState(false);

  useEffect( () => {
    const fetchData = async() =>{
      try{
        setLoading(true);
        const response = await axios.get(`${Domain_Base_Url}/category-list`)
        setData(response.data.result);
        setLoading(false);
      }
      catch(error){
        console.error('Error making GET request for category menu:', error);
      }
    }
    fetchData();
  }, [])

  const [hoveredMenu, setHoveredMenu] = useState(new Array(data.length).fill(false));

  const handleMenuHover = (id,submenu) => {
    const newHoverState = [...hoveredMenu];
    newHoverState.fill(false);
    newHoverState[id] = true;
    for(let i = 0; i<data.length - 1 ; i++){
      if(id+1 === data[i].subcategory[0].id){
        newHoverState[data[i].subcategory[0].id] = true;
      }
      if(submenu >data[i].subcategory[0].id ){
        newHoverState[submenu] = true;
        newHoverState[data[i].subcategory[0].id] = false;
      }
    }
    setHoveredMenu(newHoverState);
  };

  const handleMenuLeave = () => {
    setHoveredMenu(new Array(data.length).fill(false));
  };


  return (
    <>
    {loading ? 
      <div className=" d-flex justify-content-center align-items-center ">
          <Spinner animation="border" variant="primary" />
      </div>:

      (<Container fluid className=" container-lg mb-4">
        <Row className="menusection">

        {data.map((d) => (
            <Col key={d.id} className="menulist" onMouseEnter={() => handleMenuHover(d.id)} 
              onMouseLeave={handleMenuLeave}>
              <Image src={d.thumbnail_image_url} className="img-fluid" />
              <Link className="text-decoration-none text-dark "
                  to={`${d.slug}`}>
                <span className="mt-1">{d.title}</span>
              </Link>
              {hoveredMenu[d.id] && (
                <div className="Categories d-flex gap-4 px-2 py-2 " style={{width:"390px", height:"360px"}}>
                  <div>
                    {d.subcategory.map((submenu) => (
                      <div key={submenu.id} 
                        onMouseEnter={() => {handleMenuHover(d.id,submenu.id)}} >
                          <div className="submenu py-0 ">
                            <Link
                              className="text-decoration-none link"
                              to={`${d.slug}/${submenu.slug}`}>
                                <span className="">{submenu.title}</span>
                            </Link>
                          </div>
                      </div>
                    ))}
                  </div>
                    <div className="submenusubcat" style={{width:"180px"}}>
                      {d.subcategory.map((submenu,i) => (
                        (hoveredMenu[submenu.id])&& (
                          <div key={i}>
                            <ul className="list-unstyled">
                             {submenu.collection.map((category) => (
                               <li key={category.id} className=" px-0 ">
                                <Link
                                  className=" text-decoration-none "
                                  to={`${d.slug}/${submenu.slug}/${category.slug}`}>
                                  <span>{category.title}</span>
                                </Link>
                               </li>
                             ))}
                            </ul>
                          </div>
                        )))}
                    </div>
                </div>
              )}
            </Col>
        ))}

        </Row>
    </Container>
    )}
  </>
  );
}

export default Menu;