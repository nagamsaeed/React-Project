import React, { useState } from "react";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { useCustomTheme } from "../../../providers/CustomThemeProvider";
import { useUser } from "../../../users/providers/UserProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchBar from "./SearchBar";
import ROUTES from "../../../routes/routesModel.js";
import NavItem from "../../../routes/components/NavItem";
import Menu from "../../../routes/components/Menu";

export default function RightNavigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const { user } = useUser();
    const { isDark, toggleDarkMode } = useCustomTheme();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    return (
        <>
            <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <SearchBar />
                <IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                {!user && (
                    <Box>
                        <NavItem label="signup" to={ROUTES.SIGNUP} />
                        <NavItem label="login" to={ROUTES.LOGIN} />
                    </Box>
                )}
                {user && (
                    <Tooltip title="Open settings">
                        <IconButton
                            sx={{
                                p: 0,
                                display: "inline-flex",
                                marginRight: 2,
                            }}
                            onClick={handleMenuOpen}
                        >
                            <Avatar
                                alt="Bird"
                                src="/assets/images/avatar.png"
                            />
                        </IconButton>
                    </Tooltip>
                )}
            </Box>

            <Menu
                isOpen={isMenuOpen}
                anchorEl={anchorEl}
                onClose={handleMenuClose}
            />
        </>
    );
}
