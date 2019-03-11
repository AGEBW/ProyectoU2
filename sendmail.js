var mongoose = require('mongoose');
var schema= require('./schema');
var nodemailer = require('nodemailer');
var array="";

mongoose.connect('mongodb://localhost:27017/test');

var User=mongoose.model('User2',schema,'users2');

/*
User.findOne({Email:true},
    function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
})
*/

User.find({}, { _id:0,Email : 1,Nombre:1,NC:1 }, function (err, data) {
    if(err) { 
        return handleError(res, err); 
    }
    console.log( data);
  });