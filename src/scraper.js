const axios = require('axios')
const cheerio = require('cheerio')

const URL = 'https://myanimelist.net/topanime.php'

function extractDeal(selector) {
    const rank = selector
        .find('td.rank > span').text().trim()
    const title = selector
        .find('td.title > div.detail > div.di-ib > h3 > a').text().trim()
    const score = selector
        .find('td.score > div.js-top-ranking-score-col > span').text().trim()

    return { rank, title, score }
}

async function fetchHTML() {
    try {
        const HTML = (await axios.get(URL)).data
        const selector = cheerio.load(HTML)

        const searchResults = selector('body')
            .find('table.top-ranking-table > tbody > tr.ranking-list')

        const data = searchResults.map((i, result) => {
            const elementSelector = selector(result)
            if (i < 1) console.log(elementSelector)
            return extractDeal(elementSelector)
        }).get()

        return { status: 200, data }
    } catch (err) {
        return { status: 500, msg: `Error while trying to fetch the URL: ${URL}` }
    }
}


module.exports = { fetchHTML }