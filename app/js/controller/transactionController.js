
app.controller('transactionController', function ($scope,$http,$rootScope,checkDataService) {
    var url = "data/transaction.json";
    $rootScope.menuShow=true;
    $http.get(url).then( function(response) {
       $scope.transactionData = response.data;
       $scope.transactData = checkDataService.checkDataFunction($scope.transactionData);
    });


    $scope.order = function(x) {
        $scope.myOrder = x ;
       
    }
    
 });