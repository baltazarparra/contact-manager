function ContactEditController ($state, ContactService, cfpLoadingBar, $window) {
  const ctrl = this
  ctrl.updateContact = function(event) {
    cfpLoadingBar.start()
    return ContactService
      .updateContact(event.contact)
      .then(cfpLoadingBar.complete, cfpLoadingBar.complete)
  }
  ctrl.deleteContact = function(event) {
    const message = `Delete ${event.contact.name} from contacts?`
    if ($window.confirm(message)) {
      return ContactService
        .deleteContact(event.contact)
        .then(function() {
          $state.go('contacts')
        })
    }
    return ContactService
      .deleteContact()
  }
}

angular
  .module('components.contact')
  .controller('ContactEditController', ContactEditController)
