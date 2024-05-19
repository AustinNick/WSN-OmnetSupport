import Express from 'express'
import cors from 'cors'
import { errorMiddleware } from './../middleware/error.js'
import dataRouter from './../router/data.js'
import { Server } from 'socket.io'
import http from 'http'
import bodyParser from 'body-parser';
import { corsOptions } from '../config/cors.js'

const app = Express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: corsOptions
})

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(Express.json())
app.use(dataRouter)

// middleware error
app.use(errorMiddleware)

app.get('/', (req, res) => {
    res.send('Backend Running!')
})

io.on('connection', (socket) => {
    console.log('A client connected')
    socket.on('disconnect', () => {
        console.log('A client disconnected')
    })
})

export { app, io, server }