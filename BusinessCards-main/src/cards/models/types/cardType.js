import { string, number, shape, arrayOf } from "prop-types";
import imageType from "./imageType.js";
import addressType from "./addressType.js";

const cardType = shape({
    _id: string.isRequired,
    title: string.isRequired,
    subtitle: string.isRequired,
    description: string.isRequired,
    phone: string.isRequired,
    email: string.isRequired,
    web: string,
    image: imageType.isRequired,
    address: addressType.isRequired,
    bizNumber: number.isRequired,
    user_id: string.isRequired,
    likes: arrayOf(string).isRequired,
    createdAt: string.isRequired,
});
export default cardType;
