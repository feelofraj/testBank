
app.controller('searchController', function ($scope,$http,$rootScope,checkDataService) {
    $rootScope.menuShow=true;
    $scope.searchTransactionData = [];
    $http.get("data/transaction.json").then(function(response) {
       $scope.searchTransactionData = response.data;
       $scope.searchData = checkDataService.checkDataFunction($scope.searchTransactionData);
      });
      

    $scope.order = function(x) {
        $scope.myOrder = x ; 
    }
  
    });