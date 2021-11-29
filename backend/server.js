const express = require('express')
const app = express()
const port = 4000

app.get('/fetch-tickets/:id', (req, res) => {
  res.send('Hello World!'+req.params.id);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})