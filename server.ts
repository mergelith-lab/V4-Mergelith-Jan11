import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route to handle institutional inquiries
  app.post("/api/send-inquiry", (req, res) => {
    const { name, firm, email, objective } = req.body;
    
    console.log("------------------------------------------");
    console.log("NEW INQUIRY RECEIVED");
    console.log(`To: sasha@mergelith.com`);
    console.log(`From: ${name} (${email})`);
    console.log(`Firm: ${firm}`);
    console.log(`Objective: ${objective}`);
    console.log("------------------------------------------");

    // In a real scenario, you would use a service like SendGrid or Resend here.
    // Example:
    // await resend.emails.send({
    //   from: 'Mergelith Assistant <assistant@mergelith.com>',
    //   to: 'sasha@mergelith.com',
    //   subject: `New Institutional Inquiry: ${firm}`,
    //   text: `Name: ${name}\nEmail: ${email}\nFirm: ${firm}\nObjective: ${objective}`
    // });

    res.json({ 
      success: true, 
      message: "Inquiry successfully transmitted to the Mergelith Strategy Team." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
