import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { FormControlLabel, Checkbox, Grid2 } from "@mui/material";
import ROUTES from "../../routes/routesModel";

export default function SignupForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    data,
    onInputChange,
    handleChangeCheckBox,
}) {
    return (
        <Form
            onSubmit={onSubmit}
            onReset={onReset}
            disabled={validateForm}
            title={title}
            styles={{ maxWidth: "800px" }}
            to={ROUTES.ROOT}
            color="inherit"
            spacing={1}
        >
            <Input
                name="first"
                label="first name"
                error={errors.first}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="middle"
                label="middle name"
                error={errors.middle}
                handleChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="last"
                label="last name"
                error={errors.last}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="phone"
                label="phone"
                type="phone"
                error={errors.phone}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="email"
                label="email"
                type="email"
                error={errors.email}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="password"
                label="password"
                type="password"
                error={errors.password}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="url"
                label="image url"
                error={errors.url}
                handleChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="alt"
                label="image alt"
                error={errors.alt}
                handleChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="state"
                label="state"
                error={errors.state}
                handleChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                label="country"
                name="country"
                error={errors.country}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="city"
                label="city"
                error={errors.city}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="street"
                label="street"
                error={errors.street}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="houseNumber"
                label="house Number"
                type="number"
                error={errors.houseNumber}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="zip"
                label="zip"
                error={errors.zip}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Grid2>
                <FormControlLabel
                    onChange={handleChangeCheckBox}
                    name="isBusiness"
                    control={
                        <Checkbox value={data.isBusiness} color="primary" />
                    }
                    label="Signup as business"
                />
            </Grid2>
        </Form>
    );
}
