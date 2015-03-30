'use strict';

angular.module('starter')
	.factory('Config', function() {
		var apiBase = window.cordova? "http://localhost:8080" : "http://localhost:8080";
	  return {
	      apiBase : apiBase
	  };
	});