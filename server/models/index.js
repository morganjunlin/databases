var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.connection.connect();
      
      var query = db.connection.query('SELECT user, text FROM messages')

      query.on('error', function(err) {
        throw err;
      });

      query.on('fields', function(fields) {
        console.log(fields);
      });

      query.on('result', function(row) {
        db.connection.pause();

        // do something here idk what
        console.log(row);

        db.connection.resume();
      })

      db.connection.end();
    }, // a function which produces all the messages
    post: function () {

      db.connection.connect();

      var query = db.connection.query('INSERT INTO messages VALUES ');

      query.on('error', function(err) {
        throw err;
      });

      query.on('fields', function(fields) {
        console.log(fields);
      });

      query.on('result', function(result) {
        console.log(result);
      });

      db.connection.end();

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

