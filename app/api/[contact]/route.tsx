import { NextRequest, NextResponse } from "next/server";
import nodeMailer from "nodemailer";

export const POST = async (request: string | any) => {
	const USERNAME: string | any = process.env.USERNAME;
	const PASSWORD: string | any = process.env.PASSWORD;
	const EMAIL: string | any = process.env.EMAIL;

	const formData = await request.formData();
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");

	const transporter = nodeMailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: USERNAME,
			pass: PASSWORD,
		},
	});
	try {
		const mail = await transporter.sendMail({
			from: EMAIL,
			to: email,
			subject: `Website activity from ${email}`,
			html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
		});
		return NextResponse.json({ message: "Success email was sent" });
	} catch (error) {
		console.log(error);
		NextResponse.json({ message: "COULD NOT SEND MESSAGE" });
	}
};
