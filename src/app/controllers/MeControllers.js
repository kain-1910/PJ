const Course = require('../models/Course');
class MeControllers {
    // Lấy dữ liệu từ model
    storedCourses(req, res, next) {
        Course.find({}).lean()
            .then(courses => {
                res.render('me/store_courses', { courses });
            })
            .catch(next)
    }
    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted:true}).lean()
            .then(courses => {
                res.render('me/trash_courses', { courses });
            })
            .catch(next)
    }
    
}

module.exports = new MeControllers();
