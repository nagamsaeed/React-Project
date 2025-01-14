import React from "react";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import UserProvider from "./users/providers/UserProvider";

export default function App() {
    return (
        <BrowserRouter>
            <CustomThemeProvider>
                <SnackbarProvider>
                    <UserProvider>
                        <Layout>
                            <Router />
                        </Layout>
                    </UserProvider>
                </SnackbarProvider>
            </CustomThemeProvider>
        </BrowserRouter>
    );
}
