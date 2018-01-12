const express = require('express'),
const bodyParser = require('body-parser');
const app = express();
const getArea = require('./area');

app.get('/',function(req,res) {
	var xxx = getArea([parseInt(req.query.side1),parseInt(req.query.side2)]);
	var area = {area : xxx}
	if(xxx == -1)
		res.status = 400;
	res.json(area);
})

module.exports = app;