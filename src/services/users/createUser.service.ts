import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUser, IUserRequest } from "../../interfaces/users";
import { returnedUserSchema } from "../../schemas/user.schema";

const createUserService = async (data: IUserRequest): Promise<IUser | undefined> => {
    const userRep = AppDataSource.getRepository(User)

    const verifyEmail = await userRep.findOneBy({ email: data.email })
    if(verifyEmail){
        throw new AppError("User already exists", 409)
    }

    const newUser = userRep.create(data)
    await userRep.save(newUser)

    const newUserResponse = await returnedUserSchema.validate(newUser, {
        stripUnknown: true
    })
    
    return newUserResponse
}

export default createUserService