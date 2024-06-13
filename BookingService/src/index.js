const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3002;

const setUpAndStartServer = () => {
    app.listen(PORT , () => {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));


        console.log(`Server started on port ${PORT}`);
    });
}
setUpAndStartServer();