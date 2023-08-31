const Course = require('../models/Course');
class CoursesControllers {
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
    // [GET] /courses/:slug --> slug: biến động
    courseDetails(req, res, next) {
        Course.findOne({slug : req.params.slug}).lean()  //lấy ra slug
            .then(course => res.render('courses/show', {course}))
            .catch(next)
    }
    // create course
    createCourse(req, res, next) {
        res.render('courses/create');
    }
    // [POST] course/store
    store(req, res, next) {
        //req.body -> ấy dữ liệu client gửi lên 
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`; // tạo image
        const newCourse = new Course(formData);
        newCourse.save()  // lưu 1 document vào dữ liệu mongoDB
            .then(() => res.redirect('/')) // chuyển hướng trang web
            .catch(next)
    }
}

module.exports = new CoursesControllers();
