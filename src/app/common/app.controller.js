function AppController(AuthService, $state) {
  const ctrl = this
  ctrl.user = AuthService.getUser()
  ctrl.logout = function() {

  }
}

angular
  .module('common')
  .controller('AppController', AppController)
