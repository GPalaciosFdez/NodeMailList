var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');	//change user and pass with the credentials of the account that is going to send the email

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Joe MacMillan <joemacmillan@arpanet.com>',	//who is sending the email?
    to: '',						//leave it like this, we'll use it later
    subject: 'Halt',					//write your subject (duh)
    html: '<p>and Catch Fire</p>'			//your mail's body using html
};

var receivers = ["gordonclark@arpanet.com", "cameronhowe@arpanet.com"];		//people who is going to receive the email separated by commas

for(var i = 0; i<receivers.length; i++){
  mailOptions["to"] = receivers[i];

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Menssage sent' + info.response);
  });
}
