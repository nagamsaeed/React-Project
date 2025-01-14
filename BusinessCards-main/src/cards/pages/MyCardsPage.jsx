import React, { useEffect } from "react";
import useCards from "./../hooks/useCards.js";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel.js";
import CardsFeedback from "../components/CardsFeedback";

export default function MyCardsPage() {
    const { value, handleGetMyCards, handleDeleteCard, handleLikeCard } =
        useCards();
    const { isLoading, error, cards } = value;
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate(ROUTES.CARDS);
        else handleGetMyCards();
    }, [user]);

    const onDeleteCard = async (cardId) => {
        await handleDeleteCard(cardId);
        await handleGetMyCards();
    };

    const onLikeCard = async (cardId) => {
        await handleLikeCard(cardId);
    };

    return (
        <>
            <Container sx={{ position: "relative", minHeight: "92vh" }}>
                <PageHeader
                    title="Cards"
                    subtitle="Here you can find business cards from all categories"
                />{" "}
                {cards && (
                    <Fab
                        onClick={() => navigate(ROUTES.CREATE_CARD)}
                        color="primary"
                        aria-label="add"
                        sx={{ position: "absolute", bottom: 75, right: 16 }}
                    >
                        <AddIcon />
                    </Fab>
                )}
                <CardsFeedback
                    isLoading={isLoading}
                    error={error}
                    cards={cards}
                    onDelete={onDeleteCard}
                    onLike={onLikeCard}
                />
            </Container>
        </>
    );
}
