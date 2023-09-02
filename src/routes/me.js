const express = require('express');
const router = express.Router();

const meControllers = require('../app/controllers/MeControllers');

router.get('/store/courses', meControllers.storedCourses);
module.exports = router;