const fetchLatestNewsletter = require('./fetcher');
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', async (req, res) => {
    const latestNewsletter = await fetchLatestNewsletter()
    res.send(latestNewsletter)
    //res.send('Latest Newsletter API')
})
app.get('/latest', async (req, res) => {
    const latestNewsletter = await fetchLatestNewsletter()
    res.send(latestNewsletter)
})

module.exports = app