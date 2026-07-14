import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with a fallback key during build time so next build doesn't crash if env var is not set in CI
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, website, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Check if the actual API key is present at runtime
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_dummy_key_for_build') {
      return NextResponse.json(
        { error: 'Email service is not configured. Missing RESEND_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    // Note: On the free tier without a custom domain, 'from' MUST be onboarding@resend.dev
    // and 'to' MUST be the email address you signed up with.
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'rahulsonboro@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Message from your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Website:</strong> ${website || 'Not provided'}</p>
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; background: #f4f4f5; padding: 16px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error('Resend Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
