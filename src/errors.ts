import { NextFunction, Request, Response } from "express"

class AppError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number = 400){
        super()
        this.message = message,
        this.statusCode = statusCode
    }
}

const handleError = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).send({ message: error.message })
    }

    console.log(error.message)
    return res.status(500).json({ message: "Internal Server Error" })
}

export { AppError, handleError }