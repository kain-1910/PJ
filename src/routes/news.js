const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsControllers');

// trang con
router.use('/:slug', newsControllers.newsDetails);

router.use('/', newsControllers.index);
module.exports = router;