var myApp = angular.module('myApp',[]);

myApp.controller('mainController' , ['$scope' , function ($scope){

//declare variables inside a function which is to be used by the reset button
  $scope.setupVars = function(){
    $scope.instruction = "enter instruction for robot";
    $scope.direction = "NORTH";
    $scope.steps = 0;
    $scope.instrHist = [];
    $scope.errorMsg = false;
  }

  //invoke function on startup which declares variables
  $scope.setupVars();

  // store all valid instructions in an array
  var instructions = ["LEFT","RIGHT","FORWARD","BACKWARD"];

  //function to determine whether instruction is valid or not
  function isInstructionValid(){
    if ( instructions.indexOf($scope.instruction) == -1 ) {
      return false
    } else {
      return true
    }
  }

  //function to calculate direction
  function calculateDirection(){
    if      ($scope.direction === "NORTH" && $scope.instruction==="LEFT") {$scope.direction = "WEST";}
    else if ($scope.direction === "NORTH" && $scope.instruction==="RIGHT") {$scope.direction = "EAST";}
    else if ($scope.direction === "SOUTH" && $scope.instruction==="LEFT") {$scope.direction = "EAST";}
    else if ($scope.direction === "SOUTH" && $scope.instruction==="RIGHT") {$scope.direction = "WEST";}
    else if ($scope.direction === "EAST" && $scope.instruction==="LEFT") {$scope.direction = "NORTH";}
    else if ($scope.direction === "EAST" && $scope.instruction==="RIGHT") {$scope.direction = "SOUTH";}
    else if ($scope.direction === "WEST" && $scope.instruction==="LEFT") {$scope.direction = "SOUTH";}
    else if ($scope.direction === "WEST" && $scope.instruction==="RIGHT") {$scope.direction = "NORTH";}
  }

  //function to calculate steps taken forward
  function calculateStepsTaken(){
    if      ($scope.instruction==="FORWARD") {$scope.steps += 1;}
    else if ($scope.instruction==="BACKWARD" && $scope.steps != 0) {$scope.steps -= 1;}
    else if ($scope.instruction==="BACKWARD" && $scope.steps == 0) {$scope.errorMsg = "Cannot go backwards when steps is 0";}
  }


//get instruction from user and determine direction and steps taken forward
  $scope.submitInstr = function(){
    if (isInstructionValid()){
      $scope.errorMsg = false;
      $scope.instrHist.unshift({name: $scope.instruction});
      calculateDirection();
      calculateStepsTaken();
      $scope.instruction = "";
    }else {
      $scope.errorMsg = "Invalid instruction. Use only LEFT-RIGHT-FORWARD-BACKWARD";
    }
  }


//clear input box when clicking on it
  $scope.clearInput = function(){
    $scope.instruction = "";
  }




}]);
