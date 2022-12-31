import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users"

const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

const returnedUserSchema: SchemaOf<IUser> = yup.object().shape({
    id: yup.string().uuid(),
    name: yup.string(),
    email: yup.string().email(),
    isAdm: yup.boolean(),
    isActive: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date()
})

const updateUserSchema: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    password: yup.string().notRequired()
})

export { createUserSchema, returnedUserSchema, updateUserSchema }