import { OrderRequest } from "@/types";
import { OrderResponseDTO } from "@/types";
import axios from "axios";

const placeOrder = async (order: OrderRequest): Promise<OrderResponseDTO> => {
    try {
        const response = await axios.post<OrderResponseDTO>('/orders', order);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Handle Axios-specific errors
          if (error.response) {
            // Server responded with a status other than 2xx
            console.error('Error response:', error.response);
            throw new Error(error.response.data.message || 'An error occurred while placing the order.');
          } else if (error.request) {
            // Request was made but no response was received
            console.error('Error request:', error.request);
            throw new Error('No response received from the server.');
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
            throw new Error(error.message);
          }
        } else {
          // Handle non-Axios errors
          console.error('Error:', error);
          throw new Error('An unexpected error occurred.');
        }
      }
}
export default placeOrder;
