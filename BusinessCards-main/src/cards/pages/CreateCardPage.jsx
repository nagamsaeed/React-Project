import React, { useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel.js";
import { useNavigate } from "react-router-dom";
import Form from "../../forms/components/Form.jsx";
import Input from "../../forms/components/Input.jsx";
import useForm from "../../forms/hooks/useForm.js";
import initialCardForm from "../helpers/initialForms/initialCardForm.js";
import cardSchema from "../models/cardSchema.js";
import useCards from "../hooks/useCards.js";

export default function CreateCardPage() {
    const { user } = useUser();
    const navigate = useNavigate();
    const { handleCreateCard } = useCards();

    const { value, ...rest } = useForm(
        initialCardForm,
        cardSchema,
        handleCreateCard
    );
    const { data, errors } = value;
    const { onSubmit, handleChange, handleReset, validateForm } = { ...rest };

    useEffect(() => {
        // Redirect to cards page if user is not defined
        if (!user || !user.isBusiness) {
            navigate(ROUTES.CARDS);
        }
    }, [user, navigate]);

    useEffect(() => {
        console.log("Form Data:", data);
        console.log("Form Errors:", errors);
        console.log("Is Form Valid:", validateForm());
    }, [data, errors, validateForm]);

    return (
        <>
            <Form
                onSubmit={onSubmit}
                onReset={handleReset}
                disabled={validateForm}
                title="Create a New Card"
                styles={{ maxWidth: "800px" }}
                to={ROUTES.MY_CARDS}
                color="inherit"
                spacing={1}
            >
                <Input
                    name="title"
                    label="Title"
                    error={errors.title}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="subtitle"
                    label="Subtitle"
                    error={errors.subtitle}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="description"
                    label="Description"
                    error={errors.description}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="phone"
                    label="Phone"
                    type="phone"
                    error={errors.phone}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="email"
                    label="Email"
                    type="email"
                    error={errors.email}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="webUrl"
                    label="Web"
                    type="web"
                    error={errors.web}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                    required={false}
                />
                <Input
                    name="imageUrl"
                    label="Image URL"
                    error={errors.url}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="imageAlt"
                    label="Image Alt"
                    error={errors.alt}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="state"
                    label="State"
                    error={errors.state}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                    required={false}
                />
                <Input
                    name="country"
                    label="Country"
                    error={errors.country}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="city"
                    label="City"
                    error={errors.city}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="street"
                    label="Street"
                    error={errors.street}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="houseNumber"
                    label="House Number"
                    type="number"
                    error={errors.houseNumber}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="zip"
                    label="Zip"
                    error={errors.zip}
                    handleChange={handleChange}
                    data={data}
                    sm={6}
                    required={false}
                />
            </Form>
        </>
    );
}
