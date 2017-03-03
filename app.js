var customerModule = angular.module('CustomerModule', []);
customerModule.controller('CustomerDatactrl', ['$scope', function ($scope) {
    $scope.customer =[ {
        customerId: 5768,
        name: "Jaya",
        dob: new Date(1947, 1, 24),
        birthPlace: "Mysore",
        netWorth:10000000
    },

    {
        customerId: 4545,
        name: "Kandaswamy",
        dob: new Date(1980, 1, 22),
        birthPlace: "Chennai",
        netWorth: 10000
    }
    ]

}]);



customerModule.controller('FormCtrl', ['$scope', '$http', function ($scope, $http) {

    $http(
        {
            method: 'GET',
            dataType: "jsonp",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            url: 'http://services.groupkt.com/state/get/IND/all'

        }).then(function (response) {

            console.log(response.data.RestResponse.result);
        });


}]);