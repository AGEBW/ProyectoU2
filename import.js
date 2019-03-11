var fs = require('fs');
var mongoose = require('mongoose');
var schema= require('./schema');
var array="";


mongoose.connect('mongodb://localhost:27017/test');
    
var User=mongoose.model('User2',schema,'users2');



fs.readFile('file.txt', function(err, data) {
    if(err) throw err;
 array = data.toString().split(",");
    for(i in array) {
        console.log(array[i]);
      
    }
    
    var user= new User({
        Nombre:array[0],
        Email:array[1],
        NC:array[2],
        Semestre:array[3]
        });
        
    user.save(function(error){
        if(error){
        console.log(error);
        process.exit(1);
        }
        console.log("Saved!!");
        process.exit(0)
        });

});


