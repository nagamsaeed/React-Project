import React from "react";
import { string } from "prop-types";
import { CardHeader, CardMedia, Divider } from "@mui/material";

export default function CardHeaderComponent({ url, alt, title, subtitle }) {
    return (
        <>
            <CardMedia sx={{ height: 140 }} image={url} alt={alt} />
            <CardHeader title={title} subheader={subtitle} />
            <Divider variant="middle" />
        </>
    );
}
CardHeaderComponent.propTypes = {
    url: string.isRequired,
    alt: string.isRequired,
    title: string.isRequired,
    subtitle: string.isRequired,
};
