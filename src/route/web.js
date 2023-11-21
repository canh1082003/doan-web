const express = require('express');
const {getHomepage,postCreateAdmin,postUpdateUser,postHandleRemoveUser, getLoginPage,getRegsiterPage, register, logIn,getEmailUser,getHomepageMilk, getHomepageCustomer,getHomepageCart}= require('../controllers/homeController')
const router = express.Router();

//gọi controller 
  router.get('/',getHomepage);
  // router.get('/form-admin',getHomeAdmin);
  // router.get('/add-milk', getCreatePage);
  router.get('/login-milk',getLoginPage);
  router.get('/listCustomers',getHomepageCustomer);
  router.get('/regsiter-milk',getRegsiterPage);
  // router.get('/Information-milk/:tensua',getInformationPage);
  // router.get('/Information-milk-User/:tensua',getInformationUserPage);
  router.post('/create-users', postCreateAdmin);
  router.post('/update-users/:oldName', postUpdateUser);
  // router.get('/delete-milk', postdeleteMilk);
  router.get('/delete-milk/:ten', postHandleRemoveUser);
  router.post('/register', register);
  router.post('/sign-in',logIn);
  router.post('/getNameuser/:email',getEmailUser);
  // router.get('/listCustomers',getListCustomers);
  router.get('/listMilk',getHomepageMilk);

  // router.get('getNameUser/:name',getnameUser);
  router.get('/getvaluesProduct', getHomepageCart);
  // router.get('/addToCart', getIdCart);
  // router.get('/logout', removeUser);


  module.exports= router;
