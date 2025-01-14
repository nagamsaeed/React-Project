import React, { useContext, useState, createContext, useCallback } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { node } from "prop-types";

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = useCallback(() => {
        setIsDark((prev) => !prev);
    }, []);

    const theme = createTheme({
        palette: {
            mode: isDark ? "dark" : "light",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export const useCustomTheme = () => {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error("useCustomTheme must be used within a Provider");
    return context;
};

ThemeProvider.propTypes = {
    children: node.isRequired,
};
