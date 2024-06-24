const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron');

const app = express();


const setUpAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT , () => {
        console.log(`Server started on port ${PORT}`);

        cron.schedule('*/2 * * * *', () => {
            console.log('running a task every 2 minutes');
        });

        // sendBasicEmail(
        //     'support@admin.com',
        //     'sanskarrrgupta@gmail.com',
        //     'This is a testing email',
        //     'helloww from my reminder service'
        // )
    });
}
setUpAndStartServer();