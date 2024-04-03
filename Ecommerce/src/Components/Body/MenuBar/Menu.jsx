import { Container, Row, Col, Image } from "react-bootstrap"
import '../MenuBar/menu.scss'
import { useEffect, useState } from "react"
import axios from "axios"

function Menu() {

const [data,setData] = useState([]);
const [requestMade,setRequestMade] = useState(false);

useEffect( () => {
  const fetchData = async() =>{
    if(!requestMade){
     await axios.get(' https://bargainfox-dev.concettoprojects.com/api/category-list')
    .then(response => {
      setData(response.data.result);
      setRequestMade(true);
    })
    .catch(error =>{
      console.error('Error making GET request:', error);
    })
  }
}
  fetchData();
}, [requestMade])

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

   const handleSubmenu = (category,sub_category) =>{
    return () => {
     axios.post(' https://bargainfox-dev.concettoprojects.com/api/category-detail-list',
     {
      category: {category},
      sub_category: {sub_category}
     })
     .then(reponse =>{
      console.log(reponse.data);
     })
     .catch(error => {
      console.error('Error making POST request:', error);
    });
   }}

  return (
    <Container fluid className=" container-lg mb-4">
      <Row className="menusection">

      {data.map((d) => (
          <Col key={d.id} className="menulist" onMouseEnter={() => handleMenuHover(d.id)} 
            onMouseLeave={handleMenuLeave}>
            <Image src={d.thumbnail_image_url} className="img-fluid" />
            <span className="mt-1">{d.title}</span>
            {hoveredMenu[d.id] && (
              <div className="Categories">
                  {d.subcategory.map((submenu) => (
                    <div key={submenu.id} className=" d-flex gap-2 "
                      onMouseEnter={() => handleMenuHover(d.id,submenu.id)} onMouseLeave={handleMenuLeave}>
                        <div className="submenu">
                          <button onClick={handleSubmenu(d.seo_title,submenu.seo_title)}
                              style={{border:"0", backgroundColor:"white"}}>
                            <span className="">{submenu.title}</span>
                          </button>
                        </div>
                        <div className="submenusubcat">
                          {(hoveredMenu[submenu.id])&& (
                              <ul className="list-unstyled">
                               {submenu.collection.map((category) => (
                                 <li key={category.id}>
                                  <span>{category.title}</span>
                                 </li>
                               ))}
                              </ul>
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
  );
}

export default Menu;