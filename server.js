const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
        console.log(req.body)
        res.send(req.body)
})
app.post('/slasher', (req, res) => {
        console.log(req.body)
        res.send(req.body)
})
app.get('/', (req, res) => {
        res.send('<h1>Ben Kim + Michael Fox</h1>')
})

app.listen(port, () => {
        console.log(`Listening on Port ${port}!`)
});
~
