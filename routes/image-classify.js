import { Router } from "express";
import { pipeline } from "@xenova/transformers";

export const imageClassifyRouter = Router();

imageClassifyRouter.get("/image-classify", (req, res) => {
  res.render("image-classify");
});

imageClassifyRouter.post("/image-classify", async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  try {
    const imageClassify = await ImageClassificationPipeline.getInstance();
    const results = await imageClassify(req.files.file.tempFilePath);

    if (results.length === 0) {
      res.render("image-classify", {
        result: `I don't know what this is.`,
      });

      return;
    }

    const firstLabel = results[0].label.split(",")[0];
    res.render("image-classify", {
      result: `I'm ${(results[0].score * 100).toFixed(1)}% sure this is a ${firstLabel}.`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
});

export class ImageClassificationPipeline {
  static task = "image-classification";
  // https://huggingface.co/google/vit-base-patch16-224
  static model = "Xenova/vit-base-patch16-224";

  static instance = null;

  static async getInstance() {
    if (this.instance === null) {
      this.instance = await pipeline(this.task, this.model);
    }

    return this.instance;
  }
}
