import AppDataSource from "../../data-source"
import { Category } from "../../entities/category.entity"

const listAllCategoriesService = async () => {
    const categoryRep = AppDataSource.getRepository(Category)

    const list = await categoryRep.find({ withDeleted: true })

    return list
}

export default listAllCategoriesService