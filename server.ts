import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Mailer if credentials exist
const createTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return null;
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use compression to reduce response payload size
  app.use(compression());

  app.use(express.json());

  // API route to handle institutional inquiries
  app.post("/api/send-inquiry", async (req, res) => {
    const { name, firm, email, objective } = req.body;
    
    console.log("------------------------------------------");
    console.log("NEW INQUIRY RECEIVED");
    console.log(`From: ${name} (${email})`);
    console.log(`Firm: ${firm}`);
    console.log(`Objective: ${objective}`);
    console.log("------------------------------------------");

    const transporter = createTransporter();
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "sasha@mergelith.com";

    if (transporter) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Mergelith Inquiry" <noreply@mergelith.com>`,
          to: notificationEmail,
          subject: `New Institutional Inquiry from ${firm}`,
          text: `Name: ${name}\nFirm: ${firm}\nEmail: ${email}\nObjective: ${objective}`,
          html: `
            <div style="font-family: serif; padding: 40px; background-color: #fcfaf7; color: #0a0e14; border: 1px solid rgba(10, 14, 20, 0.05);">
              <h2 style="font-style: italic; border-bottom: 1px solid #d4af37; padding-bottom: 20px;">Institutional Inquiry Received</h2>
              <div style="margin-top: 30px; space-y: 10px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Firm:</strong> ${firm}</p>
                <p><strong>Email:</strong> <span style="color: #d4af37;">${email}</span></p>
                <p><strong>Objective:</strong></p>
                <div style="padding: 15px; background: white; border-left: 3px solid #d4af37; font-style: italic;">
                  ${objective}
                </div>
              </div>
              <p style="font-size: 12px; color: rgba(10, 14, 20, 0.4); margin-top: 50px; text-transform: uppercase; letter-spacing: 2px;">
                Mergelith Strategy Team
              </p>
            </div>
          `,
        });
        console.log(`Inquiry notification sent to ${notificationEmail}`);
      } catch (error) {
        console.error("Failed to send inquiry email:", error);
      }
    }

    res.json({ 
      success: true, 
      message: "Inquiry successfully transmitted to the Mergelith Strategy Team." 
    });
  });

  // API route to handle newsletter subscriptions
  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;
    
    console.log("------------------------------------------");
    console.log("NEW SUBSCRIPTION RECEIVED");
    console.log(`Email: ${email}`);
    console.log("------------------------------------------");

    const transporter = createTransporter();
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "sasha@mergelith.com";
    
    if (transporter) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Mergelith Journal" <noreply@mergelith.com>`,
          to: notificationEmail,
          subject: `New Journal Subscriber: ${email}`,
          text: `You have a new subscriber to the Mergelith Journal: ${email}`,
          html: `
            <div style="font-family: serif; padding: 40px; background-color: #fcfaf7; color: #0a0e14; border: 1px solid rgba(10, 14, 20, 0.05);">
              <h2 style="font-style: italic; border-bottom: 1px solid #d4af37; padding-bottom: 20px;">New Journal Subscription</h2>
              <p style="font-size: 16px; margin-top: 30px;">
                <strong>Subscriber Email:</strong> <span style="color: #d4af37;">${email}</span>
              </p>
              <p style="font-size: 12px; color: rgba(10, 14, 20, 0.4); margin-top: 50px; text-transform: uppercase; letter-spacing: 2px;">
                Mergelith Institutional AI Infrastructure
              </p>
            </div>
          `,
        });
        console.log(`Notification sent to ${notificationEmail}`);
      } catch (error) {
        console.error("Failed to send notification email:", error);
      }
    } else {
      console.log("Email transporter not configured. Skipping email notification.");
    }

    res.json({ 
      success: true, 
      message: "You have been successfully added to the Mergelith Journal." 
    });
  });

  // Explicitly serve sitemap.xml with correct headers
  app.get("/sitemap.xml", (req, res) => {
    res.set("Content-Type", "application/xml");
    res.sendFile(path.join(__dirname, "public", "sitemap.xml"));
  });

  // Serve static files from public directory with cache headers
  app.use(express.static(path.join(__dirname, "public"), {
    maxAge: "1d",
    index: false
  }));

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production with long-term caching
    app.use(express.static(path.join(__dirname, "dist"), {
      maxAge: "1y",
      immutable: true,
      index: false
    }));
    
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
