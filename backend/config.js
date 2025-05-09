// connecting mongodb 

const mongoose = require('mongoose')

    async function connectDB () {
        
        try {
            
            await mongoose.connect(`${process.env.MONGODB_URL}/short-url`);
            console.log("MongoDB connected successfully !!");

        } catch (error) {
            console.log("error while connecting to mongoDB: ", error);   
        }
    }

module.exports = {
    connectDB,
}