(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if(!url) {
      throw new Error("No remote URL supplied");
    }
    this.serverUrl = url
  };

  RemoteDataStore.prototype.add = function(key, val) {
    return $.post(this.serverUrl, val, function(serverResponse) {
      // 1 Arg, where to go (URL)
      // 2 Arg, what to say (Data)
      // 3 Arg, what to do with info it gets back from server (Callback)
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    return $.get(this.serverUrl, function(serverResponse) {
      if(cb) {
        console.log(serverResponse);
        cb(serverResponse);
      // access to both the function argument and the server response
      }
    });
  };

  RemoteDataStore.prototype.get = function(key,cb) {
    return $.get(this.serverUrl + '/' + key, function(serverResponse) {
      if(cb) {
        console.log(serverResponse);
        cb(serverResponse);
      }
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    return $.ajax(this.serverUrl + '/' + key, {
      type: 'DELETE'
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
