const express = require('express')
const category = express.Router()

category.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM category', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = category