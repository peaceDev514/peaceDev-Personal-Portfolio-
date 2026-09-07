import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.post("/api/contact", async (req, res) => {
	try{

		// Check for missing fields
		
		const { name, email, message } = req.body;

		if(!name || !email || !message){
			return res.status(400).json({ message: "All fields are required" });
		}

		// Validate Email Format

		const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if(!emailRegEx.test(email)){
			return res.status(400).json({ message: "Invalid email format" });
		}
	
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		});

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
			replyTo: email,
			subject: `New Portfolio Message from ${name}`,
			text: `
			Name: ${name}
			Email: ${email}
			Message: ${message}`
		});
		res.status(200).json({ message: "Message sent successfully" });

	}catch(err){
		console.log(err);
		res.status(500).json({ message: err.message });
	}
});

export default app;
