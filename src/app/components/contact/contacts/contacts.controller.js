function ContactsController ($state) {
  const ctrl = this
  ctrl.goToContact = function(event) {
    $state.go('contact', {id: event.contactId})
  }
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController)
