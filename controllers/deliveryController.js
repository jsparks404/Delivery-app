const express = require('express')
const router = express.Router()
const { Deliveries } = require('../models')

router .get('/', async (req, res) => {
    try{
        res.json(await Deliveries.find({}))
    } catch(err) {
        res.status(400).json(err)
    }
})


module.exports = router