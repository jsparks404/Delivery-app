const express = require('express');
const app = express();
const mongoose = require('mongoose')
const PORT = 4000;


//Middleware
app.use(express.json())



app.get('/', (req, res) => {
    res.send('Hello')
})




app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));