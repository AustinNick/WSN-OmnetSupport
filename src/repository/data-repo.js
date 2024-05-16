import fire from './../config/database.js'
var db = fire.firestore()
import { io } from "./../app/web.js"

const create = async (data) => { 
    // Logic to insert data to database
    db.collection(data.collection).add({
        akselerometer: data.akselerometer,
        kelembapan: data.kelembapan,
        tegangan: data.tegangan,
        korosi: data.korosi,
    })

    // Send data to client
    io.emit('data', data);

    return data
}

const findAllByCollection = async (collection) => {
    // Logic to get all data from database
    const data = db.collection(collection).get()

    return (await data).docs.map(doc => doc.data())
}

export default {
    create,
    findAllByCollection
}