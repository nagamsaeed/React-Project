import React from "react";
import { Tooltip, IconButton, Avatar } from "@mui/material";
import { useMenu } from "../../../routes/components/MenuProvider";

export default function Logged() {
    const setOpen = useMenu();

    return (
        <>
            <Tooltip title="Open settings">
                <IconButton
                    sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
                    onClick={() => setOpen(true)}
                >
                    <Avatar alt="Bird" src="/assets/images/avater.png" />
                </IconButton>
            </Tooltip>
        </>
    );
}
