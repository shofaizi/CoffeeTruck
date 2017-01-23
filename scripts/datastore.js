(function (window) {
  'use strict';
  var App = window.App || {}; //local variable
  // If there is already an App property of the window, you assign the local
  // App to it. If not, the label App will refer to a new empty object.
  var Promise = window.Promise;

  function DataStore() {
    this.data = {};
    // constructor function, to create and customize a new object
    // this.date is similar to DataStore.data
  }

  function promiseResolvedWith(value) {
    var promise = new Promise(function (resolve,reject) {
      resolve(value);
    // Promise constructor instance
    });
    return promise;
  };

  DataStore.prototype.add = function(key, val) {
    return promiseResolvedWith(null);
    // use null as argument since nothing needs to be resolved
  };

  DataStore.prototype.get = function(key) {
    return promiseResolvedWith(this.data[key]);
  }

  DataStore.prototype.getAll = function() {
    return promiseResolvedWith(this.data);
  }

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
    return promiseResolvedWith(null);
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);
