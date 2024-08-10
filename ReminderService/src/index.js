const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');   

const jobs = require('./utils/job');
const { createChannel } = require('./utils/messageQueue');

const app = express();


const setUpAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    const channel = await createChannel();

    app.post('/api/v1/tickets' , TicketController.create);

    app.listen(PORT , () => {
        console.log(`Server started on port ${PORT}`);

       jobs();

        // sendBasicEmail(
        //     'support@admin.com',
        //     'sanskarrrgupta@gmail.com',
        //     'This is a testing email',
        //     'helloww from my reminder service'
        // )
    });
}
setUpAndStartServer();