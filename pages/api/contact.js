export default function (req, res) {
    require('dotenv').config();

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'suhelkapadia2@gmail.com',
        from: process.env.EMAIL, // Use the email address or domain you verified above
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:${req.body.email}</p>`,
    };

    sgMail
        .send(msg)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        })
    
    console.log("Message Sent");
    res.status(200).send('Message Sent')
}
