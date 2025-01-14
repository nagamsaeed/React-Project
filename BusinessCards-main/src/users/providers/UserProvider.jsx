import React, {
    useState,
    useContext,
    useEffect,
    useMemo,
    createContext,
} from "react";
import { node } from "prop-types";
import { getToken, getUser } from "../services/localStorageService";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(getToken);

    useEffect(() => {
        if (token) {
            const userFromLocalStorage = getUser();
            setUser(userFromLocalStorage);
        }
    }, [token]);

    const value = useMemo(
        () => ({ user, setUser, token, setToken }),
        [user, token]
    );

    return (
        <>
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        </>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a NameProvider");
    return context;
};

UserProvider.propTypes = {
    children: node.isRequired,
};
