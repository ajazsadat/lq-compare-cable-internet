import { NextResponse } from 'next/server';
import { createMailTransporter, getContactInbox } from '@/lib/mail';

export const runtime = 'nodejs';

function sanitize(value) {
  return String(value || '')
    .trim()
    .replace(/[\r\n]+/g, ' ')
    .slice(0, 2000);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const message = String(body.message || '')
      .trim()
      .slice(0, 5000);
    const source = sanitize(body.source || 'Contact form').slice(0, 120);
    const consent = Boolean(body.consent);

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in name, email, phone, and message.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json(
        { ok: false, error: 'Please agree to the terms and privacy policy.' },
        { status: 400 }
      );
    }

    const transporter = createMailTransporter();
    const to = getContactInbox();
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"LQcomparecableinternet" <${from}>`,
      to,
      replyTo: email,
      subject: `New lead from ${source}: ${name}`,
      text: [
        `Source: ${source}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New website inquiry</h2>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Unable to send your message right now. Please try again or call us.' },
      { status: 500 }
    );
  }
}
