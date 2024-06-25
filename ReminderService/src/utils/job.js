const cron = require('node-cron');
const emailService = require('../services/email-service');

/**
 * 10:00 am 
 * Every 5 minutes
 * We will check are their any pending emails which was expected to be sent 
 * by now  and is pending
 */

const setUpJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        const pendingEmails = await emailService.fetchPendingEmails();
        pendingEmails.forEach( (email) => {
            emailService.sendBasicEmail(
                "ReminderService@airline.com",
                email.recepientEmail,
                email.subject,
                email.content
            );
        });
        console.log(pendingEmails);
    });
}

module.exports = setUpJobs;