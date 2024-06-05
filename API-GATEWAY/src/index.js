const express = require('express');

const { PORT } = require('./config/serverConfig.js');
const app = express();

console.log(PORT)

const PrepareAndStartServer = () => {
    app.listen(PORT , ()=>{
        console.log(`server started at port : ${PORT}`);
    })
}

PrepareAndStartServer();