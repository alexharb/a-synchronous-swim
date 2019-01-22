// import { callbackify } from "util";

var Fetch = {

  fetch: function(callback) {

    const serverUrl = 'http://127.0.0.1:3000';
    $.ajax({
      type: 'GET',
      url: serverUrl,
      data: '',
      success: function(data) {
        data = JSON.parse(data);
        callback(data);
        console.log('GET request successful!');
      },
      error: function(data) {
        console.log('GET request failed', data)
      }
    })
  }
};
