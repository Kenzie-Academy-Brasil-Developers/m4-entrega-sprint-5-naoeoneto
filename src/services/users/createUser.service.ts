import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserRequest } from "../../interfaces/users/users.interfaces";
import { returnedUserSchema } from "../../schemas/user.schema";

const createUserService = async (data: IUserRequest): Promise<IUser | undefined> => {
    const userRep = AppDataSource.getRepository(User)

    const newUser = userRep.create(data)
    await userRep.save(newUser)

    const newUserResponse = await returnedUserSchema.validate(newUser, {
        stripUnknown: true
    })
    
    return newUserResponse
}

export default createUserService