const Course = require('../models/Course');
class NewsControllers {
    // Lấy dữ liệu từ model
    index(req, res, next) {
        // dùng promise
        Course.find({}).lean()
            .then(courses => {
                // courses = courses.map(course => course.toObject()); // ghi đè lại dữ liệu để tránh lỗi
                res.render('news', {courses}) // Truyền dữ liệu sang bên view để render
            })
            .catch(next)

        // res.render('news');
    }
    // [GET] /news/:slug --> slug: biến động
    newsDetails(req, res) {
        res.send('TEST');
    }
}

module.exports = new NewsControllers();
