require('dotenv').config()
const {MONGODB_URI} = process.env
const methodOverride = require('method-override')
const express = require('express');
const app = express();
const PORT = 4000;

const mongoose = require('mongoose')
const deliveriesController = require('./controllers/deliveryController')





///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect('MONGODB_URI')
// Connection Events
mongoose.connection
.on("open", () => console.log("Your are connected to mongoose"))
.on("close", () => console.log("Your are disconnected from mongoose"))
.on("error", (error) => console.log(error));


//Middleware
app.use(express.json())
app.use(methodOverride('_method'))
app.use('/deliveries', deliveriesController)


app.get('/', (req, res) => {
    res.send('Hello')
})




app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));