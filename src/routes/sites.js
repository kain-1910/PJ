const express = require('express');
const router = express.Router();
const sitesControllers = require('../app/controllers/SitesControllers');

router.get('/search', sitesControllers.search);
router.get('/', sitesControllers.index);

module.exports = router;

