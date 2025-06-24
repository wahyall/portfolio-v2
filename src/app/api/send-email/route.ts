import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const brevoApiKey = process.env.NEXT_BREVO_API_KEY;
    const brevoApiUrl =
      process.env.NEXT_BREVO_API_URL || "https://api.brevo.com/v3/smtp/email";
    const recipientEmail = process.env.NEXT_BREVO_EMAIL;

    if (!brevoApiKey || !recipientEmail) {
      return NextResponse.json(
        { error: "Missing required environment variables" },
        { status: 500 }
      );
    }

    const { userAgent, referer } = await request.json();

    const emailData = {
      sender: {
        name: "Wahyall Portfolio",
        email: "noreply@wahyall.vercel.app",
      },
      to: [
        {
          email: recipientEmail,
          name: "Portfolio Owner",
        },
      ],
      subject: "New Portfolio Visit Alert",
      htmlContent: `
        <html>
          <head></head>
          <body>
            <h2>SHE SEE IT</h2>
            <p>Someone visited your portfolio!</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
              <p><strong>Visit Details:</strong></p>
              <p><strong>User Agent:</strong> ${userAgent || "Unknown"}</p>
              <p><strong>Referrer:</strong> ${referer || "Direct visit"}</p>
              <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            </div>
          </body>
        </html>
      `,
    };

    const response = await fetch(brevoApiUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Brevo API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, messageId: result.messageId });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
