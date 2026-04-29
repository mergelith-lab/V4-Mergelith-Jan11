import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use compression to reduce response payload size
  app.use(compression());

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

    res.json({ 
      success: true, 
      message: "Inquiry successfully transmitted to the Mergelith Strategy Team." 
    });
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
