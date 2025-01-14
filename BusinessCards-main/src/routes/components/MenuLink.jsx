import React from "react";
import { string, func, object } from "prop-types";
import NavBarLink from "../../routes/components/NavBarLink";
import { MenuItem } from "@mui/material";
import { makeFirstLetterCapital } from "../../forms/utils/algoMethods.js";

export default function MenuLink({ text, navigateTo, onClick, styles = {} }) {
    return (
        <>
            <NavBarLink to={navigateTo}>
                <MenuItem sx={{ ...styles }} onClick={onClick}>
                    {makeFirstLetterCapital(text)}
                </MenuItem>
            </NavBarLink>
        </>
    );
}

MenuLink.propTypes = {
    navigateTo: string.isRequired,
    text: string.isRequired,
    onClick: func.isRequired,
    styles: object,
};
