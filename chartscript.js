var chartModule = angular.module('ChartModule', ['chart.js']);

chartModule.controller('LineCtrl', ['$scope', function ($scope) {
    $scope.labels = ['Sachin','Rahul'];
       
    $scope.series = ['Series A','Series B'];
    $scope.data = [[56,89,90,90,75],[43,67,90,56,67]];
   
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' },
        { yAxisID: 'y-axis-2' }];

    $scope.options = {
        scales: {
            yAxes: [
              {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left'
              },
              {
                  id: 'y-axis-2',
                  type: 'linear',
                  display: true,
                  position: 'right'
              }
            ]
        }
    };

}
]);