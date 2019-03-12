var mongoose = require('mongoose');
var schema= require('./schema');
var nodemailer = require('nodemailer');


mongoose.connect('mongodb://localhost:27017/test');

var User=mongoose.model('User2',schema,'users2');



User.find({}, { _id:0,Email : 1,Nombre:1,NC:1 }, function (err, data) {
    if(err) { 
        return handleError(res, err); 
    }
    for(i in data){
    console.log( data[i].Email);
    var datos=data[i].Email;

    //inicio email
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
     const msg = {
      to: datos,
      from: 'RoxasRonserot@gmail.com',
     subject: 'Lo invito a mi fiesta de no Repe...pero igual y me pude haber equivocado D:',
      text: 'Profesor, este email es de prueba para corroborar que mi aplicacion funciona adecuadamente'
      };
     sgMail.send(msg);
      //fin email

    }
  });



