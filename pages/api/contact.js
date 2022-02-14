export default function (req, res) {
    require('dotenv').config();

    let nodemailer = require('nodemailer');
    async function main() {
        // let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            service: 'yahoo',
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            debug: false,
            logger: true
        });
        console.log("Yahoo connection Established");
        let info = await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: "suhelkapadia2@gmail.com", // list of receivers
            subject: `Message From ${req.body.name}`, // Subject line
            text: req.body.message + " | Sent from: " + req.body.email, // plain text body
            html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`, // html body
        });

        console.log("Message sent: %s", info.messageId);

        console.log(req.body)
    }
    main().catch(console.error);
    res.status(200).send('Message Sent')
}
