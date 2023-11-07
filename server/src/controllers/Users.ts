import { CreateOptions, Model } from "sequelize";
import { Request, Response } from "express"
import argon2 from "argon2";

import User from "../model/UsersModel";

interface UserCreate {
    name: string,
    email: string,
    password: string,
    role: string
}

export const createUser = async(req: Request, res: Response) => {
    const {name, email, password, confirmePassword, role} = req.body;
    try {
        if(password !== confirmePassword) return res.status(402).json({msg: "Os campos de senhas devem ser iguais!"})
        const hashPassword: string = await argon2.hash(password);
        const resCreateUser = await User.create<Model, CreateOptions<UserCreate>>({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        })
        res.status(200).json(resCreateUser)
    } catch(err: any) {
        console.log(err)
        res.status(400).json(err)
    }
    
}