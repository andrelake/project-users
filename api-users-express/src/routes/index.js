const express = require('express')
const router = express.Router()

router.get('/api', (_, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Funfou o get /api'
    })
})

module.exports = router