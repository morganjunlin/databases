var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {

      db.connection.query('SELECT * FROM messages;', function(err, results) {
        if (err) { 
          console.log (err) 
        } else {
          callback(null, results);
        }
      })

    }, // a function which produces all the messages
    post: function (req, callback) {
      db.connection.query(`INSERT INTO messages (username, message, roomname) VALUES ("${req.username}", "${req.message}", "${req.roomname}");`, function(err, results) {
        if (err) { 
          console.log (err) 
        } else {
          callback(null, results);
        }
      })

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

      db.connection.query('SELECT username FROM users;', function(err, results) {
        if (err) {
          throw (err)
        } else {
          callback(null, results);
        }
      })

    },
    post: function (req, callback) {
      db.connection.query(`INSERT INTO users (username) VALUES ("${req.username}");`, function(err, results) {
        if (err) { 
          console.log (err) 
        } else {
          callback(null, results);
        }
      })
    }
  }
};

