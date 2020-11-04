// Register New User
// Definine Angular module MyApp: Previouosly defined in app.js
angular.module('MyApp', []);
// defining controller functions for MainController
angular.module('MyApp').controller('MainController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache){
    // Sample user data
    $scope.user = {
        "id": "",
        username: 'guest',
        password: '1234',
        email: 'testemail@testemail.com',
        firstName: 'John',
        lastName: 'Doe'
    };

    $scope.userid = {
        "id": ""
    };

    // POST method on form submit: Add new user
    // references: 
    // https://docs.angularjs.org/api/ng/service/$http#examples
    // https://docs.angularjs.org/api/ng/directive/ngSubmit
    $scope.addUser = function(){
        if($scope.user){
            $http.post('/api/user/new', $scope.user).then(function(response){
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });
        }
    }

    // GET user data
    $scope.getUserData = function(){
        if($scope.userid){
            $http.get('/api/user/' + $scope.userid.id).then(function(response){
                console.log('Fetching data...');
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });
        }
    }

    // UPDATE user data
    $scope.updateUser = function(){
        if($scope.user.id){
            $http.post('/api/user', $scope.user).then(function(response){
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });
        }
    }

    // DELETE user data
    $scope.removeUserData = function(){
        if($scope.userid){
            // console.log($scope.userid);
            $http.delete('/api/user/' + $scope.userid.id).then(function(response){
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });
        }
    }

}]);