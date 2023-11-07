import { Request, Response } from "express"
import argon2 from "argon2";

import User from "../model/UsersModel";



export const Login = async(req: Request, res:Response) => {
    const {email, password} = req.body;
    try {
        const resUser: Object | null = await User.findOne({
            where: {
                email: email
            }
        });
        if(resUser) {
            const match = await argon2.verify(resUser.password, password);
            if(match) {
                const resName = resUser.name;
                const resEmail = resUser.email;
                const resRole = resUser.role;
                return res.status(200).json({resName, resEmail, resRole})
            } else {
                res.status(400).json({msg: "Senha inválida!"})
            }
        } else {
            res.status(404).json({msg: "Usuário não encontrado!"})
        }
    } catch(err: any) {
        console.log(err.message)
        res.status(400).json(err.message)
    }
}