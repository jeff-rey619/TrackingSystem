import { Request, Response } from "express"
import { userModel } from '../models/users.model';

export const signupController = async (req : Request, res : Response) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({
            status: "failed",
            message: "Please provide valid Username and Password"
        })
    }

    const userCreated = await userModel().create({
        username,
        password
    });

    await userCreated.save();

    return res.status(201).json({
        status: "success",
        message : "User created Successfully"
    })


}