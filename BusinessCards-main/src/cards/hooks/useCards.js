import { useCallback, useState, useEffect, useMemo } from "react";
import {
    getCard,
    getMyCards,
    createCard,
    editCard,
    deleteCard,
    changeLikeStatus,
    getCards,
} from "../services/cardApiService.js";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel.js";
import { useUser } from "../../users/providers/UserProvider";
import normalizeCard from "../helpers/normalization/normalizeCard.js";

const useCards = () => {
    const { user } = useUser();

    const navigate = useNavigate();
    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredCards, setFilteredCards] = useState(null);
    const [searchParams] = useSearchParams();

    useAxios();

    useEffect(() => {
        setQuery(searchParams.get("q") ?? "");
    }, [searchParams]);

    useEffect(() => {
        if (cards) {
            setFilteredCards(
                cards.filter(
                    (card) =>
                        card.title.includes(query) ||
                        String(card.bizNumber).includes(query)
                )
            );
        }
    }, [cards, query]);

    const requestStatus = (loading, errorMessage, cards, card = null) => {
        setIsLoading(loading);
        setCards(cards);
        setCard(card);
        setError(errorMessage);
    };

    const handleGetCards = async () => {
        try {
            setIsLoading(true);
            const fetchedCards = await getCards();
            if (!Array.isArray(fetchedCards)) {
                throw new Error("Invalid data format: expected an array");
            }
            requestStatus(false, null, fetchedCards);
        } catch (error) {
            requestStatus(false, error.message, null);
        }
    };


    const handleGetCard = useCallback(async (cardId) => {
        try {
            setIsLoading(true);
            const card = await getCard(cardId);
            requestStatus(false, null, null, card);
            return card;
        } catch (error) {
            requestStatus(false, error.message, null);
        }
    }, []);

    const handleGetMyCards = useCallback(async () => {
        try {
            setIsLoading(false);
            const cards = await getMyCards();
            requestStatus(false, null, cards);
        } catch (error) {
            requestStatus(false, error.message, null);
        }
    }, [user]);

    const snack = useSnackbar();

    const handleCreateCard = useCallback(
        async (cardFromClient) => {
            try {
                const normalizedCard = normalizeCard(cardFromClient);
                console.log("Normalized Data:", normalizedCard);
                setIsLoading(false);
                const card = await createCard(normalizedCard);
                requestStatus(false, null, null, card);
                snack(
                    "success",
                    "The business card has been successfully created"
                );
                navigate(ROUTES.MY_CARDS);
            } catch (error) {
                console.error("Error creating card:", error.message);
                requestStatus(false, error.message, null);
            }
        },
        [snack]
    );

    const handleUpdateCard = useCallback(
        async (cardId, cardFromClient) => {
            try {
                setIsLoading(true);
                const card = await editCard(cardId, cardFromClient);
                requestStatus(false, null, null, card);
                snack(
                    "success",
                    "The business card has been successfully updated"
                );
                navigate(ROUTES.MY_CARDS);
            } catch (error) {
                requestStatus(false, error.message, null);
            }
        },
        [snack]
    );

    const handleDeleteCard = useCallback(async (cardId) => {
        try {
            setIsLoading(true);
            await deleteCard(cardId);
            const updatedCards = cards.filter((card) => card._id !== cardId); // עדכון הרשימה
            requestStatus(false, null, updatedCards);
            snack("success", "The business card has been successfully deleted");
        } catch (error) {
            requestStatus(false, error.message, null);
        }
    }, [cards, snack]);


    const handleLikeCard = useCallback(async (cardId) => {
        try {
            const card = await changeLikeStatus(cardId);
            requestStatus(false, null, cards, card);
        } catch (error) {
            requestStatus(false, error.message, null);
        }
    }, []);

    const handleGetFavCards = useCallback(async () => {
        try {
            setIsLoading(true);
            const cards = await getCards();
            if (!user?._id) {
                throw new Error("User ID is missing");
            }
            const favCards = cards.filter((card) =>
                card.likes.includes(user._id)
            );
            requestStatus(false, null, favCards);
        } catch (error) {
            requestStatus(false, error.message, null);
        }
    }, [user]);


    const value = useMemo(() => {
        return { cards, card, isLoading, error, filteredCards };
    }, [cards, card, isLoading, error, filteredCards]);

    return {
        value,
        handleGetCard,
        handleDeleteCard,
        handleGetCards,
        handleCreateCard,
        handleGetMyCards,
        handleUpdateCard,
        handleLikeCard,
        setCards,
        handleGetFavCards,
    };
};

export default useCards;
