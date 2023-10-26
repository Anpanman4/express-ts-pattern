import express from "express";
import { getUsers, getUserById, getMe, updateUserInfo } from "../controllers/users";

const userRouter: express.Router = express.Router();

userRouter.get("", getUsers);
userRouter.get("/me", getMe);
userRouter.get("/:id", getUserById);
userRouter.patch("", updateUserInfo);

export default userRouter;
