import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser } from "../../interfaces/users/users.interfaces"

const listUsersService = async (): Promise<IUser[] | undefined> => {
    const userRep = AppDataSource.getRepository(User)
    
    const list = await userRep.find()
    list.forEach(elem => delete elem.password)

    return list
}

export default listUsersService