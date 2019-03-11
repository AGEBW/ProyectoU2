var mongoose=require('mongoose');


module.exports= new mongoose.Schema({
    Nombre:{
        type: String
      },
      Email:{
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
      },
      NC:{
        type: Number,
        required:true
      }
      
});