import React, { useEffect, useState } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm.js";
import initialCardForm from "../helpers/initialForms/initialCardForm.js";
import cardSchema from "../models/cardSchema.js";
import useCards from "../hooks/useCards.js";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel.js";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input.jsx";
import mapCardToModel from "../helpers/normalization/mapCardToModel.js";
import normalizeCard from "../helpers/normalization/normalizeCard.js";

export default function EditCardPage() {
    // Hooks and state
    const { handleUpdateCard, handleGetCard } = useCards();
    const { user } = useUser();
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    // Using the form hook with initial values and validation schema
    const { value, ...rest } = useForm(
        initialCardForm,
        cardSchema,
        () => {
            // Update the card with the data from the form
            handleUpdateCard(id, {
                ...normalizeCard({ ...value.data }),
                bizNumber: value.data.bizNumber,  // Use value.data instead of card
                user_id: value.data.user_id,       // Use value.data instead of card
            });
        }
    );

    // Load the card data when the page is loaded
    useEffect(() => {
        handleGetCard(id)
            .then((data) => {
                if (!data || user?._id !== data.user_id) {
                    navigate(ROUTES.CARDS);
                    return;
                }
                const modeledCard = mapCardToModel(data);
                rest.setData(modeledCard);
            })
            .catch((err) => {
                console.error("Error loading card:", err);
                navigate(ROUTES.CARDS);
            })
            .finally(() => setLoading(false));
    }, [id]);

    // If no user is logged in, redirect to the cards page
    if (!user) return <Navigate replace to={ROUTES.CARDS} />;

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
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                onChange={rest.validateForm}
                styles={{ maxWidth: "800px" }}
                to={ROUTES.CARDS}
                title="Edit Card"
            >
                {/* Form fields */}
                <Input
                    name="title"
                    label="Title"
                    error={value.errors.title}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="subtitle"
                    label="Subtitle"
                    error={value.errors.subtitle}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="description"
                    label="Description"
                    error={value.errors.description}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={12}
                />
                <Input
                    name="phone"
                    label="Phone"
                    error={value.errors.phone}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="email"
                    label="Email"
                    error={value.errors.email}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="webUrl"
                    label="Website URL"
                    error={value.errors.webUrl}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="imageUrl"
                    label="Image URL"
                    error={value.errors.imageUrl}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="imageAlt"
                    label="Image Alt Text"
                    error={value.errors.imageAlt}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="state"
                    label="State"
                    error={value.errors.state}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="country"
                    label="Country"
                    error={value.errors.country}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="city"
                    label="City"
                    error={value.errors.city}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="street"
                    label="Street"
                    error={value.errors.street}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="houseNumber"
                    label="House Number"
                    error={value.errors.houseNumber}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
                <Input
                    name="zip"
                    label="ZIP Code"
                    error={value.errors.zip}
                    handleChange={rest.handleChange}
                    data={value.data}
                    sm={6}
                />
            </Form>
        </Container>
    );
}
