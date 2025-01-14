import React from "react";
import { Avatar, IconButton } from "@mui/material";
import NavBarLink from "../../../routes/components/NavBarLink";
import ROUTES from "../../../routes/routesModel.js";

export default function LogoIcon() {
    return (
        <>
            <NavBarLink to={ROUTES.ROOT}>
                <IconButton>
                    <Avatar src="/assets/images/bcard.png" alt="bcard icon" />
                </IconButton>
            </NavBarLink>
        </>
    );
}
