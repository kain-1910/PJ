const sitesRouter = require('./sites');
function routes(app) {
    // luôn đưa '/' xuống dưới cùng
    app.use('/', sitesRouter)
}

module.exports = routes;