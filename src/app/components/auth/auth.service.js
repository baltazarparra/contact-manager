function AuthService($firebaseAuth) {
  const auth = $firebaseAuth()
  let authData = null
  function storeAuthData(response) {
    authData = response
    return authData
  }
  this.login = function (user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  }
  this.register = function (user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  }
}

angular
  .module('components.auth')
  .service('AuthService', AuthService)
