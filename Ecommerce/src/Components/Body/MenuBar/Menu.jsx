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
  console.log(data)
},[data])

  const [hoveredMenu, setHoveredMenu] = useState(new Array(data.length).fill(false));

  const handleMenuHover = (i) => {
    const newHoverState = [...hoveredMenu];
    newHoverState.fill(false);
    newHoverState[i] = true;
    setHoveredMenu(newHoverState);
  };

  const handleMenuLeave = () => {
    setHoveredMenu(new Array(data.length).fill(false));
  };
  const [hoveredSubMenu, setHoveredSubMenu] = useState(new Array(data.length).fill(false));

  const handleSubMenuHover = (submenu) => {
    const newSubHoverState = [...hoveredSubMenu];
    newSubHoverState.fill(false);
    newSubHoverState[submenu] = true;
    setHoveredSubMenu(newSubHoverState);
  };

  const handleSubMenuLeave = () => {
    setHoveredSubMenu(new Array(data.length).fill(false));
  };

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
                <ul className="list-unstyled p-2">
                  {d.subcategory.map((submenu) => (
                    <div key={submenu.id} className=" d-flex gap-2 ">
                      <div className="submenu">
                        <li key={submenu.id} onMouseEnter={() => handleSubMenuHover(submenu.id)}
                          onMouseLeave={handleSubMenuLeave}>
                        <span className="">{submenu.title}</span>
                        </li>
                      </div>
                      <div id={submenu} className="submenusubcat">
                      {(hoveredSubMenu[submenu.id])&& (
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
                </ul>
              </div>
            )}
          </Col>
        ))}

      </Row>
    </Container>
  );
}

export default Menu;





// // import { Container,Row, Col, Image } from "react-bootstrap"
// // import HomeKitchen from "../../../assets/HomeKitchen.png"
// // import HealthBeauty from "../../../assets/HealthBeauty.png"
// // import Electronics from "../../../assets/Electronics.png"
// // import ToysCrafts from "../../../assets/ToysCrafts.png"
// // import SportsLeisure from "../../../assets/SportsLeisure.png"
// // import Clearance from "../../../assets/Clearance.png"
// // import '../MenuBar/menu.scss'
// // import { useState } from "react"
// // function Menu() {

// //   const data = [
// //     {
// //       img:HomeKitchen,
// //       menu:`Home & Kitchen`,
// //       category: {Home : ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix'], Kitchen : "", Office:""},
// //     },
// //     {
// //       img:HealthBeauty,
// //       menu:`Health & Beauty`,
// //       category: {Home : ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix'], Kitchen : ["hello"], Office:""},
// //       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
// //     },
// //     {
// //       img:Electronics,
// //       menu:`Electronics`,
// //       category: ['Home', 'Kitchen', 'Office'],
// //       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
// //     },
// //     {
// //       img:ToysCrafts,
// //       menu:`Toys & Crafts`,
// //       category: ['Home', 'Kitchen', 'Office'],
// //       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
// //     },
// //     {
// //       img:SportsLeisure,
// //       menu:`Sports & Leisure`,
// //       category: ['Home', 'Kitchen', 'Office'],
// //       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
// //     },
// //     {
// //       img:Clearance,
// //       menu:`Clearance`,
// //       category: ['Home', 'Kitchen', 'Office'],
// //       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
// //     },
// //     {
// //       img:Clearance,
// //       menu:`View more`,
// //     },
// //   ]
// //   const [hover, setHover] = useState(new Array(data.length).fill(false));

// //   const handleHover = (index) => {
// //     const newHoverState = [...hover];
// //     newHoverState.fill(false);
// //     newHoverState[index] = true;
// //     setHover(newHoverState);
// //   };
// //   const handleMouseLeave = () => { setHover(new Array(data.length).fill(false)); };
// //   return (
// //     <Container fluid  className=" container-lg mb-4">
// //       <Row className=" d-flex align-items-center justify-content-center">
// //         <Col className=" d-none d-xl-block "></Col>
// //         <Col className=" d-none d-lg-block "></Col>
// //         {data.map((d,index) => (
// //             <Col key={d.menu} className=" d-flex flex-column text-center position-relative "onMouseEnter={() => handleHover(index)}
// //             onMouseLeave={handleMouseLeave}>
// //               <Image src={d.img} className=" img-fluid "/>
// //               <span className=" mt-1">{d.menu}</span>
// //               {hover[index] && (
// //                 <div className=" Categories position-absolute w-100 h-100  bg-light-subtle">
// //                       <ul className=" list-unstyled p-2">
// //                       {Object.keys(d.category).map((c,i) => (
// //                         <div key={c} className=" d-flex ">
// //                           <div onMouseEnter={() => handleHover(index)} onMouseLeave={handleMouseLeave}>
// //                             <li className="">
// //                               <span className="">{c}</span>
// //                             </li>
// //                           </div>
// //                           {/* <div>
// //                            {hover[i] && (
// //                             <div>
// //                               <ul className=" list-unstyled ">
// //                               {Object.values(d.category).map((s) => (
// //                               <li key={c}>
// //                                 <span>{s}</span>
// //                               </li>
// //                               ))}
// //                               </ul>
// //                             </div>
// //                            )}
// //                           </div> */}
// //                         </div>
// //                       ))}
// //                       </ul>
// //                 </div>
// //               )}
// //             </Col>
// //         ))}
// //         <Col className=" d-none d-xl-block "></Col>
// //         <Col className=" d-none  d-lg-block "></Col>
// //       </Row>
// //     </Container>
// //   )
// // }

// // export default Menu
