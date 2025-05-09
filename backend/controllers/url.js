const URL = require('../models/url')
const shortid = require('shortid')


async function handleGenerateShortUrl (req, res) {
    try {
        const originalURL = req.body;

        if (!originalURL.url) {
            return res.status(400).json({error: "url is required"})
        }

        const shortID = shortid()
        await URL.create({
            shortId : shortID,
            redirectedURL: originalURL.url,
            visitHistory: []
        })

        return res.json({id: shortID})

    } catch (error) {
        console.log("Something went wrong in generate: ", error);
    }
} 

async function handleRedirectUrl (req, res) {
    const shortUrl = req.params.shortId;
    const result = await URL.findOneAndUpdate (
        {
            shortId: shortUrl
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        }
    )
    res.redirect(result.redirectedURL)
}

async function handleAnalyticsUrl (req, res) {
    const urlId = req.params.id;
    const result = await URL.findOne({
        shortId : urlId,
    })

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateShortUrl,
    handleRedirectUrl,
    handleAnalyticsUrl
}