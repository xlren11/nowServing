var app=angular.module("mp4",["ngRoute","mp4Controllers","mp4Services","720kb.datepicker","ngDialog","xeditable"]);app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){$routeProvider.when("/",{templateUrl:"partials/home.html",controller:"HomeCtrl"}).when("/user/portfolio/:id",{templateUrl:"partials/portfolio.html",controller:"PortfolioCtrl"}).when("/user/edit/:id",{templateUrl:"partials/editPortfolio.html",controller:"EditPortfolioCtrl"}).when("/user/:id",{templateUrl:"partials/queue.html",controller:"QueueCtrl"}).when("/request/:id",{templateUrl:"partials/requestDetail.html",controller:"DetailCtrl"}).when("/newrequest/:id",{templateUrl:"partials/newRequest.html",controller:"NewRequestCtrl"}).otherwise({redirectTo:"/"})}]),app.run(function($rootScope,editableOptions){$rootScope.$apply($(document).foundation())});