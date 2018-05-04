var myApp = angular.module('myApp',[]);

myApp.controller('mainController' , ['$scope' , function($scope){

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

//check if instruction entered is valid. Display error message if not
//if valid also add to instructions history array at the beginning
  function isInstructionValid(){
    var instructions = ["LEFT","RIGHT","FORWARD","BACKWARD"];

    if ( instructions.indexOf($scope.instruction) == -1 ) {
      $scope.errorMsg = "Invalid instruction. Use only LEFT-RIGHT-FORWARD-BACKWARD";
    } else {
      $scope.errorMsg = false;
      $scope.instrHist.unshift({name: $scope.instruction});
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
    else if ($scope.instruction==="BACKWARD" && $scope.steps == 0) {$scope.errorMsg = "Cannot go backwards when steps is 0"}

    $scope.instruction = "";

  }


//clear input box when clicking on it
  $scope.clearInput = function(){
    $scope.instruction = "";
  }




}]);
