var serviceModule = angular.module('ServiceModule', []);
serviceModule.service('WayPointService', ['$http',function ($http) {

    var wayPointList=function()
    {
        return $http({
            method: 'GET',
            dataType: "jsonp",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Chennai&destination=Pune'
        }).then(function (response) {
            return response;
        });
    }
    return {
        WayPointServiceObj:wayPointList
    }


}]);




serviceModule.service('FinancialService', ['$http',function ($http) {

    var financialList = function () {
        return $http({
            method: 'GET',
            dataType: "jsonp",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            url: 'https://www.quandl.com/api/v3/datasets/WIKI/FB.json'
        }).then(function (response) {
            return response;
        });
    }
    return {
        FinancialServiceObj: financialList
    }





}]);
serviceModule.service('GeoCodeService', ['$http', function ($http) {

    var geoCodeList = function () {
        return $http({
            method: 'GET',
            dataType: "jsonp",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=600049'
        }).then(function (response) {
            return response;
        });
    }
    return {
        GeoCodeServiceObj: geoCodeList
    }




}]);