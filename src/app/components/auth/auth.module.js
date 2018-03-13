angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function($firebaseRefProvider) {
    const config = {
      apiKey: "AIzaSyCNXe3i2lflgUwtfgnvItR1LuWQOPHJvmI",
      authDomain: "contacts-manager-f33e8.firebaseapp.com",
      databaseURL: "https://contacts-manager-f33e8.firebaseio.com",
      projectId: "contacts-manager-f33e8",
      storageBucket: "contacts-manager-f33e8.appspot.com",
      messagingSenderId: "288648125855"
    }
    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      })
    firebase.initializeApp(config)
  })
  .run(function($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function(state) {
        return !!(state.data && state.data.requiredAuth)
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function () {
          return $state.target('auth.login')
        })
    })
    $transitions.onStart({
      to: 'auth.*'
    }, function() {
      if (AuthService.isAuthenticated()) {
        return $state.target('app')
      }
    })
  })
