var app = angular.module('myApp',[]);

// app.controller('AppCtrl','$scope','$http', function($scope, $http) {
// 	console.log("Hello world from controller");
app.controller('AppCtrl', function($scope, $http) {
	console.log("Hello world from controller");


	$http.get('/contactlist').success(function(reponse){
		console.log("I got the data requested")
		$scope.contactlist=reponse;
});

});

