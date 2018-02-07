require('dotenv').config() 

const express = require('express');
const client = require('twilio')(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
        );

const app = express()


app.post('/sendSMS', (req, res) => {
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: '8017224693',
        body: "You just sent an SMS from Node.js using Twilio!"
    }).then((messsage) => {
        console.log(message.sid)
        res.send(message.sid)
    });

})


app.listen(4040, () => console.log('listening on port 4040'))