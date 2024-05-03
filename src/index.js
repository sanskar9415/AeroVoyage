const express = require('express');
const { PORT } = require('./config/serverConfig.js');
const bodyParser = require('body-parser')


const SetUpAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));



    app.listen(PORT , () => {
        console.log(`server started at ${PORT}`);
        console.log(process.env);
    })
}

SetUpAndStartServer();