# Twilio SMS Demo

## Install the following: 

```
npm i express twilio dotenv
```

## Setup your initial node application

```
require('dotenv').config() 

const express = require('express');

const app = express()


app.listen(4040, () => console.log('listening on port 4040'))

```


## Sign up on Twilio

create your first app and get the token and SID and put them into your .env as follows: 

```
TWILIO_ACCOUNT_SID=your SID number from Twilio
TWILIO_AUTH_TOKEN=your auth token from Twilio
```

Get your twilio phone number. Click on manage numbers. Get your number. They will provide you with one you just need to confirm you are okay with the one they selected for you. To your .env add the following: 

```
TWILIO_PHONE_NUMBER=your new twilio phone number
```

