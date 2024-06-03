const express = require('express');
const app = express();

const PORT = 3000;

const PrepareAndStartServer = () => {
    app.listen(PORT , ()=>{
        console.log('server started');
    })
}

PrepareAndStartServer();