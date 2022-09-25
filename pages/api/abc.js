const { sendMail } = require("../../mailer/nodeMailer");

export default async function handler(req, res) {
  await sendMail(
    {
      name: "Sarbjit Singh",
      message: "A test inquery mail",
      contact: "07881678509",
      email: "sarb@gmail.com",
    },
    (err, info) => {
      if (err) console.log("error to send mail, ", err.message);
      else console.log(info);
    }
  );
  res.json({ message: "yes " });
}
