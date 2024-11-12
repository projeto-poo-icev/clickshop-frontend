import api from "./api";

const getPoducts = async () => {
    try {
        const response = await api.get("product");
        return response.data;
    } catch (error) {
        return error
    }
}

export default getPoducts