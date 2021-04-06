import express from 'express'

const PORT = process.env.PORT || 8081
const app = express()

app.get('/', (req, res) => {
    res.json({ "Hello": "world!"})
})

app.listen(PORT, () => console.log('Running on PORT: ', PORT))