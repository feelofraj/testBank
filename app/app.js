
var app=angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouteProvider) {

$stateProvider
.state('summary',{
  url :'/summary',
  templateUrl :'view/summary.html',
  controller : 'summaryController'
})
.state('transaction',{
  url :'/transaction',
  templateUrl :'view/transaction.html',
  controller : 'transactionController'
})
.state('search',{
  url :'/search',
  templateUrl :'view/search.html',
  controller : 'searchController'
})
.state('logout',{
  url :'/login',
  templateUrl :'view/login.html',
  controller : 'loginController'
})
// .state('check',{
//   url :'/check',
//   templateUrl :'view/check.html',
  
// })
$urlRouteProvider.otherwise('/login');  
}]);
