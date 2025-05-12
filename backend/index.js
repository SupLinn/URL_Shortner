require('dotenv').config()
const path = require('path')
const express = require('express')
const { connectDB } = require('./config')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const Url = require('./models/url')

const app = express()
const PORT = 4000;

// mongodb connection
connectDB()

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

// routes
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/url', urlRoute);
app.use('/', staticRoute)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})
