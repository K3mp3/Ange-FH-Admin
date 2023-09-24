import type { IUser } from "@/models/IUser";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function registerUser(user: IUser) {
    try {
        const response = await axios.post<IUser>(`${BASE_URL}/users/createuser`, user);
        console.log(response);      
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function signInUser(user: IUser) {
    try {
        const response = await axios.post<IUser>(`${BASE_URL}/users/loginuser`, user);
        console.log(response);      
        return response.data;
    } catch (error) {
        console.log(error);
    }
}