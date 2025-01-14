import axios from "axios";
import querystring from "querystring";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export const getCard = async (cardId) => {
    try {
        const { data } = await axios.get(`${apiUrl}/${cardId}`);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export async function getMyCards() {
    try {
        const { data } = await axios.get(`${apiUrl}/my-cards`);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export async function createCard(card) {
    try {
        const { data } = await axios.post(apiUrl, card);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export async function editCard(cardId, normalaizedCard) {
    try {
        const { data } = await axios.put(
            `${apiUrl}/${cardId}`,
            normalaizedCard
        );
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const changeLikeStatus = async (cardId) => {
    try {
        const { data } = await axios.patch(`${apiUrl}/${cardId}`);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export async function deleteCard(cardId) {
    try {
        const { data } = await axios.delete(`${apiUrl}/${cardId}`);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const getCards = async () => {
    try {
        const { data } = await axios.get(apiUrl);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};
