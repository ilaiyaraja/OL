'use strict';

var tech_city_media = angular.module('tech_city_media', []);


tech_city_media.controller('tcm_controller', function ($scope) {
	  
	 $scope.header = 'partials/header.html';

	 $scope.templates = [
	    {'name':'first_section','url': 'partials/first_section.html'},
	    {'name':"what_we_do",'url': 'partials/what_we_do.html'},
	    {'name':'why_us','url': 'partials/why_us.html'},
	    {'name':'our_clients','url': 'partials/our_clients.html'},
	    {'name':'the_team','url': 'partials/the_team.html'},
	    {'name':'get_in_touch','url': 'partials/get_in_touch.html'}];
	 
	 $scope.footer = 'partials/footer.html';
	 
	
});


