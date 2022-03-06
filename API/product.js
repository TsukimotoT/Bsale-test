const express = require('express')
const product = express.Router()

product.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM product', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = product