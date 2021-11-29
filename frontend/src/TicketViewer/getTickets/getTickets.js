const axios = require('axios');

async function getTickets() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/fetch-tickets')
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err.response.data);
        })
    });
}

export default getTickets;