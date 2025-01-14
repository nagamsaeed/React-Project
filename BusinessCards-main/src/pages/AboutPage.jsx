import React from "react";
import { Container, ListItem, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
    return (
        <Container>
            <PageHeader
                title="About Page"
                subtitle="On this page you can find explanations about using the application"
            />
            <Container
                sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Container sx={{ flex: 1, mr: 2 }}>
                    <Typography variant="h6">About Page</Typography>
                    <Typography variant="body1" component="p">
                    At BusinessConnect, we are committed to fostering valuable 
                    relationships between businesses and their prospective clients or 
                    partners. Our platform provides an interactive, online hub where 
                    businesses can present their offerings, and users can explore 
                    exciting opportunities.
                    </Typography>
                    <Typography variant="h6">Advantages</Typography>
                    <ListItem>
                    Environmentally friendly replacement for conventional paper business 
                    cards
                    </ListItem>
                    <ListItem>
                    Effortless to update with the latest information                    
                    </ListItem>
                    <ListItem>
                    Accessible anytime, anywhere with an internet connection
                    </ListItem>
                    <ListItem>
                    Enhances networking and fosters business-to-business relationships
                    
                    </ListItem>
                    <ListItem>
                    Boosts online presence for businesses
                    </ListItem>
                </Container>
                <Container sx={{ flex: 1 }}>
                    <img
                        src="/assets/images/card.png"
                        alt="Card"
                        style={{ width: "100%", maxWidth: 400 }}
                    />
                </Container>
            </Container>
        </Container>
    );
}
