const mongoose = require('mongoose')

const DeliverySchema = new mongoose.Schema({
    user: String,
    idNumber: Number,
    idNumber2: Number,
    address: String,
    city: String,
    state: String,
    zip: Number,
    notes: String
}, {timestamps: true})


const Deliveries = mongoose.model('Deliveries', DeliverySchema)

module.exports = Deliveries