import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserUpdate } from "../../interfaces/users";
import { returnedUserSchema } from "../../schemas/user.schema";

const updateUserService = async (data: IUserUpdate, userId: string): Promise<IUser> => {
    const userRep = AppDataSource.getRepository(User)

    const user = await userRep.findOneBy({ id: userId })
    const updatedUser = userRep.create({
        ...user,
        ...data
    })
    await userRep.save(updatedUser)

    const returnedUser = await returnedUserSchema.validate(updatedUser, {
        stripUnknown: true
    })

    return returnedUser
}

export default updateUserService