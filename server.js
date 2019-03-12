const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3003

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/test', (req, res) => {
	res.send(req.body.challenge)
})

app.listen(port, () => {
	console.log(`Listening on Port ${port}!`)
});
