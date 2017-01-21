(function(windown) {
  // this module will have three methods:
  // 1. create a checklist item, including the checkbox and the text description
  // 2. remove the row of checklist item
  // 3. add event listener to remove row
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if(!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    if(this.$element === 0) {
      throw new Error('Could not find element with selector ' + selector);
    }
  }

  CheckList.prototype.addRow = function(coffeeOrder){
    this.removeRow(coffeeOrder.emailAddress)
    //remove any existing rows that match the email address

    var rowElement = new Row(coffeeOrder);
    // create a new instance of a row, using the coffee order info

    this.$element.append(rowElement.$element);
    // add the new row instance's $element property to the checklist
  };

  CheckList.prototype.removeRow = function(email) {
    this.$element
      .find('[value="' + email + '"]')
      // find value that is equal to user's email
      .closest('[data-coffee-order="checkbox"]')
      // search for ancestor whose data-coffee-order attribute is equal to checkbox
      .remove();
  };

  CheckList.prototype.addClickHandler = function(fn) {
    this.$element.on('click', 'input', function(e) {
      // filtering selector tells event handler to run the callback only if the event was
      // triggered by an <input> element
      var email = e.target.value;
      this.removeRow(email);
      fn(email);
    }.bind(this));
  };

  function Row(coffeeOrder) {
    var $div = $('<div></div>', {
      'data-coffee-order': 'checkbox',
      'class': 'checkbox'
    });

    var $label = $('<label></label>');

    var $checkbox = $('<input></input>', {
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
  };

  App.CheckList = CheckList;
  window.App = App;
})(window);
