import React from "react";
import { Box } from "@mui/material";
import NavItem from "../../../routes/components/NavItem";
import ROUTES from "../../../routes/routesModel.js";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import { useUser } from "../../../users/providers/UserProvider";

export default function LeftNavigation() {
    const { user } = useUser();
    return (
        <>
            <Box>
                <LogoIcon />
                <Logo />
                <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
                    <NavItem label="About" to={ROUTES.ABOUT} />
                    {user && (
                        <>
                            <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />
                        </>
                    )}
                    {user && user.isBusiness && (
                        <>
                            <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
                        </>
                    )}
                    {user && user.isAdmin && (
                        <NavItem label="sandbox" to="/sandbox" />
                    )}
                </Box>
            </Box>
        </>
    );
}
