import axios from "axios";
const API_URL = "http://localhost:8088/api/v1/pharmacies";

// register a pharmacy

// Define the DTOs
export interface AddressDTO {
  street: string;
  city: string;
  zip: string;
}

export interface PharmacyResponse {
  id: number;
  name: string;
  telephone: string;
  address: AddressDTO;
}

export interface PageResponse<T> {
  content: T[];
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

export const registerPharmacy = async (    name: string,
    telephone: string,
    street: string,
    city: string,
    postalCode: string) => {
   let data = {
    name: name,
    telephone: telephone,
    address: {
      street: street,
      city: city,
      postalCode: postalCode
    }
   }
    return axios.post(API_URL, data);
}

// get all pharmacies
export const getPharmacies = async (page: number = 0, size: number = 10): Promise<PageResponse<PharmacyResponse>> => {
  try {
    const response = await axios.get<PageResponse<PharmacyResponse>>(API_URL, {
      params: { page, size },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error fetching pharmacies:', error);
    if (error.response) {
      // Server responded with a status other than 2xx
      throw new Error(`Error: ${error.response.status} - ${error.response.data.message}`);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Error: No response received from the server.');
    } else {
      // Something else happened while setting up the request
      throw new Error(`Error: ${error.message}`);
    }
  }
};

// get pharmacy by id
export const getPharmacyById = async (id: string): Promise<PharmacyResponse> => {
  try {
    const response = await axios.get<PharmacyResponse>(`${API_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // Request made and server responded with a status code that falls out of the range of 2xx
      throw new Error(`Error: ${error?.response.status} - ${error?.response.data.message}`);
    } else if (error.request) {
      // Request made but no response received
      throw new Error('Error: No response received from the server.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(`Error: ${error.message}`);
    }
  }
};