import express from "express";
import { getUsers } from "../controllers/users";

const userRouter: express.Router = express.Router();

userRouter.get("", getUsers);

export default userRouter;
