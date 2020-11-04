// Import body-parser
const bodyParser = require('body-parser');
const Users = require('../models/userModel');

module.exports = function(app){

    // Use body-parser
    // create application/json parser
    const jsonParser = bodyParser.json();
    // create application/x-www-from-urlencoded parser
    const urlencodedParser = bodyParser.urlencoded({ extended: true });

    // Set GET/verb method to retrieve user data
    app.get('/api/user/:id', urlencodedParser, function(req, res){
        // console.log(req.params.id);
        if(req.params.id){
            Users.findById(req.params.id, function(err, data){
                if(err) throw err;
                res.send(data);
            });
        }
    });

    // Set POST/verb method to create a new user
    app.post('/api/user/new', jsonParser, function(req, res){
        // create user
        // console.log(req.body);
        const newUser = Users({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });

        // save data
        newUser.save(function(err){
            if(err) throw err;
            res.send('New User Added');
        });
    });

    // Set POST/verb method to update a user
    app.post('/api/user', jsonParser, function(req, res){
        if(req.body.id){
            Users.findByIdAndUpdate(req.body.id, {
                password: req.body.password,
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }, function(err, data){
                // if error throw error
                if(err) throw err;
                // else give a confirm message
                res.send(`User Updated: ${data}`);
            });
        }
    });

    // use DELETE/verb method to delete a user
    app.delete('/api/user/:id', urlencodedParser, function(req, res){
        // console.log(req.params.id);
        if(req.params.id){
            Users.findByIdAndRemove(req.params.id, function(err, data){
                if(err) throw err;
                res.send(`User Deleted: ${data}`);
            })
        }
    });

}