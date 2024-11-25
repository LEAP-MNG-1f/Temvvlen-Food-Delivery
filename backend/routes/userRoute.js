import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/user", createUser);

export default userRouter;
