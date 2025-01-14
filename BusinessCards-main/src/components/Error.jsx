import React from "react";
import { string } from "prop-types";
import { Container, Grid2, Typography } from "@mui/material";

export default function Error({ errorMessage }) {
    return (
        <>
            <Container>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Typography variant="h5" color="initial">
                            Oops... something went wrong: {errorMessage}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }} justifyContent="center">
                        <img
                            width="100%"
                            src="/assets/images/broken-robot-error.png"
                            alt="broken robot"
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </>
    );
}

Error.propTypes = {
    errorMessage: string.isRequired,
};
