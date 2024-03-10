import { Router } from "express";
import { signupController } from "../controllers/userController";

export const userRouter = Router();


userRouter.route('/signup').post(signupController);