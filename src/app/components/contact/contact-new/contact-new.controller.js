function ContactNewController(ContactService, $state) {
  const ctrl = this
  ctrl.$onInit = function() {
    ctrl.contact = {
      name: '',
      email: '',
      job: '',
      location: '',
      social: {
        facebook: '',
        github: '',
        twitter: '',
        linkedin: ''
      },
      tag: 'none'
    }
  }
  ctrl.createNewContact = function(event) {
    return ContactService
      .createNewContact(event.contact)
      .then(function(contact) {
        $state.go('contact', {
          id: contact.key
        })
      })
  }
}

angular
  .module('components.contact')
  .controller('ContactNewController', ContactNewController)
