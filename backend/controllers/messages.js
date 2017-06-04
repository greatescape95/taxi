var express = require('express');
var router = express.Router();
var bookshelf = require('../db/index.js').bookshelf;
require('../models/messages.js');
var Messages = bookshelf.model("Messages");

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Gmail",
  auth: {
    XOAuth2: {
      user: "winetastingbrac@gmail.com",
      clientId: "91694279077-nh61fp4ujq1irkmhtg35h4qaskhvtfbd.apps.googleusercontent.com",
      clientSecret: "NyWguYvd2lG6Oi2TKBSRAV4g",
      refreshToken: "1/meLIb67CCZRihCLbRPxmu5XcEaP-MWySxbvbp0WvfGY"
    }
  }
});


router.post('/messages', function( req, res, next ){
  var message;
  Messages.forge({
    contact_name: req.body.user.name,
    email: req.body.user.email,
    message_text: req.body.user.message,
    phone: req.body.user.phone
  }).save()
  .then( function( data ){

    if( data ) message = data;

    if( !req.body.user.hidden ) {

      var template = "<p>Name:</p><br>"+
      message.attributes.contact_name +
      "<br><p>E-mail:</p><br>" +
      message.attributes.email +
      "<br><p>Message:</p><br>" +
      message.attributes.message_text;

      var mailOptions = {
        from: "winetastingbrac@gmail.com",
        to: "toni.franulic@gmail.com",
        subject: "Contact" + message.attributes.message_id,
        generateTextFromHTML: true,
        //  text: message.attributes.contact_name,
        html: template
      };

      smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
          console.log(error);
        } else {
          console.log(response);
        }
        smtpTransport.close();
      });
    }

    res.sendStatus( 200 );
  }).catch( function(err){
    console.log(err);
  });
});










module.exports = router;
