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

function asList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => sanitize(item)).filter(Boolean);
  }
  const single = sanitize(value);
  return single ? [single] : [];
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const address = sanitize(body.address);
    const currentProvider = sanitize(body.currentProvider);
    const providerName = sanitize(body.providerName);
    const usage = sanitize(body.usage);
    const packages = asList(body.packages);
    const fiber = sanitize(body.fiber);
    const wireless = sanitize(body.wireless);
    const landline = sanitize(body.landline);
    const tv = sanitize(body.tv);
    const message = String(body.message || '')
      .trim()
      .slice(0, 5000);
    const source = sanitize(body.source || 'Contact form').slice(0, 120);
    const consent = Boolean(body.consent);

    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in name, email, and phone.' },
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

    const details = [
      ['Address', address],
      ['Current Provider', currentProvider],
      ['Provider Name', providerName],
      ['Usage', usage],
      ['Packages', packages.join(', ')],
      ['Fiber', fiber],
      ['Wireless', wireless],
      ['Landline', landline],
      ['TV', tv],
    ].filter(([, value]) => Boolean(value));

    const textLines = [
      `Source: ${source}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      ...details.map(([label, value]) => `${label}: ${value}`),
    ];

    if (message) {
      textLines.push('', 'Message:', message);
    }

    const htmlDetails = details
      .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`)
      .join('');

    const transporter = createMailTransporter();
    const to = getContactInbox();
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"LQcomparecableinternet" <${from}>`,
      to,
      replyTo: email,
      subject: `New lead from ${source}: ${name}`,
      text: textLines.join('\n'),
      html: `
        <h2>New website inquiry</h2>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        ${htmlDetails}
        ${
          message
            ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`
            : ''
        }
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
