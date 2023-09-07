const Course = require('../models/Course');
class CoursesControllers {
    // Lấy dữ liệu từ model
    index(req, res, next) {
        // dùng promise
        Course.find({}).lean()
            .then(courses => {
                // courses = courses.map(course => course.toObject()); // ghi đè lại dữ liệu để tránh lỗi
                res.render('courses', { courses }) // Truyền dữ liệu sang bên view để render
            })
            .catch(next)

        // res.render('news');
    }
    // [GET] /courses/:slug --> slug: biến động
    courseDetails(req, res, next) {
        Course.findOne({ slug : req.params.slug }).lean()  //lấy ra slug
            .then(course => res.render('courses/show', {course}))
            .catch(next)
    }
    // [GET] courses/create
    createCourse(req, res, next) {
        res.render('courses/create');
    }
    // [POST] course/store -- create new course
    store(req, res, next) {
        //req.body -> ấy dữ liệu client gửi lên 
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`; // tạo field image
        const newCourse = new Course(req.body);
        newCourse.save()  // lưu 1 document vào dữ liệu mongoDB
            .then(() => res.redirect('/me/store/courses')) // chuyển hướng trang web
            .catch(next)
    }
    // [GET] courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', {course}))
            .catch(next)
    }
    // [PUT] update course
    update(req, res, next) {
        Course.updateOne({ _id : req.params.id }, req.body)
            .then(() => res.redirect('/me/store/courses'))
            .catch(next);
        
    }
    // [DELETE] courses/:id
    destroy(req, res, next) {
        Course.delete({ _id : req.params.id })  // soft delete
            .then(() => res.redirect('back'))
            .catch(next);
        
    }
    // [PATCH] courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id : req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        
    }
    // [DELETE] courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id : req.params.id })  // delete in DB
            .then(() => res.redirect('back'))
            .catch(next);
        
    }
    // [POST] handle-form-actions
    handleFormActions(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Course.delete({ _id :{ $in: req.body.courseIds } })  // xóa tất cả document có _id trong req.body.courseIds
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({message: 'Action is valid'})
        }

    }
}

module.exports = new CoursesControllers();
