function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export type MenteeSignupData = {
  name: string;
  email: string;
  whatsapp: string;
  message?: string;
};

export function buildMenteeSignupText(data: MenteeSignupData) {
  return [
    "New mentee signup request",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `WhatsApp: ${data.whatsapp}`,
    `Message: ${data.message || "—"}`,
    "",
    "— Sent from susanaotokpa.com",
  ].join("\n");
}

export function buildMenteeSignupHtml(data: MenteeSignupData) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeWhatsapp = escapeHtml(data.whatsapp);
  const safeMessage = data.message ? escapeHtml(data.message) : "—";
  const submittedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New mentee signup</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f5f0; font-family: Georgia, 'Times New Roman', serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f5f0; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #faf8f4; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(15, 26, 46, 0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color: #0f1a2e; padding: 32px 40px; text-align: center;">
              <p style="margin: 0 0 8px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: #d4b896;">
                Mentorship Application
              </p>
              <h1 style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 26px; font-weight: 600; color: #faf8f4; line-height: 1.3;">
                New Mentee Signup
              </h1>
              <div style="margin: 20px auto 0; width: 48px; height: 2px; background-color: #b8956a;"></div>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding: 32px 40px 8px; font-family: Arial, Helvetica, sans-serif;">
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #5c5c66;">
                Someone has applied to become your mentee through your website. Their details are below — reply directly to reach them.
              </p>
            </td>
          </tr>

          <!-- Applicant card -->
          <tr>
            <td style="padding: 16px 40px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; border: 1px solid rgba(15, 26, 46, 0.08); border-top: 3px solid #b8956a;">
                <tr>
                  <td style="padding: 24px 28px;">
                    <p style="margin: 0 0 20px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #b8956a;">
                      Applicant Details
                    </p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 600; color: #5c5c66; width: 120px; vertical-align: top;">
                          Name
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #0f1a2e; font-weight: 600;">
                          ${safeName}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 600; color: #5c5c66; vertical-align: top;">
                          Email
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-family: Arial, Helvetica, sans-serif; font-size: 15px;">
                          <a href="mailto:${safeEmail}" style="color: #0f1a2e; text-decoration: none; border-bottom: 1px solid #b8956a;">${safeEmail}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 600; color: #5c5c66; vertical-align: top;">
                          WhatsApp
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f0ede8; font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #0f1a2e;">
                          ${safeWhatsapp}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 600; color: #5c5c66; vertical-align: top;">
                          Message
                        </td>
                        <td style="padding: 10px 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #1a1a1f;">
                          ${safeMessage}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 0 40px 32px; text-align: center;">
              <a href="mailto:${safeEmail}" style="display: inline-block; background-color: #b8956a; color: #0f1a2e; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 999px;">
                Reply to ${safeName}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f0ede8; padding: 24px 40px; text-align: center; border-top: 1px solid rgba(15, 26, 46, 0.06);">
              <p style="margin: 0 0 4px; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-weight: 600; color: #0f1a2e;">
                Susana O. Otokpa, FIMC
              </p>
              <p style="margin: 0 0 12px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #5c5c66;">
                Executive LinkedIn Strategist · Talent &amp; Growth Consultant
              </p>
              <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #9a9aa3;">
                Submitted ${submittedAt}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
