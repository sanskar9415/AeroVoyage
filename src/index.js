const express = require('express');
const { PORT } = require('./config/serverConfig.js');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index.js');

const SetUpAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api' , ApiRoutes);



    app.listen(PORT , async () => {
        console.log(`server started at ${PORT}`);
    })
}

SetUpAndStartServer();