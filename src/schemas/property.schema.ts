import * as yup from "yup"
import { SchemaOf } from "yup"
import { IPropertyRequest, IPropertyResponse } from "../interfaces/properties"

const createPropertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
    value: yup.number().required(),
    size: yup.number().required(),
    address: yup.object().shape({
        district: yup.string().required(),
        zipCode: yup.string().required(),
        number: yup.string().notRequired(),
        city: yup.string().required(),
        state: yup.string().required()
    }),
    categoryId: yup.string().required() 
})

const returnedPropertySchema: SchemaOf<IPropertyResponse> = yup.object().shape({
    value: yup.number(),
    size: yup.number(),
    address: yup.object().shape({
        district: yup.string(),
        zipCode: yup.string(),
        number: yup.string(),
        city: yup.string(),
        state: yup.string()
    }),
    categoryId: yup.string(),
    id: yup.string().uuid(),
    sold: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date()
})

const listPropertiesSchema: SchemaOf<IPropertyResponse[]> = yup.array(returnedPropertySchema)

export { createPropertySchema, returnedPropertySchema, git }