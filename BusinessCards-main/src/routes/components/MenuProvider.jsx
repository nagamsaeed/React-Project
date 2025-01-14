import React, {
    useState,
    useContext,
    useRef,
    useEffect,
    createContext,
} from "react";
import { node } from "prop-types";
import { Box, useMediaQuery } from "@mui/material";
import Menu from "./Menu";
import { useTheme as useMuiTheme } from "@emotion/react";

const MenuContext = createContext(null);

export default function MenuProvider({ children }) {
    const theme = useMuiTheme();
    const screenSize = useMediaQuery(theme.breakpoints.up("md"));

    const [isOpen, setIsOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const anchorRef = useRef();

    useEffect(() => {
        setAnchorEl(anchorRef.current);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [screenSize]);

    return (
        <>
            <MenuContext.Provider value={isOpen}>
                {children}
            </MenuContext.Provider>

            <Box
                ref={anchorRef}
                component="span"
                position="fixed"
                top="70px"
                right="20px"
            ></Box>
            {anchorEl && (
                <Menu
                    anchorEl={anchorEl}
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                />
            )}
        </>
    );
}

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) throw new Error("useMenu must be used within a MenuProvider");
    return context;
};

MenuProvider.propTypes = {
    children: node.isRequired,
};
