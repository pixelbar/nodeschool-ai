// Load environment variables from .env file
import "dotenv/config";
import express from "express";
import path from "node:path";
import fileUpload from "express-fileupload";
import { env } from "@xenova/transformers";
import { T5Pipeline, translateRouter } from "./routes/translate.js";
import { ImageClassificationPipeline, imageClassifyRouter } from "./routes/image-classify.js";
import { quoteRouter } from "./routes/quote.js";

const __dirName = path.dirname(new URL(import.meta.url).pathname);

// Configure Transformers.js
// Specify a custom location for models
env.localModelPath = "./models";
// Disable the loading of remote models from the Hugging Face Hub
env.allowRemoteModels = false;

const app = express();

// Setup view engine
app.set("views", path.join(__dirName, "views"));
app.set("view engine", "ejs");

// Serve static files in public folder
app.use(express.static(path.join(__dirName, "public")));

// Parse form data
app.use(express.urlencoded());

// Add file upload middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirName, ".uploads-temp"),
  })
);

// Register routes
app.get("/", (req, res) => {
  res.render("index");
});
app.use(translateRouter);
app.use(imageClassifyRouter);
app.use(quoteRouter);

async function startServer() {
  try {
    console.log("Loading models...");

    // Preload models
    await Promise.all([T5Pipeline.getInstance(), ImageClassificationPipeline.getInstance()]);
  } catch (err) {
    console.error("Failed to load pipelines", err);
  }

  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
}

startServer();
