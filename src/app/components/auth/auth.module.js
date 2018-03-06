angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
    var config = {
      apiKey: "AIzaSyCNXe3i2lflgUwtfgnvItR1LuWQOPHJvmI",
      authDomain: "contacts-manager-f33e8.firebaseapp.com",
      databaseURL: "https://contacts-manager-f33e8.firebaseio.com",
      projectId: "contacts-manager-f33e8",
      storageBucket: "contacts-manager-f33e8.appspot.com",
      messagingSenderId: "288648125855"
    };
    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });
    firebase.initializeApp(config);
  });
