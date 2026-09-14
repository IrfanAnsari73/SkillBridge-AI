const nodemailer = require("nodemailer");

const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required.",
            });
        }

        // Gmail transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        // Email sent to SkillBridge AI Gmail
        await transporter.sendMail({
            from: `"SkillBridge AI Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New Contact Message</h2>

                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>

                    <h3>Message:</h3>
                    <p>${message}</p>

                    <hr />

                    <p>
                        Sent from the SkillBridge AI Contact Form.
                    </p>
                </div>
            `,
        });

        res.status(200).json({
            success: true,
            message: "Your message has been sent successfully.",
        });
    } catch (error) {
        console.error("Contact email error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to send message. Please try again later.",
        });
    }
};

module.exports = {
    sendContactMessage,
};