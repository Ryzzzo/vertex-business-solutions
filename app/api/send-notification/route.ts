import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await request.json();

    await resend.emails.send({
      from: 'Vertex Inquiry <onboarding@resend.dev>',
      to: 'contact@vertexapps.dev',
      subject: `New Inquiry: ${data.name} from ${data.company || 'Unknown Company'}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${data.industry}</p>
        <p><strong>Team Size:</strong> ${data.teamSize}</p>
        <p><strong>Services:</strong> ${data.services.join(', ')}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <h3>Challenges</h3>
        <p>${data.challenges}</p>
        ${data.additionalInfo ? `<h3>Additional Info</h3><p>${data.additionalInfo}</p>` : ''}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending notification email:', error);
    return Response.json({ success: false, error: 'Failed to send notification' }, { status: 500 });
  }
}
