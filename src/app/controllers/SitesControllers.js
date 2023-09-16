// controll các trang không dùng tài nguyên database
class SitesControllers {
    // [GET] /news
    index(req, res) {
        res.render('home');
    }
    search(req, res) {
        console.log(req.query);
        res.render('search');
    }
}

module.exports = new SitesControllers;