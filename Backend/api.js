
exports.sendMessage = function (req,res) {

    var nodemailer = require("nodemailer");

    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",  // sets automatically host, port and connection security settings
        auth: {
            user: "travelexplore03@gmail.com",
            pass: "gardensouls03"
        }
    });


    var mail_info = req.body;
    console.log("Creating Mail", mail_info);

    smtpTransport.sendMail({  //email options
        from: mail_info.from, // sender address.  Must be the same as authenticated user if using Gmail.
        to: mail_info.to, // receiver
        subject: mail_info.subject, // subject
        text: mail_info.text // body
    }, function(error, response){  //callback
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
    });

};


