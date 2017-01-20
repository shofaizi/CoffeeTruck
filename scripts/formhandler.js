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
  };

  FormHandler.prototype.addSubmitHandler = function(fn) {
    // fn is used to access truck instance's createOrder method as a callback
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item){
        //serializeArray gets data from form
        data[item.name] = item.value;
        //placing each item with its value into data object
        console.log(item.name + " is " + item.value);
      });
      console.log(data);
      fn(data); //callback is invoked and will pass user's data
      this.reset();
      this.elements[0].focus();
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
