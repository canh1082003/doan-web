const express = require('express') //commonjs 
const app = express() // express cua? app

require('dotenv').config();

const port = process.env.PORT || 8888// khai bao port
const host_name= process.env.host_name;
const configViewEngine= require('./config/viewEngine');
const webRoute = require('./route/web');
const connection = require('./config/database');

//config req body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

//config template Engine
configViewEngine(app);


// khai báo route
app.use('/',webRoute);
// simple query

app.listen(port, host_name,() => {
  console.log(`Example app listening on ${host_name}: ${port}`)
})