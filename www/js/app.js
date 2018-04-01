
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
  
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.restaurant', {
    url: '/restaurant',
    views: {
      'tab-restaurant': {
        templateUrl: 'templates/tab-restaurant.html',
        controller: 'RestaurantCtrl'
      }
    }
  })
  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AboutCtrl'
      }
    }
  })
  .state('tab.myReservation', {
      url: '/myReservation',
      views: {
        'tab-myReservation': {
          templateUrl: 'templates/tab-myReservation.html',
          controller: 'MyReservationCtrl'
        }
      }
    })
  
    .state('tab.features', {
      url: '/features',
      views: {
        'tab-features': {
          templateUrl: 'templates/tab-features.html',
          controller: 'FeaturesCtrl'
        }
      }
    })
   
    


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/about');

});
