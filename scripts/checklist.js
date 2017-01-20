(function(windown) {
  // this module will have three methods:
  // 1. create a checklist item, including the checkbox and the text description
  // 2. add event listener to remove row
  // 3. remove the row of checklist item
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function Checklist() {
    if(!selector) {
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
    if(this.$element === 0) {
      throw new Error('Could not find element with selector ' + selector);
    }
  }

  function Row(coffeeOrder) {
    var $div = $('<div></div>', {
      'data-coffee-order': 'checkbox',
      'class': 'checkbox'
    });

    var $label = $('<label></label>', {
      type: 'checkbox',
      value: coffeeOrder.emailAddress
    });

    var description = coffeeOrder.size + ' ';
    if(coffeeOrder.flavor) {
      description += coffeeOrder.flavor + ' ';
    }

    description += coffeeOrder.coffee + ', ';
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += ' [' + coffeeOrder.strength + 'x]';

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  App.Checklist = Checklist;
  window.App = App;
})(window);
