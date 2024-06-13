const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig.js');
const apiRoutes = require('./routes/index.js')
// const UserService = require('./services/user-service.js');
const {User , Role} = require('./models/index.js');
const db = require('./models/index.js')

const app = express();

const PrepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api' , apiRoutes);

    app.listen(PORT , async ()=>{
        console.log(`server started at port : ${PORT}`);
        
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
        }
        // const u1 = await User.findByPk(10);
        // const r1 = await Role.findByPk(2);

        // u1.addRole(r1);
        // const response = await u1.hasRole(r1);
        // console.log(response);


        // const service = new UserService();
        // const newToken = service.createToken({ email: 'sanskar@gmail.com', id: 1 })
        // console.log('token is' , newToken);
        // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbnNrYXJAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTcxNzc2NDE3NSwiZXhwIjoxNzE3NzY3Nzc1fQ.mxObFOpTjOOJkFAsuUm8_62POrpQyyGp5FirnT1xFrI';
        // const response = service.verifyToken(token);
        // console.log(response)
    })

}

PrepareAndStartServer();