const express = require('express')
const scraper = require('./scraper')
const cron = require('./cron_job')

const PORT = process.env.PORT || 8081

const app = express()

cron.startJob()

app.get('/', async (req, res) => {
    const response = await scraper.fetchHTML()
    res.status(response.status).send(response)
})

// implementar app.get('/data') com histórico de dados e talvez alguma coisa de estatística

// criar um banco de dados e armazenar o histórico do ranking, atualizando as informações uma vez por dia ou semana com o node cron

// escrever testes

// Adicionar a função de fazer backup periódico da anime list de um usuário no projeto web-scraping

app.listen(PORT, () => console.log('Running on PORT: ', PORT))