import React, { useState, useContext, useCallback, createContext } from "react";
import { node } from "prop-types";
import { Alert, Snackbar } from "@mui/material";

const SnackbarContext = createContext(null);

export default function SnackbarProvider({ children }) {
    const [isSnackOpen, setIsSnackOpen] = useState(false);
    const [snackColor, setSnackColor] = useState("success");
    const [snackMessage, setSnackMessage] = useState("in snackbar!");
    const [snackVariant, setSnackVariant] = useState("filled");

    const setSnack = useCallback(
        (color, message, variant = "filled") => {
            setIsSnackOpen(true);
            setSnackColor(color);
            setSnackMessage(message);
            setSnackVariant(variant);
        },
        [setIsSnackOpen, setSnackColor, setSnackMessage, setSnackVariant]
    );
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={isSnackOpen}
                onClose={() => setIsSnackOpen((prev) => !prev)}
                autoHideDuration={6000}
            >
                <Alert severity={snackColor} variant={snackVariant}>
                    {snackMessage}
                </Alert>
            </Snackbar>

            <SnackbarContext.Provider value={setSnack}>
                {children}
            </SnackbarContext.Provider>
        </>
    );
}

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context)
        throw new Erorr("useSnackbar must be used within a SnackbarProvider");
    return context;
};

SnackbarProvider.propTypes = {
    children: node.isRequired,
};
