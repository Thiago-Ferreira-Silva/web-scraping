require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

function addNewData(data) {
    MongoClient.connect(process.env.DB_URL, (err, client) => {
        const collection = client.db(process.env.DB_NAME).collection('MAL_TOP_SCORES')

        collection.insertOne({ data, date: Date.now() }, (err, result) => {
            if (err) return console.log(err)
            return console.log('ok')
        })

        client.close()
    })
}

function getData() {

}

module.exports = { addNewData, getData }