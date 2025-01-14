import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel.js";
import { Container } from "@mui/material";
import useForm from "../../forms/hooks/useForm";
import useUsers from "../hooks/useUsers.js";
import initialSignupForm from "../helpers/initialForms/initialSignupForm.js";
import { useUser } from "../providers/UserProvider";
import signupSchema from "../models/signupSchema.js";
import SignupForm from "../components/SignupForm";

export default function SignupPage() {
    const { handleSignup } = useUsers();
    const { value, ...rest } = useForm(
        initialSignupForm,
        signupSchema,
        handleSignup
    );

    const { user } = useUser();
    if (user) return <Navigate replace to={ROUTES.CARDS} />;
    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <SignupForm
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                validateForm={rest.validateForm}
                title={"register form"}
                errors={value.errors}
                data={value.data}
                onInputChange={rest.handleChange}
                handleChangeCheckBox={rest.handleChangeCheckBox}
            />
        </Container>
    );
}
