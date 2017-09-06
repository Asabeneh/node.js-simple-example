var express = require('express');

var todoController = require('./controllers/todoController');
var app = express();

//set up template engine
app.set('view engine','ejs');

//static fils
app.use(express.static('./public'));

//fire controllers
todoController(app);
//listen to port
app.listen(3000);
console.log("The server is running on port 3000!");
