import { Request, Response } from "express";
import createScheduleService from "../../services/schedules/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
    const data = await createScheduleService(req.body, req.user.id)
    return res.status(201).json({ message: data })
}

export { createScheduleController }