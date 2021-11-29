const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000

app.use(cors());

app.get('/fetch-tickets', (req, res) => {
  res.send('Fetching tickets!');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})