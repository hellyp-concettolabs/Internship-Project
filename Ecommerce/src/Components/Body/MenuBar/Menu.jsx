import { Container, Row, Col, Image, Spinner } from "react-bootstrap"
import '../MenuBar/menu.scss'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

function Menu() {

const [data,setData] = useState([]);
const[loading,setLoading] = useState(false);
useEffect( () => {
  const fetchData = async() =>{
    setLoading(true);
     await axios.get(' https://bargainfox-dev.concettoprojects.com/api/category-list')
    .then(response => {
      setData(response.data.result);
      setLoading(false);
    })
    .catch(error =>{
      console.error('Error making GET request:', error);
    })
}
  fetchData();
}, [])

useEffect( () =>{
  console.log(data);
},[data])

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
              <div className="Categories">
                  {d.subcategory.map((submenu) => (
                    <div key={submenu.id} className=" d-flex gap-2 "
                      onMouseEnter={() => handleMenuHover(d.id,submenu.id)} onMouseLeave={handleMenuLeave}>
                        <div className="submenu">
                          <Link
                            className="text-decoration-none link"
                            to={`${d.slug}/${submenu.slug}`}>
                              <span className="">{submenu.title}</span>
                          </Link>
                        </div>
                        <div className="submenusubcat">
                          {(hoveredMenu[submenu.id])&& (
                            <div>
                              <ul className="list-unstyled">
                               {submenu.collection.map((category) => (
                                 <li key={category.id}>
                                  <Link
                                    className=" text-decoration-none "
                                    to={`${d.slug}/${submenu.slug}/${category.slug}`}>
                                    <span>{category.title}</span>
                                  </Link>
                                 </li>
                               ))}
                              </ul>
                            </div>
                          )}
                      </div>
                    </div>
                  ))}
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