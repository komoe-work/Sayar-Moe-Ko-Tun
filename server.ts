/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import * as dotenv from "dotenv";

// Load environment configurations
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser limit expanded for custom assets
  app.use(express.json({ limit: "5mb" }));

  // API Endpoint: Polish copywriting via Gemini AI with clean lazy-loading
  app.post("/api/refine-copy", async (req: express.Request, res: express.Response) => {
    try {
      const { title, subtitle, headline, category, aiInstructions, brandProfile, lang } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
        console.warn("GEMINI_API_KEY is not defined or is placeholder. Failing gracefully to let client-side handle simulation.");
        return res.status(403).json({
          success: false,
          error: "Gemini API key is not configured in Secrets panel yet. Resorting to premium local deterministic rephrasing."
        });
      }

      // Lazy initialization with mandatory User-Agent headers
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });

      const targetLang = lang === 'my' ? 'Myanmar (Burmese)' : 'English';
      const systemPrompt = `You are an elite, modern, Cambridge-certified academic brand strategist and pedagogical copywriter working for "Sayar Moe Ko Tun". 
Your goal is to optimize mathematical and physics educational campaign copy in ${targetLang}. Keep the output copy written beautifully and natively in ${targetLang}. Keep it clear, premium, striking, and highly authoritative. Avoid generic marketing jargon or artificial hype. Highlight subject expertise.

BRAND BACKGROUND:
- Tutor Name: ${brandProfile?.name || "Sayar Moe Ko Tun"}
- Description: ${brandProfile?.overview || "Specialist educator in IGCSE and A-Level physics & advanced mathematics courses."}

ORIGINAL COPY:
- Category: ${category}
- Subtitle Focus Area: ${subtitle}
- Title Headline: ${title}
- Headline Explanation: ${headline}

USER CUSTOMIZATION INSTRUCTIONS:
"${aiInstructions || (lang === 'my' ? "ဆွဲဆောင်မှုရှိပြီး ပညာရေးဆန်သော ရေးသားမှုဖြစ်စေရန်" : "Make it sound highly specialized and academically authoritative")}"

You MUST output your refined copywriting ideas in ${targetLang} into a structured JSON schema form matching:
{
  "title": "Optimized short title (maximum 35 characters)",
  "subtitle": "Short focused tagline/badge context (maximum 25 characters)",
  "headline": "Full conceptual or call-to-action description (maximum 160 characters)"
}

Ensure writing is completely natural and fluent in ${targetLang}. For Myanmar translation, use standard premium academic terminology (e.g., 'ရူပဗေဒ', 'သင်္ချာ', 'သဘောတရား', 'ကင်းဘရစ်ချ်').`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: "Optimize and refine the brand advertisement copy according to user instructions.",
        config: {
          systemInstruction: systemPrompt,
          temperature: 1.0,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "Highly compelling main headline title" },
              subtitle: { type: Type.STRING, description: "Brief focused subtitle badge" },
              headline: { type: Type.STRING, description: "Polished and impactful brand description copy" }
            },
            required: ["title", "subtitle", "headline"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response output returned from Gemini");
      }

      const parsedData = JSON.parse(responseText.trim());
      res.json({
        success: true,
        data: {
          title: parsedData.title || title,
          subtitle: parsedData.subtitle || subtitle,
          headline: parsedData.headline || headline
        }
      });

    } catch (error: any) {
      console.error("Express server Gemini rephrasing error:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to parse or fetch intelligence copy"
      });
    }
  });

  // Hot module and dev/prod serving pipelines
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite middleware for full-stack HMR-free local development");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Setting up static file serving for compiled build assets");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express application active and routing on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((e) => {
  console.error("FATAL: Server startup crashed:", e);
});
