function StaffController() {
  this.name = "NotLucas"
  this.email = "real@amazing.gov"
  this.phone = "1800CallATT"
};

angular
  .module('app')
  .controller('StaffController', StaffController)