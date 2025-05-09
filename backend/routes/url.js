const express = require('express')
const {handleGenerateShortUrl, handleRedirectUrl, handleAnalyticsUrl} = require('../controllers/url')
const router = express.Router()

router.post('/', handleGenerateShortUrl)
router.get('/:shortId', handleRedirectUrl)
router.get('/analytics/:id', handleAnalyticsUrl)

module.exports = router