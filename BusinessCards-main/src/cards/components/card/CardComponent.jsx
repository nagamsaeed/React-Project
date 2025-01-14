import * as React from "react";
import { memo } from "react";
import { func } from "prop-types";
import cardType from "../../models/types/cardType.js";
import { Card, CardActionArea } from "@mui/material";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel.js";
import CardHeaderComponent from "./CardHeaderComponent";

export default function CardComponent({ card, onDelete, onLike }) {
    const navigate = useNavigate();

    return (
        <Card sx={{ minWidth: 280 }}>
            <CardActionArea
                onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
            >
                <CardHeaderComponent
                    url={card.image.url}
                    alt={card.image.alt}
                    title={card.title}
                    subtitle={card.subtitle}
                />
                <CardBody
                    phone={card.phone}
                    address={card.address}
                    bizNumber={card.bizNumber}
                />
            </CardActionArea>
            <CardActionBar
                onDelete={onDelete}
                cardId={card._id}
                cardUserId={card.user_id}
                cardLikes={card.likes}
                onLike={onLike}
            />
        </Card>
    );
}

CardComponent.propTypes = {
    card: cardType.isRequired,
    onDelete: func.isRequired,
};

memo(CardComponent);
