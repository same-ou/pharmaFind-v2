import axios from "axios";
import { PageResponse } from "./PharmacyService";

axios.defaults.baseURL = "http://localhost:8088/api/v1/";

export type Image =  {
  imageUrl: string;
}

// Define the Product interface
export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  images?: Image[];
  categories?: number[];
  pharmacyId: number;
}



interface ErrorResponse {
  message: string;
  // Add other fields as necessary
}

// this function will fetch a product from the API based on the provided ID. If the product is found, it will return the product object. If an error occurs, it will return an ErrorResponse object with a message field describing the error.
export const getProduct = async (
  id: string
): Promise<Product | ErrorResponse> => {
  try {
    const response = await axios.get<Product>(`products/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return error.response.data as ErrorResponse;
    } else {
      return { message: "An unexpected error occurred" };
    }
  }
};

//this function will fetch all the product from teh api
export const getProducts = async (page: number = 0, size: number = 10): Promise<PageResponse<Product>> => {
  try {
    const response = await axios.get<PageResponse<Product>>("/products", {
      params: { page, size },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error: ${error.response.status} - ${error.response.data.message}`);
    } else if (error.request) {
      throw new Error('Error: No response received from the server.');
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};

// this function will save a new product to the API. It takes a Product object as input and returns a Promise that resolves to the saved Product object if successful, or an ErrorResponse object if an error occurs.
export const saveProduct = async (
  product: Product,
  images: File[] | null
): Promise<Product> => {
  if (images && images.length > 5) {
    throw new Error("You can upload a maximum of 5 images.");
  }

  const formData = new FormData();
  formData.append(
    "product",
    new Blob([JSON.stringify(product)], { type: "application/json" })
  );
  if (images) {
    Array.from(images).forEach((file) => {
      formData.append("images", file);
    });
  }

  const response = await axios.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getProductsByPharmacy = async (page: number = 0, size: number = 10): Promise<PageResponse<Product>> => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get<PageResponse<Product>>('/pharmacies/products', {
      params: { page, size },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error: ${error.response.status} - ${error.response.data.message}`);
    } else if (error.request) {
      throw new Error('Error: No response received from the server.');
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};