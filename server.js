require('dotenv').config() 

const express = require('express');
const bodyParser = require('body-parser');
const client = require('twilio')(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
        );
const MessagingResponse = require('twilio').twiml.MessagingResponse;
        
const app = express()
app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/sendSMS', (req, res) => {
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.TWILIO_VERIFIED_PHONE_NUMBER,
        body: "Testing... Testing... I'm sending a text from my node server. Did it work?"
    }).then((message) => {
        res.send('Message Sent')
    });

})


app.post('/sms', function(req, res) {
    console.log(req.body.Body)
    const twiml = new MessagingResponse();
    const msg = twiml.message('Check out this sweet owl!');
    
     // Add a picture message.
     msg.media('https://demo.twilio.com/owl.png');
    
     res.writeHead(200, {'Content-Type': 'text/xml'});
     res.end(twiml.toString());
});



app.listen(4040, () => console.log('listening on port 4040'))