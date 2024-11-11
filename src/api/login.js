import api from "./api";

export const login = async (cpf) => {
    try {
        const response = await api.post(`/login?cpf=${cpf}`)
        console.log(response);
        return response
    } catch (error) {
        console.error(error)
    }
}