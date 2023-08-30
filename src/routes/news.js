const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsControllers');

// trang con / :slug --> biến động
router.get('/:slug', newsControllers.newsDetails);

router.get('/', newsControllers.index);
module.exports = router;