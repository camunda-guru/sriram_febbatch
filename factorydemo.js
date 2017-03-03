var factoryModule = angular.module('FactoryModule', ['ServiceModule']);
factoryModule.factory('dashboardFact', ['$injector',function ($injector) {
    obj = {};
    obj.findService=function(option)
    {
        obj = {};
        angular.module('ServiceModule')['_invokeQueue'].forEach(function (value) {

            if(value[2][0]==option+'Service')
            {
                console.log("Matching....", value[2][0]);
                obj = $injector.get(value[2][0]);
            }

        });
        return obj;

    }
    return obj;

}]);