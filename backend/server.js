const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const ejs = require('ejs')

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../frontend/views'));
app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')))

const port = 3000

const appRoute = require('./routes/App')

app.use('/', appRoute);

app.listen(port, () => {
    console.log('Listening on port :', port);
})