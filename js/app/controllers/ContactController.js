function ContactController() {
  this.name = "Lucas"
  this.email = "fake@amazing.gov"
  this.phone = "1800MixALot"
  var vm = this;
 
  this.changeName = function (newName) {
    vm.name = newName;
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)