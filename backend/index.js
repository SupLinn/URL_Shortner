require('dotenv').config()
const express = require('express')
const { connectDB } = require('./config')
const urlRoute = require('./routes/url')

const app = express()
const PORT = 4000;

// mongodb connection
connectDB()

// routes
app.use(express.json())
app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})
