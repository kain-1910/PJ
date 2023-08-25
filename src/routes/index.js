const sitesRouter = require('./sites');
const newsRouter = require('./news')
function routes(app) {

    app.use('/news', newsRouter);
    // luôn đưa '/' xuống dưới cùng
    app.use('/', sitesRouter)
    
}

module.exports = routes;