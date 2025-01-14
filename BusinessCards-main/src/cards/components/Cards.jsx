import React from "react";
import { arrayOf } from "prop-types";
import CardComponent from "./card/CardComponent";
import { Grid2, Typography } from "@mui/material";
import cardType from "../models/types/cardType";

export default function Cards({ cards, onDelete, onLike }) {
    if (cards.length === 0)
        return (
            <Typography m={2}>
                Oops... it seems there are no business cards to display
            </Typography>
        );

    return (
        <Grid2 container spacing={2} pb={2}>
            {cards.map((card, i) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                    <CardComponent
                        card={card}
                        onDelete={onDelete}
                        onLike={onLike}
                    />
                </Grid2>
            ))}
        </Grid2>
    );
}

Cards.propTypes = {
    cards: arrayOf(cardType).isRequired,
};
