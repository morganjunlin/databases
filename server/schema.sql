CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT(6) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30)
);

CREATE TABLE rooms (
  id INT(6) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30)
);

CREATE TABLE messages (
  id INT(6) PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(140) NOT NULL,
  timestamp TIMESTAMP,
  user INT(6),
  room INT(6),
  FOREIGN KEY(user) REFERENCES users(id),
  FOREIGN KEY(room) REFERENCES rooms(id) 
);

/* Describe your table here.*/
DESCRIBE users;
DESCRIBE rooms;
DESCRIBE messages;



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

