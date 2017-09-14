angular.module('wdiltApp', []).controller('wdiltRESTApp', ['$scope', '$http', function ($scope, $http) {

	$scope.showHome = true;
	$scope.showWHWL = false;
	$scope.showTags = false;
	$scope.showResources = false;

	$scope.whwl = "";
	$scope.tags = "";
	$scope.resources = "";

	$scope.submit = function(){
		
	};

	$scope.fetchAll = function(){
		alert("TODO: GET learning.")
	};

	$scope.fetchTags = function(){
		alert("TODO: GET tags.")
	};

	$scope.fetchResources = function(){
		alert("TODO: GET resources.")
	};

	$scope.showHomeOnly = function(){
		$scope.showHome = true;
		$scope.showWHWL = false;
		$scope.showTags = false;
		$scope.showResources = false;
	};

	$scope.showWHWLOnly = function(){
		$scope.showHome = false;
		$scope.showWHWL = true;
		$scope.showTags = false;
		$scope.showResources = false;
	};

	$scope.showTagsOnly = function(){
		$scope.showHome = false;
		$scope.showWHWL = false;
		$scope.showTags = true;
		$scope.showResources = false;
	};

	$scope.showResourcesOnly = function(){
		$scope.showHome = false;
		$scope.showWHWL = false;
		$scope.showTags = false;
		$scope.showResources = true;
	};

}]);