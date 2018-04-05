const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const sorter = require('./sorter')

app.get('/', (req, res) => {
	res.status(200).send({todos:[ 'shower', 'feed kitten']})
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()); 

app.post('/sort', (req, res) => {
	const unsorted = req.body['numbers'];
	const responseJSON = {
		unsorted, 
		sorted: sorter(unsorted)
	}
	res.status(201).send(responseJSON);
})

module.exports = app;