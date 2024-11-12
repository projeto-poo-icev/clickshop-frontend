import api from "./api";

const createProduct = async (productData) => {
    try {
        const response = await api.post("/product", productData)
        return response.data;
    } catch (error) {
        return error;
    }
}

export default createProduct;