import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import LeftNavigation from "../../layout/header/left-navigation/LeftNavigation";
import RightNavigation from "../../layout/header/right-navigation/RightNavigation";
import SearchBar from "../../layout/header/right-navigation/SearchBar";
import MenuProvider from "./MenuProvider";

export default function NavBar() {
    return (
        <>
            <MenuProvider>
                <AppBar position="sticky">
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <LeftNavigation />
                        <Box
                            sx={{ display: { xs: "inline-flex", md: "none" } }}
                        >
                            <SearchBar />
                        </Box>
                        <RightNavigation />
                    </Toolbar>
                </AppBar>
            </MenuProvider>
        </>
    );
}
