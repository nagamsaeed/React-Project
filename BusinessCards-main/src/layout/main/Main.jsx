import React from "react";
import { node } from "prop-types";
import { Paper } from "@mui/material";
import { useCustomTheme } from "../../providers/CustomThemeProvider";

export default function Main({ children }) {
    const { isDark } = useCustomTheme();
    return (
        <>
            <Paper
                sx={{
                    minHeight: "85vh",
                    bgcolor: isDark ? "#333333" : "#e3f2fd",
                }}
            >
                {children}
            </Paper>
        </>
    );
}

Main.propTypes = {
    children: node.isRequired,
};
