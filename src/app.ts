import "reflect-metadata"
import express from "express"
import "express-async-errors"
import { handleError } from "./errors"
import userRouter from "./routers/user.routes"
import sessionRouter from "./routers/session.routes"
import categoriesRoutes from "./routers/category.routes"
import propertyRoutes from "./routers/property.routes"
import scheduleRoutes from "./routers/schedule.routes"

const app = express()
app.use(express.json())

app.use("/users", userRouter)
app.use("/login", sessionRouter)
app.use("/categories", categoriesRoutes)
app.use("/properties", propertyRoutes)
app.use("/schedules", scheduleRoutes)

app.use(handleError)

export default app