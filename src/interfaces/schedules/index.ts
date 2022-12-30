export interface IScheduleRequest {
    date: string
    hour: string
    propertyId: string
    userId: string
}

export interface IScheduleResponse {
    id: string
    userId: string
    propertyId: string
    date: string
    hour: string
}