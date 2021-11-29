const axios = require('axios');

async function getUser() {
    axios.get('http://localhost:4000/fetch-tickets')
        .then(res => {
            console.log("Response recieved");
            console.log(res);
        })
        .catch(err => {
            console.log("Error occurred");
            console.log(err);
        });
    console.log("requested");
    return;
}

export default getUser;