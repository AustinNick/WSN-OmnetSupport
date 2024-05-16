import { server } from "./app/web.js"

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`APP Running at http://localhost:${PORT}`)
})