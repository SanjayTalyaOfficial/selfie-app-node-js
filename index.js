const express = require('express');
const { request, response } = require('express');
const app = express();
app.listen(3000, () => console.log('listening'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))
app.post('/api', (request, responce) => {
    console.log('I got a message!');
    console.log(request.body);
    const data = request.body;
    response.json({
        status:'success',
        latitude:lat,
        longitude: lon
    });

});