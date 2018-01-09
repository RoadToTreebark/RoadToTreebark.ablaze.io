//******************************************************************************
//                              SETUP
//******************************************************************************
var express = require('express');
var app = express();

//Serve the 'public' dir
app.use(express.static(__dirname+'/public'));

//ejs
app.set('view engine', 'ejs');

//Nodemailer
//var nodeMailer = require('nodemailer');


//******************************************************************************
//                              ROUTES
//******************************************************************************
app.get('/', function(req, res){
  res.render('index');
});






//******************************************************************************
//                          Start the server
//******************************************************************************
app.listen(8080, function(){
  console.log("Momentum Server started!");
});
