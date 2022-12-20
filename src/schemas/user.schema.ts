import { v4 } from "uuid"
import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserRequest, IUser, IUserUpdate } from "../interfaces/users/users.interfaces"

const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

const returnedUserSchema: SchemaOf<IUser> = yup.object().shape({
    id: yup.string().uuid().default(() => v4()). transform(() => v4()),
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