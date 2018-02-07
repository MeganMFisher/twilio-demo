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
        to: process.env.TWILIO_VERIFIED_PHONE_NUMBER,
        body: "Testing... Testing... I'm sending a text from my node server. Did it work?"
    }).then((message) => {
        res.send('Message Sent')
    });

})


app.listen(4040, () => console.log('listening on port 4040'))