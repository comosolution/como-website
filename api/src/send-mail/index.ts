import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import nodemailer from "nodemailer";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  if (req.method !== "POST") {
    context.res = { status: 405, body: "Method Not Allowed" };
    return;
  }

  const { name, email, message, content, filename, filetype } = req.body;

  if (!name || !email || !message) {
    context.res = { status: 400, body: "Missing fields" };
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.strato.de",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const attachments = content
    ? [
        {
          filename: filename || "attachment.pdf",
          content: Buffer.from(content, "base64"),
          contentType: filetype || "application/pdf",
        },
      ]
    : [];

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: "eric.schmidt@como-solution.de",
    subject: "New Contact Form Submission",
    text: message,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    context.res = { status: 200, body: "Email sent successfully!" };
  } catch (error) {
    context.log("Error sending email:", error);
    context.res = { status: 500, body: "Failed to send email." };
  }
};

export default httpTrigger;
