var myApp = angular.module('myApp',[]);

myApp.controller('mainController' , ['$scope' , function($scope){


  $scope.submitInstr = function(){

  }

  $scope.clearInput = function(){
    $scope.instruction = "";
  }

  $scope.resetInput = function(){
    $scope.instruction = "enter instruction for robot";
    $scope.direction = "NORTH";
    $scope.steps = 0;
    $scope.instrHist = ['first','second'];
    $scope.errorMsg = false;
  }

  $scope.resetInput();


}]);
