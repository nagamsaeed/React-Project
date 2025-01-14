import React from "react";
import { node } from "prop-types";
import NuvBar from "../routes/components/NavBar";
import Main from "./main/Main";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
    return (
        <>
            <NuvBar />
            <Main>{children}</Main>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: node.isRequired,
};
