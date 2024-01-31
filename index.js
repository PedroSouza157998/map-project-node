const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const {clientRouter} = require('./server/routes/router.client')

const app = express()
const port = 5000
app.use(bodyParser.json());
app.use(cors())

app.use('/client', clientRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})