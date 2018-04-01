angular.module('starter.controllers', [])

.controller('RestaurantCtrl', function($scope,Reservations,$state) {
    $scope.$on('$ionicView.enter',function(e){
        $scope.reservations = {};
        $scope.saveReservation = function(){
            Reservations.save($scope.reservations);
            $state.go("tab.myReservation");
        }
    })
    
})
.controller('AboutCtrl', function($scope) {
    
    
})
.controller('MyReservationCtrl', function($scope,Reservations) {
    $scope.$on('$ionicView.enter',function(e){
    $scope.myReservations = Reservations.getAll();
});
  
})
.controller('FeaturesCtrl', function($scope) {
    
      
    })
.controller('AccountCtrl', function($scope) {

  
});
