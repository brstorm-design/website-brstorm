export default async (req, res) => {
  if (req.method === 'POST') {

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const {name, businessName, details, yourContent, businessSize, service, yourContact, email, phone, otherContact} = req.body;
    const serviceNames = {
      brand: 'Marca',
      website: 'Website',
      redesign: 'Redesign',
      naming: 'Naming',
      strategy: 'Estratégia',
    }

    // pegar uma lista dos serviços selecionados:
    const services = [];
    for (const s in service) {
      if (service[s]) services.push(serviceNames[s]);
    }
    const selectedServices = services.join(', ');

    const message = `
      <div><strong>Nome:</strong> ${name}</div>
      <div><strong>Nome do Negócio:</strong> ${businessName}</div>
      <div><strong>O que você faz:</strong> ${details}</div>
      <div><strong>Já possui redes sociais ou site:</strong> ${yourContent}</div>
      <div><strong>Tamanho do Negócio:</strong> ${businessSize}</div>
      <div><strong>Serviço(s):</strong> ${selectedServices}</div>
      <br><br> --- <br><br>
      Contato:
      <div><strong>• Email:</strong> ${yourContact.email ? 'Sim, ' + email : 'Não.'}</div>
      <div><strong>• WhatsApp:</strong> ${yourContact.phone ? 'Sim, ' + phone : 'Não.'}</div>
      <div><strong>• Outros:</strong> ${yourContact.otherContact ? 'Sim, ' + otherContact : 'Não.'}</div>
    `

    const emailData = {
      from: process.env.SENDER_EMAIL,
      to: process.env.SENDER_EMAIL,
      subject: 'Nova Solicitação de Proposta',
      html: message,
    }

    const response = await sgMail.send(emailData);

    // simulando 2 segundos de processamento:
    /* await new Promise(r => setTimeout(r, 2000)); */
    return res.status(200).end();
  }

  return res.status(405).end();
}