const express = require('express');
const router = express.Router();

const coursesControllers = require('../app/controllers/CoursesControllers');

// trang con / :slug --> biến động
router.get('/create', coursesControllers.createCourse);
router.post('/store', coursesControllers.store);
router.get('/:id/edit', coursesControllers.edit); 
router.put('/:id', coursesControllers.update);  
router.delete('/:id', coursesControllers.destroy);  
router.delete('/:id/force', coursesControllers.forceDestroy);  
router.patch('/:id/restore', coursesControllers.restore);  
router.get('/:slug', coursesControllers.courseDetails);
router.get('/', coursesControllers.index);
module.exports = router;