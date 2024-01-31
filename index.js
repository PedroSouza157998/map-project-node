const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config()

const {clientRouter} = require('./server/routes/router.client')

const app = express()
const port = process.env.PORT
app.use(bodyParser.json());
app.use(cors())

app.use('/client', clientRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})