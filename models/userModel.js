const mongoose = require('mongoose');

// Define a new Schema with Mongoose
const Schema = mongoose.Schema;

// Create a new User Schema
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String
});

// Create a new Model with User Shcema
const Users = mongoose.model('Users', userSchema);

// Export the User model
module.exports = Users;

