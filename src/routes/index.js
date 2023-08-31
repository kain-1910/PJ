const sitesRouter = require('./sites');
const coursesRouter = require('./courses')
function routes(app) {

    app.use('/courses', coursesRouter);
    // luôn đưa '/' xuống dưới cùng
    app.use('/', sitesRouter)
    
}

module.exports = routes;