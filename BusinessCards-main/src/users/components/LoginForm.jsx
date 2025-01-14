import { Button, Container, Grid2 } from "@mui/material";
import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel.js";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function LoginForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    data,
    onInputChange,
}) {
    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Form
                onSubmit={onSubmit}
                onReset={onReset}
                disabled={validateForm}
                title={title}
                styles={{ maxWidth: "450px" }}
                to={ROUTES.ROOT}
                color="inherit"
                spacing={1}
            >
                <Input
                    label="email"
                    name="email"
                    type="email"
                    error={errors.email}
                    handleChange={onInputChange}
                    data={data}
                />
                <Input
                    label="password"
                    name="password"
                    type="password"
                    error={errors.password}
                    handleChange={onInputChange}
                    data={data}
                />
                <Grid2 size={{ xs: 12 }}>
                    <Button
                        variant="outlined"
                        href={ROUTES.SIGNUP}
                        startIcon={<AccountBoxIcon />}
                        sx={{ width: "100%" }}
                    >
                        Sign Up
                    </Button>
                </Grid2>
            </Form>
        </Container>
    );
}
