import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users/user.controller";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";
import verifyIsActiveMiddleware from "../middlewares/verifyIsActive.middleware";
import verifyIdMiddleware from "../middlewares/verifyId.middleware";
import verifyDataMiddleware from "../middlewares/verifyData.middleware";

const userRouter = Router()

userRouter.post("", validateDataMiddleware(createUserSchema), verifyEmailExistsMiddleware, createUserController)
userRouter.get("",  verifyAuthMiddleware, verifyUserIsAdmMiddleware, listUsersController)
userRouter.delete("/:id", verifyAuthMiddleware, verifyIdMiddleware, verifyIsActiveMiddleware, verifyUserIsAdmMiddleware, deleteUserController)
userRouter.patch("/:id", verifyAuthMiddleware, verifyIdMiddleware, verifyDataMiddleware, validateDataMiddleware(updateUserSchema), updateUserController)

export default userRouter