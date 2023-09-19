import type { IUser } from "@/models/IUser";
import axios from "axios";

const BASE_URL = "http://localhost:3000/users/createuser";

export async function registerUser() {
    try {
        const response = await axios.post<IUser>(`${BASE_URL}`);

        console.log(response);        
    } catch (error) {
        console.log(error);
    }
}