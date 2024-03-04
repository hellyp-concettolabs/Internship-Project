import { Container,Row, Col, Image } from "react-bootstrap"
import HomeKitchen from "../../../assets/HomeKitchen.png"
import HealthBeauty from "../../../assets/HealthBeauty.png"
import Electronics from "../../../assets/Electronics.png"
import ToysCrafts from "../../../assets/ToysCrafts.png"
import SportsLeisure from "../../../assets/SportsLeisure.png"
import Clearance from "../../../assets/Clearance.png"
import '../MenuBar/menu.scss'
function Menu() {
  return (
    <Container fluid  className=" container-lg mb-4">
      <Row className=" d-flex align-items-center justify-content-center">
        <Col className=" d-none d-xl-block "></Col>
        <Col className=" d-none d-lg-block "></Col>
        <Col className=" d-flex flex-column text-center dropdown  Home" >
            <Image src={HomeKitchen} className=" img-fluid "/>
            <span className=" mt-1">Home & Kitchen</span>
              <div className="dropdown-menu dropdown-content">
              <ul className=" list-unstyled ">
                <li className=" dropdown-item Home d-flex ">Home
                  <div className=" mx-3 ">
                    <li>Appliances & Accessories</li>
                    <li>Cleaning & Household</li>
                  </div>
                </li>
                <li className=" dropdown-item Kitchen">Kitchen</li>
                <li className=" dropdown-item Office">Office</li>
              </ul>
              </div>
        </Col>
        <Col className=" d-flex flex-column text-center dropdown  Home" >
            <Image src={HealthBeauty} className=" img-fluid "/>
            <span className=" mt-1">Health & Beauty</span>
            <div className=" dropdown-menu dropdown-content">
              <ul className=" list-unstyled ">
                <li className=" dropdown-item ">Health</li>
                <li className=" dropdown-item ">Beauty</li>
                <li className=" dropdown-item ">Baby & Kids</li>
              </ul>
            </div>
        </Col>
        <Col className=" d-flex flex-column text-center dropdown Home">
            <Image src={Electronics} className=" img-fluid"/>
            <span className=" mt-1 ">Electronics</span>
            <div className=" dropdown-menu dropdown-content">
              <div className=" bg-primary rounded-circle "></div>
              <ul className=" list-unstyled ">
                <li className=" dropdown-item ">Computing</li>
                <li className=" dropdown-item ">Appliances</li>
              </ul>
            </div>
        </Col>
        <Col className=" d-flex flex-column text-center d-none d-md-block dropdown ToysCrafts">
            <Image src={ToysCrafts} className=" img-fluid"/>
            <span className=" mt-1 ">Toys & Crafts</span>
            <div className=" dropdown-menu dropdown-content">
              <ul className=" list-unstyled ">
                <li className="dropdown-item  ">Toys & Games</li>
                <li className=" dropdown-item ">Carfts & Party</li>
              </ul>
            </div>
        </Col>
        <Col className=" d-flex flex-column text-center d-none d-md-block dropdown ToysCrafts">
            <Image src={SportsLeisure} className=" img-fluid"/>
            <span className="  mt-1 ">Sports & Leisure</span>
            <div className=" dropdown-menu dropdown-content">
              <div className=" bg-primary rounded-circle "></div>
              <ul className=" list-unstyled ">
                <li className=" dropdown-item ">Sports and Games</li>
                <li className=" dropdown-item ">Travel & Camping</li>
                <li className=" dropdown-item ">Garden & DIY</li>
                <li className=" dropdown-item ">Entertainment</li>
              </ul>
            </div>
        </Col>
        <Col className=" d-flex flex-column text-center d-none d-md-block">
            <Image src={Clearance} className=" img-fluid"/>
            <span className=" mt-1 ">Clearance</span>
        </Col>
        <Col className=" d-flex flex-column text-center ">
            <Image src={Clearance} className=" img-fluid"/>
            <span className=" mt-1 ">View more</span>
        </Col>
        <Col className=" d-none d-xl-block "></Col>
        <Col className=" d-none  d-lg-block "></Col>
      </Row>
    </Container>
  )
}

