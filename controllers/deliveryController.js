const express = require('express')
const router = express.Router()
const { Deliveries } = require('../models')





router.get('/', async (req, res) => {
    try{
        res.json(await Deliveries.find({}))
    } catch(err) {
        res.status(400).json(err)
    }
})


router.post('/', async (req, res) => {
    try{
        res.json(await Deliveries.create(req.body))
    } catch(err) {
        res.status(400).json(err)
    }
})


router.get('/:id', async (req, res) => {
    try {
        res.json(await Deliveries.findById(req.params.id))
    } catch(err) {
        res.status(400).json(err)
    }
})


router.delete('/:id', async (req, res) => {
    try {
        res.json(await Deliveries.findByIdAndDelete(req.params.id))
        // res.redirect('/')
    } catch(err) {
        res.status(400).json(err)
    }
})

// router.edit('/:id/edit', async (req, res) => {

// })


module.exports = router