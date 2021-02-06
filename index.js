var express = require('express');
var router = express.Router();
var modules=require('../modules/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'login' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'signup' ,msg:' '});
});
router.post('/signup', function(req, res, next) {
  var username=req.body.name;
  var email=req.body.email;
  var password=req.body.password;
  var conpassword=req.body.cpassword;
  var userdetails=new modules({
    username:username,
    email:email,
    password:password,
  });
  userdetails.save((err,doc)=>{
    if(err)throw err;
    res.render('signup', { title: 'signup',msg:'sucess' });
    console.log(doc);
  })
  console.log("the datas are:"+userdetails);

});
router.get('/password', function(req, res, next) {
  res.render('password', { title: 'view category' });
});
router.get('/addnewcategory', function(req, res, next) {
  res.render('addnewcategory', { title: 'add new category' });
});
router.get('/addnewpassword', function(req, res, next) {
  res.render('addpassword', { title: 'add password' });
});
router.get('/viewallpassword', function(req, res, next) {
  res.render('viewallpassword', { title: 'add password' });
});


module.exports = router;
