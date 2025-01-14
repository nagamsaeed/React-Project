import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import ROUTES from "./routesModel.js";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import LoginPage from "../users/pages/LoginPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import MyCardsPage from "../cards/pages/MyCardsPage";

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route
                path={`${ROUTES.CARD_INFO}/:id`}
                element={<CardDetailsPage />}
            />
            <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
            <Route
                path={`${ROUTES.EDIT_CARD}/:id`}
                element={<EditCardPage />}
            />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
            <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
