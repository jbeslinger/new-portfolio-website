const res = require('express/lib/response');
const nodemailer = require('nodemailer');
const cred = require('dotenv').config()

const transporter = nodemailer.createTransport({
	service:'gmail',
    secure: true,
	auth: {
		user:cred.parsed.GMAIL_USER,
		pass:cred.parsed.GMAIL_PASS
	}
});

let sendEmail = async (data) => {
    var body = [];
    body.push(
        "<html>",
        "<body>",
            "<h1>New message from personal website</h1>",
            "<div style='background: linear-gradient(0deg, #d7cbff 0%, #fff 100%); padding: 16px; border-radius: 5px; border: 8px inset #8870f8;'>",
                "<h3>", data.senderName, " - ", data.emailAddress, "</h3>",
                "<p><i>", data.subjectLine, "</i></p>",
                "<hr />",
                "<blockquote style='white-space: pre-wrap;'>",
                    data.emailBody,
                "</blockquote>",
            "</div>",
        "</body>",
        "</html>",
    );

    var message = {
        to: "jbeslinger@gmail.com",
        subject: "New Message from JBEslinger.com",
        html: body.join("")
    };

    await transporter.sendMail(message, (error) => {
        return error;
    });
};

module.exports.sendEmail = sendEmail;