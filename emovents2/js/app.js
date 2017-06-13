var app = angular.module("emoventsApp", []);

app.controller("commentsCtrl", function($scope, $http) {
	$scope.init = function() {

	};
	$http.get('/emovents/comments/comments.json').success(function(data){
    	$scope.comments = data;
        $("#comments-slider").lightSlider({
            item:1,
            slideMargin: 0,
            speed: 3000,
            pause: 5500,
            auto: true,
            loop: true,
            pager: false
        });
	});
	$http.get('/emovents/sponsors/sponsors.json').success(function(data){
    	$scope.sponsors = data;
        $("#sponsors-slider-first").lightSlider({
            item:4,
            slideMargin: 0,
            speed: 2000,
            pause: 3500,
            auto: true,
            loop: true,
            pager: false,
            controls: false
        });
        $("#sponsors-slider-second").lightSlider({
            item:4,
            slideMargin: 0,
            speed: 2000,
            pause: 3500,
            auto: true,
            loop: true,
            pager: false,
            controls: false
        });
	});
});