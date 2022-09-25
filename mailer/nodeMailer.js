// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { inquery_template } = require("./inquery_template");
let nodemailer = require("nodemailer");
const mail_user = process.env.MAIL_USER;
const mail_pass = process.env.MAIL_PASS;
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.eu", //eu server
  secure: true,
  port: 465,
  auth: {
    user: mail_user,
    pass: mail_pass,
  },
});

const sendMail = async (obj, callback) => {
  const mailOptions = {
    from: mail_user, // sender address
    to: "contact@allmotorsltd.co.uk", //
    subject: obj?.type || "inquary", // Subject line
    html: inquery_template(obj), // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) return callback(err);
    callback(null, info);
    // return info;
  });
};
export { sendMail };
