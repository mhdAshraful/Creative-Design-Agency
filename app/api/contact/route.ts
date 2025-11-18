import { ContactResponse } from "@/lib/types";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
	console.log("request got to here");

	try {
		const { name, email, projectDetails, budget, interests } =
			await request.json();

		// validation
		if (!name || !email || !projectDetails) {
			return NextResponse.json(
				{
					success: false,
					message: "Name, email and Project Details are required",
				},
				{ status: 400 }
			);
		}

		// transporter using ethereal
		const transporter = nodemailer.createTransport({
			service: "gmail",
			port: 587,
			// secure: false,
			auth: {
				user: process.env.GMAIL_ACCOUNT,
				pass: process.env.GMAIL_APP_PASS,
			},
		});

		// interests array to string
		// they cound be interedted in one or many
		const interestsText = Array.isArray(interests)
			? interests.join(", ")
			: interests;

		// Email inbox preview formatter
		const mailPreviewSettngsAsOptions = {
			form: `"${name}" <${email}>`,
			to: `unseen.twilights@gmail.com`,
			replyTo: email,
			subject: `New Project Request from ${name}`,
			html: `
			 <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; }
            .value { padding: 10px; background: #f9f9f9; border-radius: 3px; border-left: 4px solid #007acc; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New ${interestsText || "Not specified"} Inquiry</h2>
              <p>You have received a new project request through your website.</p>
            </div>
            
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email</div>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">Interests/Services</div>
              <div class="value">${interestsText || "Not specified"}</div>
            </div>
            
            <div class="field">
              <div class="label">Project Budget</div>
              <div class="value">${budget || "Not specified"}</div>
            </div>
            
            <div class="field">
              <div class="label">Project Details</div>
              <div class="value">${projectDetails.replace(/\n/g, "<br>")}</div>
            </div>
            
            <div class="field">
              <div class="label">Submission Date</div>
              <div class="value">${new Date().toLocaleString()}</div>
            </div>
          </div>
        </body>
        </html>
			`,
			text: `
			New ${interestsText || "Not specified"} Request
			===================
			Name: ${name}
			Email: ${email}
			Interests/Services: ${interestsText || "Not specified"}
			Project Budget: ${budget || "Not specified"}
			Project Details: ${projectDetails}
			Submitted on: ${new Date().toLocaleString()}
			`,
		};

		// send mail
		const info = await transporter.sendMail(mailPreviewSettngsAsOptions);

		console.log("Message sent: %s", info.messageId);
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

		return NextResponse.json<ContactResponse>(
			{
				success: true,
				message: "Your project request has been sent successfully.",
				messageID: info.messageId,
				previewUrl: nodemailer.getTestMessageUrl(info) || undefined,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending contact form email:", error);
		return NextResponse.json<ContactResponse>(
			{
				success: false,
				message: "There was an error sending your project request.",
				messageID: undefined,
				previewUrl: undefined,
			},
			{ status: 500 }
		);
	}
}
