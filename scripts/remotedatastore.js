(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if(!url) {
      throw new Error("No remote URL supplied");
    }
    this.serverUrl = url
  }

  window.App = App;
})(window);
