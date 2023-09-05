const Course = require('../models/Course');
class MeControllers {
    // Lấy dữ liệu từ model
    storedCourses(req, res, next) {

        Promise.all([Course.find({}).lean(), Course.countWithDeleted({ deleted:true }).lean()])
            .then(([courses, deleteCount]) => {
                res.render('me/store_courses', { 
                    courses,
                    deleteCount
                });
            })
            .catch(next)

        // Course.find({}).lean()
        //     .then(courses => {
        //         res.render('me/store_courses', { courses, dl });
        //     })
        //     .catch(next)
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
