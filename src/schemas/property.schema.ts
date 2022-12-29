import * as yup from "yup"
import { SchemaOf } from "yup"
import { IPropertyRequest, IPropertyResponse } from "../interfaces/properties"

const createPropertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
    value: yup.number().required(),
    size: yup.number().required(),
    categoryId: yup.string().uuid().required(),
    address: yup.object().shape({
        district: yup.string().required(),
        zipCode: yup.string().required(),
        number: yup.string().notRequired(),
        city: yup.string().required(),
        state: yup.string().required()
    })
})

const returnedPropertySchema: SchemaOf<IPropertyResponse> = yup.object().shape({
    id: yup.string().uuid(),
    value: yup.number(),
    size: yup.number(),
    address: yup.object().shape({
        district: yup.string(),
        zipCode: yup.string(),
        number: yup.string(),
        city: yup.string(),
        state: yup.string()
    }),
    sold: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    categoryId: yup.string().uuid()
})

const listPropertiesSchema: SchemaOf<IPropertyResponse[]> = yup.array(returnedPropertySchema)

export { createPropertySchema, returnedPropertySchema, listPropertiesSchema }