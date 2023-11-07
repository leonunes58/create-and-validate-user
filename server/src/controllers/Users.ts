import User from "../model/UsersModel";
import { Request, Response } from "express"


export const createUser = async(req: Request, res: Response) => {
    const {name, email, password, confirmePassword, role} = req.body;
    try {
        if(password !== confirmePassword) return res.status(402).json({msg: "Os campos de senhas devem ser iguais!"})
        const resCreateUser = await User.create({
            name: name,
            email: email,
            password: password,
            role: role
        })
        res.status(200).json(resCreateUser)
        throw new Error("Não foi possível criar o usuário")
    } catch(err: any) {
        console.log(err)
        res.status(400).json(err)
    }
    
}