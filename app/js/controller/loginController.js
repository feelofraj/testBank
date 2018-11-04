
app.controller('loginController', function ($scope, $window, loginAuthService, $state, $rootScope) {
    // var url = "data.json"; ,$http

    // $http.get(url).then(function (response) {
    //     $scope.transactionData = response.data;});

    $rootScope.menuShow = false;
    $rootScope.error = false;
    $scope.validate = function () {
        $scope.valid = loginAuthService.validateFunction($scope.username, $scope.password);

        if ($scope.valid == true) {
            $rootScope.menuShow = true;
            $state.go('summary');
        }
        $rootScope.error = true;
    }
//     $scope.soapCall = function () {
//         console.log("enterng soapcall function with value");
//         var soapUrl="https://www.w3schools.com/xml/tempconvert.asmx";
//   //  $scope.soapVar = soapCallService.soapCallFunction(soapUrl,CelsiusToFahrenheit,$scope.temperInput);
//     $window.alert("$scope.soapVar");
// }
});