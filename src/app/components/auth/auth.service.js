function AuthService($firebaseAuth) {
  const auth = $firebaseAuth()
  let authData = null
  function storeAuthData(response) {
    authData = response
    return authData
  }
  function onSignIn(user) {
    authData = user
    return auth.$requireSignIn()
  }
  this.login = function(user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  }
  this.register = function(user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  }
  this.logout = function() {
    return auth
      .$signOut()
      .then(function() {
        authData = null
      })
  }
  this.requireAuthentication = function() {
    return auth
      .$waitForSignIn().then(onSignIn)
  }
  this.isAuthenticated = function() {
    return !!authData
  }
  this.getUser = function() {
    if(authData) {
      return authData
    }
  }
}

angular
  .module('components.auth')
  .service('AuthService', AuthService)
