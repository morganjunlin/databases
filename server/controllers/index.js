var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          throw (err);
        } else {
          res.send(data);
        }
      })
    },

    post: function (req, res) {
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
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          throw (err)
        } else {
          res.send(data);
        }
      })
    },

    post: function (req, res) {
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

