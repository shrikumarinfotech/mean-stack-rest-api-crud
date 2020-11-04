const config = require('./config.json');

module.exports = {
    databaseUri: function(){
        return `mongodb+srv://${config.username}:${config.password}@cluster0.ayprn.mongodb.net/${config.collection}?retryWrites=true&w=majority`;
    }
}