/*
// pure SQL method

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

*/

var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'student', 'student');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var Messages = db.define('messages', {
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

var Users = db.define('users', {
  username: Sequelize.STRING
});

Messages.sync();
Users.sync();

module.exports = {
  Messages,
  Users
}

