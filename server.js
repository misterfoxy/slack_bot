const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3004

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/test', (req, res) => {
	res.send(req.body.challenge)
})

app.get('/', (req, res) => {
	res.send('<h1>Ben Kim + Michael Fox</h1>')
})

app.listen(port, () => {
	console.log(`Listening on Port ${port}!`)
});
