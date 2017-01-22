(function(window){
  'use strict';
  var App = window.App || {};

  function Truck(truckId,db) {
    this.truckId = truckId;
    this.db = db;
    // passing two arguments so that each instance will have unique identifier
    // the argument db refers to "new App.DataStore();"
  }

  Truck.prototype.createOrder = function(order) {
    console.log('Adding order for ' + order.emailAddress);
    return this.db.add(order.emailAddress, order);
    // returning promises and deffereds lets any object that calls createOrder
    // and deliverOrder register callbacks that are triggered when asynchronous
    // work is finished
  }

  Truck.prototype.deliverOrder = function(customerId) {
    console.log('Delivering order for ' + customerId);
    return this.db.remove(customerId);
  }

  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log('Truck #' + this.truckId + ' has pending orders: ');
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
    //bind(this) refers to Truck instance
  };

  App.Truck = Truck;
  window.App = App;
})(window);
