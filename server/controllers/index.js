var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res, callback) {
      models.messages.get((err, data) => {
        if (err) {
          throw (err);
        } else {
          res.send(data);
        }
      })
    }, 
    post: function (req, res, callback) {
      models.messages.post(req.body, (err, data) => {
        if (err) {
          throw (err);
        } else {
          res.send();
        }
      }) 
  }
  },
  users: {
    // Ditto as above
    get: function (req, res, callback) {
      models.users.get((err, data) => {
        if (err) { 
          throw (err) 
        } else {
          res.send(data);
        }
      })
    },
    post: function (req, res, callback) {
      models.users.post(req.body, (err, data) => {
        if (err) {
          throw (err);
        } else {
          res.send();
        }
      }) 
    }
  }

};

