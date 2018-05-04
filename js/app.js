var myApp = angular.module('myApp',[]);

myApp.controller('mainController' , function($scope){
  $scope.instruction = "enter instruction for robot";
  $scope.direction = "NORTH";
  $scope.steps = 0;
  $scope.instrHist = ['first','second'];
});
