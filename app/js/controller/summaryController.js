
app.controller('summaryController', function ($scope,$http,$rootScope,checkDataService) {
    var url = "data/summary.json";
    $rootScope.menuShow=true;
    $http.get(url).then( function(response) {
       $scope.summaryData = response.data;
       $scope.sumData = checkDataService.checkDataFunction($scope.summaryData);
    });
    
   
    $scope.order = function(x) {
        $scope.myOrder = x ;    
    }
    
 });