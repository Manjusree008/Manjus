(function(angular) {
  'use strict';
var myApp = angular.module('scopeInheritance', []);
myApp.controller('MainController', ['$scope', function($scope) {
  $scope.name1 = 'shahana';
}]);
myApp.controller('ChildController', ['$scope', function($scope) {
  $scope.name2 = 'Manju';
}]);
})(window.angular);

/*
Copyright 2020 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/