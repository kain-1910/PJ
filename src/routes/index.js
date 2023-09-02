const sitesRouter = require('./sites');
const coursesRouter = require('./courses');
const meRouter = require('./me');
function routes(app) {
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    // luôn đưa '/' xuống dưới cùng
    app.use('/', sitesRouter)
    
}

module.exports = routes;