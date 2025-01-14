import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import {
    CardMedia,
    Container,
    Divider,
    Grid2,
    Paper,
    Typography,
} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import Error from "../../components/Error";

export default function CardDetailsPage() {
    const { value, handleGetCard } = useCards();
    const { id } = useParams();

    useEffect(() => {
        handleGetCard(id);
    }, [id]);

    if (value.isLoading) return <Spinner />;
    if (value.error) return <Error errorMessage={value.error} />;

    return (
        <Container sx={{ mt: 4 }}>
            <PageHeader
                title="Card Details"
                subtitle="Here you can find detailed information about the card"
                sx={{ mb: 4 }}
            />
            <Grid2 container spacing={4} justifyContent="center">
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: "100%",
                            height: 300,
                            objectFit: "cover",
                            borderRadius: 2,
                        }}
                        image={value.card.image.url}
                        alt={value.card.image.alt}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h5" component="div" gutterBottom>
                            {value.card.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            gutterBottom
                        >
                            {value.card.subtitle}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography
                            variant="body1"
                            color="text.primary"
                            gutterBottom
                        >
                            <strong>Phone:</strong> {value.card.phone}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.primary"
                            gutterBottom
                        >
                            <strong>Address:</strong> {value.card.address.city},{" "}
                            {value.card.address.street}{" "}
                            {value.card.address.houseNumber}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            <strong>Card Number:</strong> {value.card.bizNumber}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" color="text.secondary">
                            This card represents a business entity and provides
                            essential contact details. Use it to reach out to
                            the business, visit their location, or verify their
                            credentials. The information provided includes a
                            phone number, address, and a unique card number for
                            identification.
                        </Typography>
                    </Paper>
                </Grid2>
            </Grid2>
        </Container>
    );
}
