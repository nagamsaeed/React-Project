import React from "react";
import useForm from "../../forms/hooks/useForm.js";
import initialLoginForm from "../helpers/initialForms/initialLoginForm.js";
import loginSchema from "../models/loginSchema.js";
import useUsers from "./../hooks/useUsers.js";
import { useUser } from "../providers/UserProvider.jsx";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel.js";
import LoginForm from "../components/LoginForm.jsx";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader.jsx";

export default function LoginPage() {
    const { user } = useUser();
    const { handleLogin } = useUsers();

    const { value, ...rest } = useForm(
        initialLoginForm,
        loginSchema,
        handleLogin
    );

    if (user) return <Navigate replace to={ROUTES.CARDS} />;

    return (
        <Container>
            <PageHeader
                title="Welcome to Login page"
                subtitle="here you can log in"
            />
            <LoginForm
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                validateForm={rest.validateForm}
                title="login page"
                errors={value.errors}
                data={value.data}
                onInputChange={rest.handleChange}
            />
        </Container>
    );
}
