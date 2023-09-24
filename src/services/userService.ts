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
        if (response.status === 201) {
            console.log("Sign in succeeded!");
            alert("Sign in succeeded");
        } else {
            console.log("Sign in failed:", response.data)
        }
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized specifically
            console.log("Unauthorized: Please check your credentials");
            alert("Unauthorized: Please check your credentials");
        } else {
            console.error("Error during sign-in:", error);
            alert("An error occurred during sign-in");
        }
    }
}