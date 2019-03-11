var mongoose = require('mongoose');
var schema= require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
    
var User=mongoose.model('User2',schema,'users2');

User.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
})