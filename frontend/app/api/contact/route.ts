import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.re_VHrPvfeS_FaLDzT73mRw5fkgYAq7NmuAJ);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>", // temporary sender
      to: "prakash@umasfintax.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}