import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"

const deleteUserService = async (userId: string): Promise<string> => {
    const userRep = AppDataSource.getRepository(User)
    
    const user = await userRep.findOneBy({ id: userId })
    user.isActive = false
    
    await userRep.save(user)

    return "User deleted"
}

export default deleteUserService