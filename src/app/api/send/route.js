// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req,res) {
  
  const {email,subject,message} = req.body;
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["amandwivedi71124@gmail.com"],
      subject: subject,
      react: (
        <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>new message submitted</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
