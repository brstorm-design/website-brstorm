export default (req, res) => {
  /* console.log(req.method);
  console.log(req.body);
  console.log('key', process.env.SENDGRID_API_KEY);
  console.log('sender', process.env.SENDER_EMAIL);
  res.status(200).send('Recebido :)'); */

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const message = {
    from: process.env.SENDER_EMAIL,
    to: process.env.SENDER_EMAIL,
    subject: 'Sendgrid Test Message',
    text: `New message from your website!\n${req.body.msg}`
  }

  try {
    sgMail.send(message);
    res.send('Message sent successfully!!!!!');
  } catch (e) {
    res.send('Message was not sent.', e)
  }
}