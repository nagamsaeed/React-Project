import React from "react";
import { Link } from "react-router-dom";
import { node, string } from "prop-types";

export default function NavBarLink({ to, color = "#fff", children }) {
    return (
        <>
            <Link to={to} style={{ color, textDecorationLine: "none" }}>
                {children}
            </Link>
        </>
    );
}

NavBarLink.propeTypes = {
    children: node.isRequired,
    to: string.isRequired,
    color: string,
};
