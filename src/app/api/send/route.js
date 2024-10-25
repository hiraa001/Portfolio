"use client";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { renderToStaticMarkup } from "react-dom/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
	const { email, subject, message } = await req.json();
	console.log(email, subject, message);
	try {
		const htmlContent = renderToStaticMarkup(
			<>
				<h1>{subject}</h1>
				<p>Thank you for contacting us!</p>
				<p>New message submitted:</p>
				<p>{message}</p>
			</>
		);

		const data = await resend.emails.send({
			from: fromEmail,
			to: [fromEmail, email],
			subject: subject,
			html: htmlContent,
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: error.message });
	}
}
