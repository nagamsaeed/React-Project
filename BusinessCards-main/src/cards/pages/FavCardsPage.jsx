import React, { useCallback, useEffect } from "react";
import useCards from "./../hooks/useCards.js";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";

export default function FavCardsPage() {
    const { value, ...rest } = useCards();
    const { isLoading, error, cards } = value;
    const { handleDeleteCard, handleGetFavCards, handleLikeCard } = rest;

    useEffect(() => {
        handleGetFavCards();
    }, []);

    const onDeleteCard = useCallback(
        async (cardId) => {
            await handleDeleteCard(cardId);
            await handleGetFavCards();
        },
        [handleDeleteCard]
    );

    const changeLikeStatus = useCallback(
        async (cardId) => {
            await handleLikeCard(cardId);
            await handleGetFavCards();
        },
        [handleLikeCard, handleGetFavCards]
    );

    return (
        <>
            <Container>
                <PageHeader
                    title="Favorite Cards Page"
                    subtitle="Here you can find all your favorite business cards"
                />
                <CardsFeedback
                    isLoading={isLoading}
                    error={error}
                    cards={cards}
                    onDelete={onDeleteCard}
                    onLike={changeLikeStatus}
                />
            </Container>
        </>
    );
}
