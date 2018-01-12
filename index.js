
const express = require('express'),
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());



const getArea = require('./getAarea')


app.use('/getArea', getArea)

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
