const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig.js');
const apiRoutes = require('./routes/index.js')
const UserRepository = require('./repository/user-repository.js')

const app = express();

const PrepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api' , apiRoutes);

    app.listen(PORT , async ()=>{
        console.log(`server started at port : ${PORT}`);
        // const userRepository = new UserRepository();

        // const user = await userRepository.getById(3);
    
        // console.log(user);
    })

}

PrepareAndStartServer();