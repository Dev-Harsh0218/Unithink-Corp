const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "unithinkeducationinternational@gmail.com",
        pass: "hazafqlqrteqlliv",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(client_email, client_name) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: "unithinkeducationinternational@gmail.com", // sender address
        to: client_email, // list of receivers
        subject: "Confirmation: Your Session Has Been Successfully Booked", // Subject line
        text: `
Dear ${client_name},

Thank you for taking the first step towards your study abroad dreams by submitting a consultation request on our website! We appreciate you reaching out and are excited to learn more about your academic goals and aspirations.

A member of our experienced study abroad counseling team will be in touch with you shortly to schedule a personalized consultation. During the session, we will:

Discuss your academic background, interests, and future career aspirations.
Explore various study abroad options that align with your goals and preferences.
Provide guidance on the application process, including university selection, scholarship opportunities, and visa requirements.
Answer any questions you may have about studying abroad.
In the meantime, feel free to explore our website for valuable resources, including:

Destination guides: [link to your destination guides]
University profiles: [link to your university profiles]
Scholarship information: [link to your scholarship information]
We look forward to connecting with you soon and helping you navigate your exciting journey towards studying abroad!

Sincerely,

The UEI Team

P.S. Don't hesitate to follow us on social media for the latest updates and`,});

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = main;
