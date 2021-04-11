const cron = require('node-cron')
const db = require('./db')
const scraper = require('./scraper')

function startJob() {
    cron.schedule('0 0 */2 * *', async () => {
        const result = await scraper.fetchHTML()
        db.addNewData(result.data)
    })
}

module.exports = { startJob }