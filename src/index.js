const path = require('path'); 
const express = require('express');   
const app = express();      
const port = 3000;   
const morgan = require('morgan');  
const handlebars = require('express-handlebars'); 
app.use(express.static(path.join(__dirname, 'public'))); 
// app.use(morgan('combined'));  

// chuyển hướng trang và xử lí 
const routes = require('./routes')
routes(app);

// Connect to DB
const db = require('./config/db')
db.connect();

// in thông tin submit khi có request POST
app.use(express.urlencoded({
  extended:true
})); 
app.use(express.json());

// Template engine
app.engine('hbs', handlebars.engine({
  extname:'hbs' // config extension --->(.hbs)
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resouces','views'));

// listen connections from HTTP requests to the server
app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
})


