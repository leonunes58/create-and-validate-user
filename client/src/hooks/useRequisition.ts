import axios from "axios"

export const UsePost = async(route: string, params: object) => {
    try {
        const res: object | null = await axios.post(route, params);
        return "Usuário criado com sucesso";
    } catch(err: any) {
        return "Não foi possível enviar os valores para a API"
    }
}