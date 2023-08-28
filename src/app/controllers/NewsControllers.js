const Course = require('../models/Course');
class NewsControllers {
    // Lấy dữ liệu từ model
    index(req, res) {
        // dùng promise
        Course.find({})
            .then((courses) => res.json(courses))
            .catch((err) => res.status(400).json({ err: 'ERROR' }));

        // res.render('news');
    }
    // [GET] /news/:slug --> slug: biến động
    newsDetails(req, res) {
        res.send('TEST');
    }
}

module.exports = new NewsControllers();
