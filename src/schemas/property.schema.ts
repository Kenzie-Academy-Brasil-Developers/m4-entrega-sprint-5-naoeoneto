import * as yup from "yup"
import { SchemaOf } from "yup"
import { IPropertyRequest, IPropertyResponse } from "../interfaces/properties"

const createPropertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
    value: yup.number().required(),
    size: yup.number().required(),
    categoryId: yup.string().uuid().required(),
    address: yup.object().shape({
        district: yup.string().required(),
        zipCode: yup.string().max(8).required(),
        number: yup.string().notRequired(),
        city: yup.string().required(),
        state: yup.string().max(2).required()
    })
})

const returnedPropertySchema: SchemaOf<IPropertyResponse> = yup.object().shape({
    id: yup.string(),
    value: yup.number(),
    size: yup.number(),
    categoryId: yup.string(),
    address: yup.object().shape({
        id: yup.string(),
        district: yup.string(),
        zipCode: yup.string(),
        number: yup.string(),
        city: yup.string(),
        state: yup.string()
    }),
    sold: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date()
})

const listPropertiesSchema: SchemaOf<IPropertyResponse[]> = yup.array(returnedPropertySchema)

export { createPropertySchema, returnedPropertySchema, listPropertiesSchema }