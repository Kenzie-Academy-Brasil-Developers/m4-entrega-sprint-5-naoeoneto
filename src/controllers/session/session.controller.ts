import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users/users.interfaces";
import createSessionService from "../../services/session/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
    const login: IUserLogin = req.body
    const token = await createSessionService(login)
    return res.status(200).json({ token })
}

export default createSessionController