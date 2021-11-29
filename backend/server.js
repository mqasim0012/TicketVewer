const express = require('express')
const cors = require('cors')        // to allow cross-origin requests
const axios = require('axios')      // to format get request to zendesk
const app = express()
const port = 4000

require('dotenv').config()          // Add TOKEN environment variable

const config = {
    headers: { 
        'Authorization': `Bearer ${process.env.TOKEN}`
    }
}

app.use(cors());

// The only request the server is being used for
app.get('/fetch-tickets', async (req, res) => {
    try {
        const response = await axios.get(
            'https://zccstudents8986.zendesk.com/api/v2/requests',
            config,
        );
        console.log(response);
        res.send(response.data);
    } catch (error) {
        console.log("error occured");
        console.log(error.response.status);
        const status = error.response.status;
        res.status(status);
        res.send(error.response.data);
    }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})