export default async (req, res) => {
  if (req.method === 'POST') {
    /* console.log(req.method);
  console.log(req.body);
  console.log('key', process.env.SENDGRID_API_KEY);
  console.log('sender', process.env.SENDER_EMAIL);
  res.status(200).send('Recebido :)'); */

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      from: process.env.SENDER_EMAIL,
      to: 'luanferreira2136@gmail.com',
      subject: 'Sendgrid Test Message',
      text: `New message from your website!\n${req.body.msg}`
    }

    await sgMail.send(message);
    return res.status(200).end();
  }

  return res.status(404).end();
}