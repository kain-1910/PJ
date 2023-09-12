const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan('combined'));
const routes = require('./routes');
// Moongose ghi đè các method của express
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

// in thông tin submit khi có request POST <để trước connect DB và route>
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
// Override Http request
app.use(methodOverride('_method'));

// Connect to DB
const db = require('./config/db');
db.connect();

// middleware
// app.get('/middleware', function) //apply trên /middleware
 //apply middleware trên toàn bộ các trang
app.use(SortMiddleware);

// chuyển hướng trang và xử lí <đưa xuống dưới> 
routes(app);



// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs', // config extension --->(.hbs)
        helpers: {
            // create help method
            sum: (a, b) => a + b,
            sortable: (feild, _sort) => {
                // chỉ thay đổi icon ở đúng feild mình ấn
                const sortType = _sort.column === feild ? _sort.type : 'default';
                const icons = {
                    default: 'fa-solid fa-sort',
                    asc: 'fa-solid fa-arrow-up-wide-short',
                    desc: 'fa-solid fa-arrow-down-short-wide',
                };
                const types = {   // cần hiện thị ngược icon 
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc'
                };

                const icon = icons[sortType];
                const type = types[sortType];

                return `
                    <a href="?_sort&column=${feild}&type=${type}" class="ml-3"> 
                        <i class="${icon}"></i>
                    </a>
                `;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resouces', 'views'));

// listen connections from HTTP requests to the server
app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port}`);
});
