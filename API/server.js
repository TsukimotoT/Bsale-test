const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const product = require('./product')
const category = require('./category')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    port: 3306,
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

app.use('/api/product', product)
app.use('/api/category', category)

app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})