angular
  .module('mn-form')
  .directive('mnForm', MnFormDirective)

function MnFormDirective() {
  return {
    restrict: 'E',
    link,
  }

  function link(scope, element, attributes) {
    if (attributes.submit) {
      element[0].onSubmit = function() {
        scope.$eval(attributes.submit)
      }
    }
  }
}
