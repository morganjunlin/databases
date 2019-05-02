var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      if (req.method === 'GET') {
        res.writeHead(200, headers);
        res.end()
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      if (req.method === 'POST') {
        res.writeHead(200, headers);
        res.end()
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

