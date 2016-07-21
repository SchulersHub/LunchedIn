var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl',['$scope', '$http', function($scope, $http){
  console.log('Hello World from controller');

var refresh = function() {
  $http.get('/orders').success(function (response){
    console.log("I got the data I requested");
    $scope.orders = response;
    $scope.order = '';
  });
};

refresh();

$scope.addOrder = function() {
  console.log($scope.order);
  $http.post('/orders', $scope.order).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/orders/' + id).success(function(response){
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/orders/' + id).success(function(response) {
    $scope.order = response;
  });
};

$scope.update = function() {
  console.log($scope.order._id);
  $http.put('/orders/' + $scope.order._id, $scope.order).success(function(response){
    refresh();
  });

};


}]);
