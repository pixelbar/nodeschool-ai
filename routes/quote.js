import { Router } from "express";
import { OpenAIApi, Configuration } from "openai";

export const quoteRouter = Router();

quoteRouter.get("/quote", async (req, res) => {
  const OPENAI_TOKEN = process.env.OPENAI_TOKEN;
  if (!OPENAI_TOKEN) {
    throw new Error("Missing OPENAI_TOKEN from env variables");
  }

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: OPENAI_TOKEN,
    })
  );

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0613",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Make up an original motivational quote with less than 30 words. Then rewrite it as if Yoda said it.
  
Original: <original quote here>
Yoda: <Yoda quote here>`,
        },
      ],
      temperature: 1.5,
    });

    const result = response.data.choices[0].message.content;
    const yodaQuote = result.split("Yoda: ")[1];
    const prettifiedQuote = prettifyQuotes(yodaQuote);

    res.render("quote", { quote: prettifiedQuote });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
});

function prettifyQuotes(input) {
  return input.replace(/^"(.*)"$/, "“$1”");
}
