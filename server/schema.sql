DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  username VARCHAR(30)
);

CREATE TABLE messages (
  username VARCHAR(30),
  message VARCHAR(140),
  roomname VARCHAR(30)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

