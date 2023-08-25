
class NewsControllers {

    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug --> slug: biến động
    newsDetails(req, res) {
        res.send('TEST');
    }

}

module.exports = new NewsControllers;