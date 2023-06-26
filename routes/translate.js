import { pipeline } from "@xenova/transformers";
import { Router } from "express";

export const translateRouter = Router();

translateRouter.get("/translate", (req, res) => {
  res.render("translate");
});

translateRouter.post("/translate", async (req, res) => {
  try {
    const pipeline = await T5Pipeline.getInstance();
    const results = await pipeline(`translate English to German: ${req.body.text}`);

    // Renders `views/translate.ejs`
    res.render("translate", { result: results[0].translation_text });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
});

// Singleton pattern so that we only load the pipeline once
export class T5Pipeline {
  static task = "translation";
  // https://huggingface.co/t5-base
  static model = "Xenova/t5-base";

  static instance = null;

  static async getInstance() {
    if (this.instance === null) {
      this.instance = await pipeline(this.task, this.model);
    }

    return this.instance;
  }
}
