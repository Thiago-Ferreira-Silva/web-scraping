const express = require('express')
const fetchHTML = require('./scraper')

const PORT = process.env.PORT || 8081

const app = express()

app.get('/', async (req, res) => {
    const response = await fetchHTML()
    res.status(response.status).send(response)
})

//criar um banco de dados e armazenar o histórico do ranking, atualizando as informações uma vez por dia ou semana com o node cron
// escrever testes

app.listen(PORT, () => console.log('Running on PORT: ', PORT))