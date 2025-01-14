import { useState, useCallback } from "react";
import useAxios from "../../hooks/useAxios.js";
import { login, signup } from "../services/usersApiService.js";
import {
    getUser,
    removeToken,
    setTokenInLocalStorage,
} from "../services/localStorageService.js";
import { useUser } from "../providers/UserProvider.jsx";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel.js";
import normalizeUser from "../helpers/normalization/normalizeUser.js";

export default function useUsers() {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { user, setUser, setToken } = useUser();
    useAxios();

    const requestStatus = useCallback(
        (isLoading, errorMessage, users, user = null) => {
            setIsLoading(isLoading);
            setUsers(users);
            setUser(user);
            setError(errorMessage);
        },
        [setUser]
    );

    const handleLogin = useCallback(
        async (user) => {
            try {
                const token = await login(user);
                setTokenInLocalStorage(token);
                setToken(token);
                setUser(getUser());
                requestStatus(false, null, null, user);
                navigate(ROUTES.CARDS);
            } catch (error) {
                requestStatus(false, error, null);
            }
        },
        [navigate, requestStatus]
    );

    const handleLogout = useCallback(() => {
        try {
            removeToken();
            requestStatus(false, null, null);
            navigate(ROUTES.CARDS);
        } catch (error) {
            requestStatus(false, error, null);
        }
    }, [setUser]);

    const handleSignup = useCallback(
        async (user) => {
            try {
                const normalizedUser = normalizeUser(user);
                await signup(normalizedUser);
                await handleLogin({
                    email: user.email,
                    password: user.password,
                });
            } catch (error) {
                requestStatus(false, error, null);
            }
        },
        [requestStatus, handleLogin]
    );

    return {
        isLoading,
        error,
        user,
        users,
        handleLogin,
        handleLogout,
        handleSignup,
    };
}
