(function(window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  var myTruck = new Truck('ncc-1701', new DataStore()); //creating an instance
  window.myTruck = myTruck; //export that instance to the global namespace
})(window);
