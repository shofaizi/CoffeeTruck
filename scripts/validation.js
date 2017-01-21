(function(window) {
  'use strict';
  var App = window.App || {};
  // this module wil be used for organizing functions
  var Validation = {
    isCompanyEmail : function(email) {
      return /.+bignerdranch\.com$/.test(email);
      // regex between / / ( .+ one or more characters) (\ should be treated as literal period)
      // ($ indicates end of string)(.test is a method)
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
