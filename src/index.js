const express = require('express');
const { PORT } = require('./config/serverConfig.js');

const SetUpAndStartServer = async () => {

    const app = express();
    app.listen(PORT , () => {
        console.log(`server started at ${PORT}`);
        console.log(process.env);
    })
}

SetUpAndStartServer();