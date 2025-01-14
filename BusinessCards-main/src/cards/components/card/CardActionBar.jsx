import React, { useState } from "react";
import { func, string, arrayOf } from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel.js";
import { useUser } from "../../../users/providers/UserProvider.jsx";

export default function CardActionBar({
    onDelete,
    cardId,
    cardUserId,
    cardLikes,
    onLike,
}) {
    const navigate = useNavigate();
    const { user } = useUser();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLike, setIsLike] = useState(() => {
        if (user) {
            return !!cardLikes.find((id) => id === user._id);
        }
        return false;
    });

    const handleDialog = (term) => {
        if (term === "open") return setIsDialogOpen(true);
        setIsDialogOpen(false);
    };

    const handleDeleteCard = () => {
        handleDialog();
        onDelete(cardId);
    };

    const handleLike = async () => {
        setIsLike((prev) => !prev);
        await onLike(cardId);
    };

    return (
        <>
            <CardActions
                disableSpacing
                sx={{ paddingTop: 0, justifyContent: "space-between" }}
            >
                <Box>
                    {user && (user.isAdmin || user._id === cardUserId) && (
                        <IconButton
                            aria-label="delete card"
                            onClick={() => handleDialog("open")}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}

                    {user && user._id === cardUserId && (
                        <IconButton
                            onClick={() =>
                                navigate(`${ROUTES.EDIT_CARD}/${cardId}`)
                            }
                        >
                            <ModeEditIcon />
                        </IconButton>
                    )}
                </Box>
                <Box>
                    <IconButton>
                        <CallIcon />
                    </IconButton>
                    {user && (
                        <IconButton
                            aria-label="add to favorites"
                            onClick={handleLike}
                        >
                            <FavoriteIcon
                                color={isLike ? "error" : "inherit"}
                            />
                        </IconButton>
                    )}
                </Box>
            </CardActions>
            <CardDeleteDialog
                isDialogOpen={isDialogOpen}
                onChangeDialog={handleDialog}
                onDelete={handleDeleteCard}
            />
        </>
    );
}

CardActionBar.propTypes = {
    onDelete: func,
    cardId: string,
    cardUserId: string,
    cardLikes: arrayOf(string),
    onLike: func,
};
