import axios from "axios";

const API_URL = "http://localhost:8080/admin";

export const createOrder = async (orderData) => {
    try {
      const response = await axios.post(`${API_URL}/`, orderData);
      return response.data;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  };

  export const getOrdersByShop = async (shopId) => {
    try {
      const response = await axios.get(`${API_URL}/shop/${shopId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching orders by shop:", error);
      throw error;
    }
  };

  export const getOrdersByUser = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching orders by user:", error);
      throw error;
    }
  };
