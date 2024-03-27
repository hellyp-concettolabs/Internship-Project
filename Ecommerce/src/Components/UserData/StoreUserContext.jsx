import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        // Get user data from localStorage or use an empty object if not found
        const savedUserData = localStorage.getItem("userData");
        try {
            return savedUserData ? JSON.parse(savedUserData) : {};
          } catch (error) {
            console.error("Error parsing user data:", error);
            return {};
          }
      });
      useEffect(() => {
        // Save user data to localStorage whenever it changes
        localStorage.setItem("userData", JSON.stringify(userData));
      }, [userData]);
    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
};
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
