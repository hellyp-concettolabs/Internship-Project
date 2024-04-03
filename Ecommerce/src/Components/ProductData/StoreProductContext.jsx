import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const ProductContext = createContext();

export const ProductProvider = ({children}) =>{
    const [productData, setProductData] = useState([]);
      useEffect(() => {
        // Save user data to localStorage whenever it changes
        localStorage.setItem("productData", [productData]);
      }, [productData]);
    return (
      <ProductContext.Provider value={{ productData, setProductData }}>
        {children}
      </ProductContext.Provider>
    );
};
ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };