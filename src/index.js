const path = require('path');  // manager paths of app
const express = require('express');   // express --> develop web based NodeJS
const app = express();      // return methods of express
const port = 3000;   // network port
const morgan = require('morgan');  // morgan --> log HTTP request on terminal
const handlebars = require('express-handlebars'); // Template engine(handlebars) --> separate the HTML structure 
app.use(express.static(path.join(__dirname, 'public'))); // config static files(img, video, html, css, ....) from public folder
// app.use(morgan('combined'));  // logger HTTP request using combined format

app.engine('hbs', handlebars.engine({
  extname:'hbs' // config extension --->(.hbs)
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resouces/views'));
// define route of request HTTP GET and handle HTTP GET requests
app.get('/', (req, res) => {  // req-request, res-response
  res.render('home'); 
});
app.get('/news', (req, res) => {
  res.render('news');
});

// Query parameters
// Syntax: path?param1=value&param2=value&...
// Khi truyền query param, req sẽ trả về 1 object query lưu thông tin về các param truyền vào
app.get('/search', (req, res) => {
  console.log(req.query);
  res.render('search');
});

// listen connections from HTTP requests to the server
app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
})


