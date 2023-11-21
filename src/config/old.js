
require('dotenv').config();
const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_User,
    password: process.env.DB_Password,
    database: process.env.DB_NAME
  });



// simple query
  // connection.query(
  //   'select * FROM Users',
  //   function(err, results, fields) {
  //     console.log("results: ",results); // results contains rows returned by server

  //   }
  // );

  module.exports= connection
  
  
  