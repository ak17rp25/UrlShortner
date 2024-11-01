const express = require('express');

const router = express.Router();
const {handleGenerateRandomShortURL,handleRedirectRandomShortURL,handleAnalyticsCount} = require('../controller/url');

router.post('/',handleGenerateRandomShortURL);
router.get('/:id',handleRedirectRandomShortURL);
router.get('/analytics/:id',handleAnalyticsCount);

module.exports = router;