export default Menu



// import { Container,Row, Col, Image } from "react-bootstrap"
// import HomeKitchen from "../../../assets/HomeKitchen.png"
// import HealthBeauty from "../../../assets/HealthBeauty.png"
// import Electronics from "../../../assets/Electronics.png"
// import ToysCrafts from "../../../assets/ToysCrafts.png"
// import SportsLeisure from "../../../assets/SportsLeisure.png"
// import Clearance from "../../../assets/Clearance.png"
// import '../MenuBar/menu.scss'
// import { useState } from "react"
// function Menu() {

//   const data = [
//     {
//       img:HomeKitchen,
//       menu:`Home & Kitchen`,
//       category: {Home : ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix'], Kitchen : "", Office:""},
//     },
//     {
//       img:HealthBeauty,
//       menu:`Health & Beauty`,
//       category: {Home : ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix'], Kitchen : ["hello"], Office:""},
//       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
//     },
//     {
//       img:Electronics,
//       menu:`Electronics`,
//       category: ['Home', 'Kitchen', 'Office'],
//       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
//     },
//     {
//       img:ToysCrafts,
//       menu:`Toys & Crafts`,
//       category: ['Home', 'Kitchen', 'Office'],
//       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
//     },
//     {
//       img:SportsLeisure,
//       menu:`Sports & Leisure`,
//       category: ['Home', 'Kitchen', 'Office'],
//       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
//     },
//     {
//       img:Clearance,
//       menu:`Clearance`,
//       category: ['Home', 'Kitchen', 'Office'],
//       cat1: ['Appliances & Accessories','Cleaning & Household', 'Lighting', 'Bathroom', 'Bedroom', 'Furnishings','Decor','Pets','Mix']
//     },
//     {
//       img:Clearance,
//       menu:`View more`,
//     },
//   ]
//   const [hover, setHover] = useState(new Array(data.length).fill(false));

//   const handleHover = (index) => {
//     const newHoverState = [...hover];
//     newHoverState.fill(false);
//     newHoverState[index] = true;
//     setHover(newHoverState);
//   };
//   const handleMouseLeave = () => { setHover(new Array(data.length).fill(false)); };
//   return (
//     <Container fluid  className=" container-lg mb-4">
//       <Row className=" d-flex align-items-center justify-content-center">
//         <Col className=" d-none d-xl-block "></Col>
//         <Col className=" d-none d-lg-block "></Col>
//         {data.map((d,index) => (
//             <Col key={d.menu} className=" d-flex flex-column text-center position-relative "onMouseEnter={() => handleHover(index)}
//             onMouseLeave={handleMouseLeave}>
//               <Image src={d.img} className=" img-fluid "/>
//               <span className=" mt-1">{d.menu}</span>
//               {hover[index] && (
//                 <div className=" Categories position-absolute w-100 h-100  bg-light-subtle">
//                       <ul className=" list-unstyled p-2">
//                       {Object.keys(d.category).map((c,i) => (
//                         <div key={c} className=" d-flex ">
//                           <div onMouseEnter={() => handleHover(index)} onMouseLeave={handleMouseLeave}>
//                             <li className="">
//                               <span className="">{c}</span>
//                             </li>
//                           </div>
//                           {/* <div>
//                            {hover[i] && (
//                             <div>
//                               <ul className=" list-unstyled ">
//                               {Object.values(d.category).map((s) => (
//                               <li key={c}>
//                                 <span>{s}</span>
//                               </li>
//                               ))}
//                               </ul>
//                             </div>
//                            )}
//                           </div> */}
//                         </div>
//                       ))}
//                       </ul>
//                 </div>
//               )}
//             </Col>
//         ))}
//         <Col className=" d-none d-xl-block "></Col>
//         <Col className=" d-none  d-lg-block "></Col>
//       </Row>
//     </Container>
//   )
// }

// export default Menu
