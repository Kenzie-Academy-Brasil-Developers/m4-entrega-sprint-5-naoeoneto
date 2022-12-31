import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config"

const verifyAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let auth = req.headers.authorization
    
    if(!auth){
        return res.status(401).json({ message: "Invalid token!" })
    }

    auth = auth.split(' ')[1]

    return jwt.verify(auth, process.env.SECRET_KEY as string, (error, decoded: any) => {
        if(error){
            return res.status(401).json({ message: error.message })
        }

        req.user = {
            id: decoded.sub as string,
            adm: decoded.adm,
            active: decoded.active
        }
        
        return next()
    })

}

export default verifyAuthMiddleware