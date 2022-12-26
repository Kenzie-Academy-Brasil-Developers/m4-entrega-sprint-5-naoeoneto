import { SchemaOf } from 'yup';
import * as yup from 'yup'
import { ICategoryRequest, ICategoryResponse } from '../interfaces/categories';

const createCategorySchema: SchemaOf<ICategoryRequest> = yup.object().shape({
    name: yup.string().required()
})

const returnedCategorySchema: SchemaOf<ICategoryResponse> = yup.object().shape({
    id: yup.string().uuid(),
    name: yup.string()
})

export { createCategorySchema, returnedCategorySchema }

