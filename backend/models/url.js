const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({

    shortId : {
        type: String,
        required: true,
        unique: true
    },
    redirectedURL: {
        type: String,
        required: true,
    },
    visitHistory: [{timestamp: {
        type: Number,
        }
    }]

},{timestamps: true})

const Url = mongoose.model('url', urlSchema);

module.exports = Url