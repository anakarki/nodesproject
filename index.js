
const express = require('express');
const app = express();
const path = require('path');
const exphbs  = require('express-handlebars');

// Set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Set Handlebars route

app.get('/', function (req, res) {
    res.render('home', {
    		Ana : "This is all about Ana.."
    });
});
const PORT = process.env.PORT || 3000;
//Set a static folder
app.use(express.static(path.join(__dirname,'public')));

app.listen((PORT), () => console.log ('Listening on the port '+ PORT));

//CHECKING TO MAKE SURE VERSION CONTROL WORKS ON GITHUB