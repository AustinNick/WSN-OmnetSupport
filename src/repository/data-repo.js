import fire from './../config/database.js'
var db = fire.firestore()
import { io } from "./../app/web.js"

const create = async (data) => {
    db.collection(data.collection).add({
        akselerometer: data.akselerometer,
        kelembapan: data.kelembapan,
        tegangan: data.tegangan,
        korosi: data.korosi,
    })

    // Send data to Socket server
    io.emit('data', data)

    return data
}

const findAllByCollection = async (collection) => {
    const data = db.collection(collection).get()

    return (await data).docs.map(doc => doc.data())
}

const findAllCollections = async () => {
    const collections = db.listCollections()

    return (await collections).map(collection => collection.id)
}

export default {
    create,
    findAllCollections,
    findAllByCollection
}