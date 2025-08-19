import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const {
    type,
    name,
    email,
    phone,
    subject,
    company,
    message,
    filename,
    content,
    page,
  } = req.body || {};

  if (!name || !email || !message) {
    context.res = {
      status: 400,
      body: "Missing required fields: name, email, and message.",
    };
    return;
  }

  let text = `Name: ${name}\nE-Mail: ${email}`;

  if (phone) {
    text += `\nTelefon: ${phone}`;
  }

  if (company) {
    text += `\nUnternehmen: ${company}`;
  }

  text += `\n\n${message}`;

  if (page) {
    text += `\n\nGesendet von ${page}`;
  }

  try {
    const emailOptions: any = {
      from: '"CoMo Service" <no-reply@service.como-solution.de>',
      to:
        type === "bewerbung"
          ? ["eric.schmidt@como-solution.de", "bewerbung@como-solution.de"]
          : ["eric.schmidt@como-solution.de", "info@como-solution.de"],
      subject: subject ? subject : "Neue Kontaktanfrage",
      text: text,
    };

    if (content && filename) {
      emailOptions.attachments = [
        {
          filename: filename,
          content: content,
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
