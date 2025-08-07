import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { name, email, subject, message, attachment } = req.body || {};

  if (!name || !email || !message) {
    context.res = {
      status: 400,
      body: "Missing required fields: name, email, and message.",
    };
    return;
  }

  try {
    const emailOptions: any = {
      from: '"CoMo Service" <no-reply@service.como-solution.de>',
      to: "eric.schmidt@como-solution.de",
      subject: subject ? subject : "Neue Kontaktanfrage",
      text: `
        New message from your site:

        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    };

    if (attachment?.content && attachment?.filename) {
      emailOptions.attachments = [
        {
          filename: attachment.filename,
          content: attachment.content,
          contentType: "application/pdf",
        },
      ];
    }

    const response = await resend.emails.send(emailOptions);

    context.log("Email sent:", response);

    context.res = {
      status: 200,
      body: "Message sent successfully",
    };
  } catch (error: any) {
    context.log.error("Failed to send email:", error);

    context.res = {
      status: 500,
      body: "Something went wrong while sending the email.",
    };
  }
};

export default httpTrigger;
