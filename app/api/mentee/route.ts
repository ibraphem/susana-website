import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildMenteeSignupHtml,
  buildMenteeSignupText,
} from "@/lib/email/mentee-signup-template";

export const runtime = "nodejs";

type MenteePayload = {
  name?: string;
  email?: string;
  whatsapp?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: MenteePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const whatsapp = body.whatsapp?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !whatsapp) {
    return NextResponse.json(
      { error: "Name, email, and WhatsApp number are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const mailTo = process.env.MAIL_TO || gmailUser;

  if (!gmailUser || !gmailPass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment vars.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const signupData = { name, email, whatsapp, message };

  try {
    await transporter.sendMail({
      from: `"Susana O. Otokpa" <${gmailUser}>`,
      to: mailTo,
      replyTo: email,
      subject: `New mentee signup: ${name}`,
      text: buildMenteeSignupText(signupData),
      html: buildMenteeSignupHtml(signupData),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send mentee signup email:", error);
    return NextResponse.json(
      { error: "Could not send your request. Please try again later." },
      { status: 502 }
    );
  }
}
