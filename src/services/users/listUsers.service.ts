import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser } from "../../interfaces/users"

const listUsersService = async (): Promise<IUser[] | undefined> => {
    const userRep = AppDataSource.getRepository(User)
    
    const list = await userRep.find({ withDeleted: true })
    list.forEach(elem => delete elem.password)

    return list
}

export default listUsersService