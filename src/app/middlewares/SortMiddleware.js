const Course = require('../models/Course');
module.exports = function SortMiddleware(req, res, next) {
    let coursesQuery = Course.find({}).lean();
    res.locals._sort = {  // tạo biến cục bộ trong quá trình xử lí request
        enabled: false,
        type: 'default' 
    };
    if(req.query.hasOwnProperty('_sort')){
        res.locals._sort.enabled = true;
        res.locals._sort.type = req.query.type;
        res.locals._sort.column = req.query.column;
    }

    // sort data
    if(res.locals._sort.enabled === true) {
        coursesQuery = coursesQuery.sort({   // hàm sắp xếp của moongose
            [req.query.column]: req.query.type
        });
    }
    res.locals.sortData = coursesQuery;
    
    next();
};