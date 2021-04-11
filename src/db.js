require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const uuid = require('uuid')

function addNewData(data) {
    MongoClient.connect(process.env.DB_URL, (err, client) => {
        const collection = client.db(process.env.DB_NAME).collection('MAL_TOP_SCORES')

        collection.insertOne({ data, date: Date.now(), _id: uuid.v4() }, (err, result) => {
            if (err) return console.log(err)
            return console.log('ok')
        })

        client.close()
    })
}

function getData() {

}

module.exports = { addNewData, getData }