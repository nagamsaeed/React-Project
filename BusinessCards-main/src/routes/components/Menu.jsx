import React from "react";
import MuiMenu from "@mui/material/Menu";
import { Box, MenuItem } from "@mui/material";
import ROUTES from "../routesModel.js";
import { useUser } from "../../users/providers/UserProvider";
import useUsers from "../../users/hooks/useUsers";
import MenuLink from "./MenuLink";

export default function Menu({ isOpen, anchorEl, onClose }) {
    const { user } = useUser();
    const { handleLogout } = useUsers();

    const onLogout = () => {
        handleLogout();
        onClose();
    };

    return (
        <MuiMenu
            open={isOpen}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Box>
                {!user && (
                    <>
                        <MenuLink
                            text="login"
                            navigateTo={ROUTES.LOGIN}
                            onClick={onClose}
                        />
                        <MenuLink
                            text="signup"
                            navigateTo={ROUTES.SIGNUP}
                            onClick={onClose}
                        />
                    </>
                )}
                {user && (
                    <>
                        <MenuLink
                            text="profile"
                            navigateTo={ROUTES.USER_PROFILE}
                            onClick={onClose}
                            styles={{ color: "#000" }}
                        />
                        <MenuLink
                            text="edit account"
                            navigateTo={ROUTES.EDIT_USER}
                            onClick={onClose}
                            styles={{ color: "#000" }}
                        />
                        <MenuItem onClick={onLogout}>Logout</MenuItem>
                    </>
                )}
            </Box>
        </MuiMenu>
    );
}
