import axios from "axios";

const axiosWithoutAuth = axios.create({
    baseURL: 'http://localhost:8088/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

const API_URL = "http://localhost:8088/api/v1/auth/";
export const register = async (fistName: string, 
    lastName: string, 
    email: string,
    password: string, 
    role: string = "USER") => {
    const data = JSON.stringify({
        "firstName": fistName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "role": role
        });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8088/api/v1/auth/register',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

    const response =await axiosWithoutAuth.request(config); 
    return response;        
}

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(API_URL + "login", {
            email,
            password
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
}

export const activate = async (token: string) => {
    try {
        const response = await axios.get(API_URL + "activate?token=" + token);
        return response;
    } catch (error: any) {
        return error.response.data;
    }
}