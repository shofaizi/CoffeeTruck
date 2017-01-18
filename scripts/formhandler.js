(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery; //importing jQuery and assinging it to a variable

  function FormHandler(selector) {
    if(!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if(this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function() {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(e) {
      e.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item){
        //serializeArray gets data from form
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);
    });
  }

  App.FormHandler = FormHandler;
  window.App = App;

})(window);
