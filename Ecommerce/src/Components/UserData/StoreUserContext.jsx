import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import axios from "axios";

export const UserContext = createContext();

export const userResultDetails = {
  avatar: null,
  avatar_url: "",
  checkout_customer_id: null,
  checkout_status: null,
  country_code: "",
  created_at: "",
  csv_accept_email_marketing: 0,
  csv_accept_sms_marketing: 0,
  csv_company: null,
  csv_filename: null,
  csv_shopify_import: 0,
  csv_tags: null,
  csv_total_order: 0,
  csv_total_spent: "",
  customer_id: "",
  deleted_at: null,
  email: "",
  email_verified_at: null,
  id: null,
  is_admin_vendor: 0,
  is_block: 0,
  is_new_user: null,
  is_online: 0,
  is_update_progress: 0,
  mobile: "",
  name: "",
  next_token: "",
  role_id: 3,
  social_id: null,
  social_type: null,
  step: null,
  token: "",
  updated_at: "",
};

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(userResultDetails);

      useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token)
        if (token) {
          getCurrentUser();
        }
      }, []);

      const getCurrentUser = async () => {
        try {
          const response = await axios.get(' https://bargainfox-dev.concettoprojects.com/api/user-detail', {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
          if (response.status === 200) {
            setUserData(response.data.result);
          } else {
            alert("User not exists");
          }
        } catch (error) {
          console.log("Error", error);
        }
      };

      console.log(userData);
    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
};
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
