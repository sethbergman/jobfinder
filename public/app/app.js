angular.module('app',[]);

angular.module('app').controller('testCtrl', function($scope) {
  $scope.jobs = [{
      title: 'Sales Person',
      description:'you will slay dragons'
  }, {
      title:'Accountant',
      description:'you will enter lots of data'
  }];
});
