import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserLogin } from "../../interfaces/users/users.interfaces"
import "dotenv/config"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import { AppError } from "../../errors"

const createSessionService = async (data: IUserLogin): Promise<string> => {
    const userRep = AppDataSource.getRepository(User)

    const loggedUser = await userRep.findOneBy({ email: data.email })
    if(!loggedUser){
        throw new AppError("Wrong email/password", 403)
    }
    
    const comparePassword = await compare(data.password, loggedUser.password)
    if(!comparePassword){
        throw new AppError("Wrong email/password", 403)
    }

    const token = jwt.sign(
        { 
            adm: loggedUser.isAdm,
            active: loggedUser.isActive
        },
        process.env.SECRET_KEY as string,
        { 
            subject: loggedUser.id as string, 
            expiresIn: "24h"
        }
    )

    return token
}

export default createSessionService