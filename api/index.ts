import { handleNodeApiRequest } from "../src/lib/api-handler.server";

export default async function handler(req: any, res: any) {
  try {
    const handled = await handleNodeApiRequest(req, res);
    if (!handled) {
      res.statusCode = 404;
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({ error: "Not Found" }));
    }
  } catch (error: any) {
    console.error("Vercel Serverless Function Error:", error);
    res.statusCode = 500;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: error.message || String(error) }));
  }
}
