var mongoose = require('mongoose');
var schema= require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
    
var User=mongoose.model('User2',schema,'users2');
//esta clase solo la uso para corroborar que los datos se almacenaron
//adecuadamente en la bd. realmente no aporta una funcion importante
//en el resto de la api

User.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
})
/*
User.findByIdAndRemove({_id: '5c860cceaab91203c8e50801'},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
})

*/