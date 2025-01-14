import { jwtDecode } from "jwt-decode";

const TOKEN = "token";

export const setTokenInLocalStorage = (jwtToken) => {
    localStorage.setItem(TOKEN, jwtToken);
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => {
    try {
        const token = localStorage.getItem(TOKEN);
        return token;
    } catch (error) {
        return null;
    }
};

export const getUser = () => {
    try {
        const myToken = getToken();
        if (!myToken) {
            return null;
        }
        return jwtDecode(myToken); //* decodedToken isBusiness, isAdmin etc...
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};
