require("dotenv").config();
const nodemailer = require("nodemailer");

const mentor_mail = "info@unithink.in";
const mentor_name = "Dr. Sheelan Misra";
const sender_email = process.env.nodeMailerMail;
const sender_pass = process.env.nodeMailerMailPass;
const sender_name = 'Unithink Info 🎓';

let transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net', // SMTP server of GoDaddy
  port: 465, // Port (usually 465 for secure connection)
  secure: true, // Use SSL/TLS
  auth: {
    user: sender_email, // Your GoDaddy email address
    pass: sender_pass // Your GoDaddy email password
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function maincli(client_email, client_name) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"${sender_name}" <${sender_email}>`, // sender address with custom name
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

P.S. Don't hesitate to follow us on social media for the latest updates and`,
  });

  console.log("Message sent: %s", info.messageId);
}

async function mainMentor(client_email, client_name, client_phone, service_type, check_date) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"${sender_name}" <${sender_email}>`, // sender address with custom name
    to: mentor_mail, // list of receivers
    subject: `Confirmation: New session Booking by ${client_name}`, // Subject line
    text: `
Dear ${mentor_name},

We are pleased to inform you that a new consultation has been booked. Here are the details of the booking:

- Client's Name: ${client_email}
- Client's Phone Number: ${client_phone}
- Client's email: ${client_name}
- Service Type: ${service_type}
- Booking Date: ${check_date}

Best Regards,
Harsh Bhardwaj
Developer
915866109`,
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = { maincli, mainMentor };
