//----------------------//
//      server.js       //
//----------------------//
//
// @author Tommaso Ruscica

const express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var hbs = require('nodemailer-express-handlebars');
var cors = require('cors');

const app = express();
app.use(cors());

// to parse request 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Run the app by serving the static files generated from build
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// setting email route
let transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: "user@hotmail.it",
        pass: "password"
    }
});

// add plugin handlebars for template
var options = {
     viewEngine: {
         extname: '.hbs',			// extension of the views
         layoutsDir: 'views/email/',		
         defaultLayout : 'template',		
         partialsDir : 'views/partials/'
     },
     viewPath: 'views/email/',			// path views
     extName: '.hbs'
 };

//attach the plugin to the nodemailer transporter
transporter.use('compile', hbs(options));

app.options('/sendmail', function (req, res) {
  res.sendStatus(200);
});

// route send email
app.post('/sendmail', function (req, res) {
	console.log("--> sendMail");

    	// option to send email 1
	let mailOptions1 = {
		from: req.body.copia,
		to: "user1@hotmail.it",
		subject: "subject",
		template: 'email.body',
		context: {
          message : req.body.message,
          messageIsVisible : 'inline',
		  othersIsVisible: 'none',
		  invitato: 'Message from: '+ req.body.friend
		}
	};
	// option to send email 2
	let mailOptions2 = {
		from: req.body.copia,
		to: "user2@hotmail.it",
		subject: "subject",
		template: 'email.body',
		context: {
          messageIsVisible : 'none',
		  othersIsVisible: 'inline',
		  optionalTitle: 'Thank you!'
		}
	};

    // CORS 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

	transporter.sendMail(mailOptions1, (error, info) => {
        	if (error) {
           		return console.log(error);
        	}else{
			res.end('It worked!');
		}
        console.log('Message %s sent: %s', info.messageId, info.response);
    	});
	
	transporter.sendMail(mailOptions2, (error, info) => {
        	if (error) {
            		return console.log(error);
        	}else{
			res.end('It worked!');
		}
        console.log('Message %s sent: %s', info.messageId, info.response);
    	});

	transporter.close();
});


// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
