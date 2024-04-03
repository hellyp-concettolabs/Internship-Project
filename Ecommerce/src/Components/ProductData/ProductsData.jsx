import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserData/StoreUserContext";
import { ProductContext } from "./StoreProductContext";
import axios from "axios";


function ProductsData() {

    const {userData} = useContext(UserContext);
    const [requestMade,setRequestMade] = useState(false);
    const {setProductData} = useContext(ProductContext);
    const {productData} = useContext(ProductContext);

    useEffect( () => {
      const fetchData = async() =>{
        if(!requestMade){
         axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
         await axios.post(' https://bargainfox-dev.concettoprojects.com/api/product/list',{
            per_page:"100"
         })
        .then(response => {
          setProductData(response.data.result.data);
          console.log(response.data);
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
      console.log(productData)
    },[productData])

  return (
    <>
      
    </>
  )
}

export default ProductsData
