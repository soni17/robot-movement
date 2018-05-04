var myApp = angular.module('myApp',[]);

myApp.controller('mainController' , ['$scope' , function($scope){

//declare variables inside a function which is to be used by the reset button
  $scope.resetInput = function(){
    $scope.instruction = "enter instruction for robot";
    $scope.direction = "NORTH";
    $scope.steps = 0;
    $scope.instrHist = ['first','second'];
    $scope.errorMsg = false;
  }

  //invoke function on startup which declares variables
  $scope.resetInput();

//check if instruction entered is valid. Display error message if not
  function isInstructionValid(){
    var instructions = ["LEFT","RIGHT","FORWARD","BACKWARD"];

    if ( instructions.indexOf($scope.instruction) == -1 ) {
      $scope.errorMsg = "Invalid instruction";
    } else {
      $scope.errorMsg = false;
    }
  }


//get instruction from user and determine direction and steps taken forward
  $scope.submitInstr = function(){

    isInstructionValid();

    if      ($scope.direction === "NORTH" && $scope.instruction==="LEFT") {$scope.direction = "WEST";}
    else if ($scope.direction === "NORTH" && $scope.instruction==="RIGHT") {$scope.direction = "EAST";}
    else if ($scope.direction === "SOUTH" && $scope.instruction==="LEFT") {$scope.direction = "EAST";}
    else if ($scope.direction === "SOUTH" && $scope.instruction==="RIGHT") {$scope.direction = "WEST";}
    else if ($scope.direction === "EAST" && $scope.instruction==="LEFT") {$scope.direction = "NORTH";}
    else if ($scope.direction === "EAST" && $scope.instruction==="RIGHT") {$scope.direction = "SOUTH";}
    else if ($scope.direction === "WEST" && $scope.instruction==="LEFT") {$scope.direction = "SOUTH";}
    else if ($scope.direction === "WEST" && $scope.instruction==="RIGHT") {$scope.direction = "NORTH";}

    if      ($scope.instruction==="FORWARD") {$scope.steps += 1;}
    else if ($scope.instruction==="BACKWARD" && $scope.steps != 0) {$scope.steps -= 1;}

    $scope.instruction = "";
  }


//clear input box when clicking on it
  $scope.clearInput = function(){
    $scope.instruction = "";
  }




}]);
