import nodemailer from 'nodemailer';

const SMTP = {
  host: 'mail.careernhustle.com',
  port: 465,
  secure: true,
  user: 'shah@careernhustle.com',
  pass: 'Sherry@123$$',
};

const CONTACT_TO_EMAIL = 'info@lqcomparecableinternet.com';

export function createMailTransporter() {
  return nodemailer.createTransport({
    host: SMTP.host,
    port: SMTP.port,
    secure: SMTP.secure,
    auth: {
      user: SMTP.user,
      pass: SMTP.pass,
    },
  });
}

export function getContactInbox() {
  return CONTACT_TO_EMAIL;
}

export function getSmtpFrom() {
  return SMTP.user;
}
