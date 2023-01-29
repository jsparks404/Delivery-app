

const methodOverride = require('method-override')
const express = require('express')
const app = express()
const PORT = 4000



const deliveriesController = require('./controllers/deliveryController')


require('./config/db.connection')




//Middleware
app.use(express.json())
app.use(methodOverride('_method'))
app.use('/deliveries', deliveriesController)


app.get('/', (req, res) => {
    res.send('Hello')
})




app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));