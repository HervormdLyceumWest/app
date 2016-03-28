angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

$ionicConfigProvider.tabs.position('bottom'); //top

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController.plattegrond', {
    url: '/plattegrond',
    views: {
      'tab1': {
        templateUrl: 'templates/plattegrond.html',
        controller: 'plattegrondCtrl'
      }
    }
  })

  .state('over', {
    url: '/over',
    templateUrl: 'templates/over.html',
    controller: 'overCtrl'
  })

  .state('tabsController.agenda', {
    url: '/agenda',
    views: {
      'tab2': {
        templateUrl: 'templates/agenda.html',
        controller: 'agendaCtrl'
      }
    }
  })

  .state('tabsController.inschrijven', {
    url: '/inschrijven',
    views: {
      'tab3': {
        templateUrl: 'templates/inschrijven.html',
        controller: 'inschrijvenCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/plattegrond')

  

});