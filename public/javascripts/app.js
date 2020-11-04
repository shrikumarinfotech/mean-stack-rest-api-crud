// Functions for HTML: Sample code
// initiate angular module
angular.module('MyApp', []).config(['$sceDelegateProvider', function($sceDelegateProvider){
    $sceDelegateProvider.trustedResourceUrlList([
        'self',
        '/api/user',
        'http://localhost:3000/users',
        'http://localhost:3000/user/delete'
    ]);
}]);
// define controller using module
angular.module('MyApp').controller('MainController', ctrlFunc);
// define ctrlFunc()
function ctrlFunc(){
    this.message = 'Hello from app.js';
}