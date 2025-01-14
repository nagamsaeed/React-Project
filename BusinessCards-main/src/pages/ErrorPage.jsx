import React from "react";
import { Button, Container, Grid2, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import ROUTES from "../routes/routesModel.js";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <PageHeader title="Error 404" subtitle="Page not found" />
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Typography variant="h5">
                            Oops... The requested URL was not found on this
                            server
                        </Typography>
                        <Button
                            variant="text"
                            color="primary"
                            onClick={() => navigate(ROUTES.ROOT)}
                        >
                            Click here to return tp the page...
                        </Button>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }} justifyContent="center">
                        <img
                            width="100%"
                            src="/assets/images/broken-robot-error.png"
                            alt="broken robot error image"
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </>
    );
}
