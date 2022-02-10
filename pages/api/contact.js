export default function (req, res) {
    require('dotenv').config();

    let nodemailer = require('nodemailer');
    async function main() {
        // let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 8000,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        console.log("Gmail connection Established");
        // const transporter = nodemailer.createTransport({
        //     port: 465,
        //     host: "smtp.gmail.com",
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.PASSWORD,
        //     },
        //     secureConnection: true,
        // });
        let info = await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: "suhelkapadia2@gmail.com", // list of receivers
            subject: `Message From ${req.body.name}`, // Subject line
            text: req.body.message + " | Sent from: " + req.body.email, // plain text body
            html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // const mailData = {
        //     from: process.env.EMAIL,
        //     to: 'suhelkapadia2@gmail.com',
        //     subject: `Message From ${req.body.name}`,
        //     text: req.body.message + " | Sent from: " + req.body.email,
        //     html: `<div>${req.body.message}</div><p>Sent from:
        //     ${req.body.email}</p>`
        // }

        // await transporter.sendMail(mailData, function (err, info) {
        //     if (err)
        //         console.log(err)
        //     else
        //         console.log(info)
        // })

        console.log(req.body)
    }
    main().catch(console.error); 
    res.status(200).send('Message Sent')
}
