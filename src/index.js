const path = require('path'); 
const express = require('express');   
const app = express();      
const port = 3000;   
const morgan = require('morgan');  
const handlebars = require('express-handlebars'); 
app.use(express.static(path.join(__dirname, 'public'))); 
// app.use(morgan('combined'));  
const routes = require('./routes')
const methodOverride = require('method-override');
// in thông tin submit khi có request POST <để trước connect DB và route>
app.use(express.urlencoded({
  extended:true
})); 
app.use(express.json());
// Override Http request
app.use(methodOverride('_method'));

// Connect to DB
const db = require('./config/db')
db.connect();

// chuyển hướng trang và xử lí 
routes(app);


// Template engine

app.engine('hbs', handlebars.engine(
  {
    extname:'hbs', // config extension --->(.hbs)
    helpers: {   // create help method
      sum: (a, b) => a+b
    }
  }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resouces','views'));

// listen connections from HTTP requests to the server
app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
})


