import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton } from "@mui/material";
import { useMenu } from "../../../routes/components/MenuProvider";

export default function MoreButton() {
    const setOpen = useMenu();
    return (
        <>
            <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
                <IconButton
                    onClick={() => setOpen(true)}
                    size="large"
                    collor="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: "inline-flex", md: "none" } }}
                >
                    <MoreVertIcon />
                </IconButton>
            </Box>
        </>
    );
}
