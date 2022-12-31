import { IScheduleRequest } from './../interfaces/schedules/index';
import * as yup from "yup"
import { SchemaOf } from "yup"

const createScheduleSchema: SchemaOf<IScheduleRequest> = yup.object().shape({
    date: yup.string().required(),
    hour: yup.string().required(),
    propertyId: yup.string().required(),
    userId: yup.string().required()
})

const listSchedulesSchema: SchemaOf<IScheduleRequest[]> = yup.array(createScheduleSchema)

export { createScheduleSchema, listSchedulesSchema }