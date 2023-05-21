const app = require('express')();
const fetchLatestNewsletter = require('../fetcher');

app.get('api/', async (req, res) => {
    res.send('Latest Newsletter API')
})
app.get('api/latest', async (req, res) => {
    const latestNewsletter = await fetchLatestNewsletter()
    res.send(latestNewsletter)
})
