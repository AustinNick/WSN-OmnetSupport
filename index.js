import Express from 'express'
import cors from 'cors'
import { errorMiddleware } from './src/middleware/error.js'
import dataRouter from './src/router/data.js'

const app = Express()
app.use(Express.json())
app.use(errorMiddleware)
app.use(dataRouter)
app.use(cors)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`APP Running at http://localhost:${PORT}`)
})