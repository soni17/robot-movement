var myApp = angular.module('myApp',[]);

myApp.controller('mainController' , ['$scope' , function($scope){


  $scope.submitInstr = function(){
    if      ($scope.direction === "NORTH" && $scope.instruction==="LEFT") {$scope.direction = "WEST";}
    else if ($scope.direction === "NORTH" && $scope.instruction==="RIGHT") {$scope.direction = "EAST";}
    else if ($scope.direction === "SOUTH" && $scope.instruction==="LEFT") {$scope.direction = "EAST";}
    else if ($scope.direction === "SOUTH" && $scope.instruction==="RIGHT") {$scope.direction = "WEST";}
    else if ($scope.direction === "EAST" && $scope.instruction==="LEFT") {$scope.direction = "NORTH";}
    else if ($scope.direction === "EAST" && $scope.instruction==="RIGHT") {$scope.direction = "SOUTH";}
    else if ($scope.direction === "WEST" && $scope.instruction==="LEFT") {$scope.direction = "SOUTH";}
    else if ($scope.direction === "WEST" && $scope.instruction==="RIGHT") {$scope.direction = "NORTH";}

    $scope.instruction = "";
  }

  $scope.clearInput = function(){
    $scope.instruction = "";
  }

  $scope.resetInput = function(){
    $scope.instruction = "enter instruction for robot";
    $scope.direction = "NORTH";
    $scope.steps = 0;
    $scope.instrHist = [];
    $scope.errorMsg = false;
  }

  $scope.resetInput();


}]);
