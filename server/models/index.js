var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      /*
      // pure SQL method

      db.connection.query('SELECT * FROM messages;', function (err, results) {
        if (err) {
          callback(err)
        } else {
          callback(null, results);
        }
      })

      */

      db.Messages.findAll()
        .then(data => callback(null, data))
        .catch(err => callback(err));
    },

    post: function (req, callback) {
      /*
      // pure SQL method

      db.connection.query(`INSERT INTO messages (username, message, roomname) VALUES ("${req.username}", "${req.message}", "${req.roomname}");`, function (err, results) {
        if (err) {
          callback(err)
        } else {
          callback(null, results);
        }
      })

      */

     db.Messages.create({ username: req.username, message: req.message, roomname: req.roomname })
      .then(data => callback(null, data))
      .catch(err => callback(err));
    }
  },

  users: {
    get: function (callback) {
      /*
      // pure SQL method

      db.connection.query('SELECT username FROM users;', function (err, results) {
        if (err) {
          callback(err)
        } else {
          callback(null, results);
        }
      })

      */

      db.Users.findAll()
        .then(data => callback(null, data))
        .catch(err => callback(err));
    },

    post: function (req, callback) {
      /*
      // pure SQL method

      db.connection.query(`INSERT INTO users (username) VALUES ("${req.username}");`, function (err, results) {
        if (err) {
          callback(err)
        } else {
          callback(null, results);
        }
      })

      */

     db.Users.create({ username: `${req.username}` })
       .then(data => callback(null, data))
       .catch(err => callback(err));
    }
  }
};

