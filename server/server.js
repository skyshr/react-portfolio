const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');
// const db = require('./models/index');

app.use('/api', api);
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running at port ${PORT}...}`);
})