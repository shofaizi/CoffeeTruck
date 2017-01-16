(function (window) {
  'use strict';
  var App = window.App || {}; //local variable
  // If there is already an App property of the window, you assign the local
  // App to it. If not, the label App will refer to a new empty object.

  function DataStore() {
    this.data = {};
    // constructor function, to create and customize a new object
    // this.date is similar to DataStore.data
  }

  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
    // create custom DataStore types by adding .prototype.add to DataStore
    // this will allow unique inputs
  }

  DataStore.prototype.get = function(key) {
    return this.data[key];
    //return a specific data
  }

  DataStore.prototype.getAll = function() {
    return this.data;
    // gets all data
  }

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);
