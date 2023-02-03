const mongoose = require('mongoose')
require('dotenv').config()


const MONGODB_URI = process.env.MONGODB_URI || URL

mongoose.connect(MONGODB_URI)


mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
  });
  
  mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error 😥', error);
  });
  
  mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));
  

  
