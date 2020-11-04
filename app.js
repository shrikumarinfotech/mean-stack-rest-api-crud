/**
 * Name: MEAN STACK REST API
 * Description: MEAN STACK API with CRUD operations through API endpoints
 * License: GPLv2.0 or later
 * License URI: https://opensource.org/licenses/GPL-2.0
 */
// Import express
const express = require('express');
const app = express();
// Define port
const port = process.env.PORT || 3000;

// Import mongoose
const mongoose = require('mongoose');

// Configure and connect MongoDB
const config = require('./config');
mongoose.connect(config.databaseUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Configure Template Engine ejs
app.set('view engine', 'ejs');

// Set static files path
app.use('/assets', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/node_modules/angular'));

// Import apiController
const apiController = require('./controllers/apiController');

// Set a GET/verb request
app.get('/', function(req, res){
    res.render('index');
});

// Set GET/verb for retrive user data template
app.get('/user', function(req, res){
    res.render('view-user');
});

// Set POST/verb for update user data template
app.get('/user/update', function(req, res){
    res.render('update-user');
});

// Set DELETE/verb for delete a user
app.get('/user/delete', function(req, res){
    res.render('delete-user');
});

// Invoke apiController with express
apiController(app);


// Listen on port: Run the server
app.listen(port, function(err){
    if(err) throw err;
    console.log(`Listening on port: ${port}`);
});