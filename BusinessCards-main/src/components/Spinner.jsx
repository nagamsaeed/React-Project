import React from "react";
import { string, number, oneOfType } from "prop-types";
import { CircularProgress, Box } from "@mui/material";

export default function Spinner({
    color = "primary",
    size = 40,
    height = "50vh",
}) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    minHeight: { height },
                }}
            >
                <CircularProgress
                    color={color}
                    size={size}
                    sx={{ alignSelf: "center" }}
                />
            </Box>
        </>
    );
}

Spinner.propTypes = {
    color: string,
    size: number,
    height: oneOfType([string, number]),
};
