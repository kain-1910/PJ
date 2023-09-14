const Course = require('../models/Course');
module.exports = function sortMiddleware(req, res, next) {
    res.locals._sort = {  // tạo biến cục bộ trong quá trình xử lí request
        enabled: false,
        type: 'default' 
    };
    
    if(req.query.hasOwnProperty('_sort')){
        res.locals._sort.enabled = true;
        res.locals._sort.type = req.query.type;
        res.locals._sort.column = req.query.column;
    }
    next();
};