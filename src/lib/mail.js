import nodemailer from 'nodemailer';

export function createMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP is not configured');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE !== 'false',
    auth: { user, pass },
  });
}

export function getContactInbox() {
  return process.env.CONTACT_TO_EMAIL || 'info@lqcomparecableinternet.com';
}
