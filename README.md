# NodeSchool AI workshop

## Getting started

1. [Install Node.js](https://nodejs.org/en/download) (v18 recommended, check by running `node -v` in your terminal)
2. Install a code editor
   - We recommend [Visual Studio Code](https://code.visualstudio.com)
3. Clone or download this project
   - Download: https://github.com/pixelbar/nodeschool-ai/archive/refs/heads/main.zip
   - Clone: `git clone https://github.com/pixelbar/nodeschool-ai.git`
4. Open the cloned directory in your code editor
5. Install dependencies
   - Run in cloned directory: `npm install`
6. Download models
   - If you're at Pixelbar, go to: http://172.16.31.216/ and download `t5-base.zip` and `vit-base-patch16-224.zip`, unzip them, and put them (the whole folder, not just the contents) in the `models/Xenova` folder.
   - If you're not at Pixelbar, set `allowRemoteModels` in `app.js` to `true` to allow models to be downloaded at runtime.
7. If you want to use OpenAI, create an account at https://openai.com. You get $5 of free credits to be used in the first 3 months.
   - Create an API key: https://platform.openai.com/account/api-keys
   - Copy `.env.example` to `.env` and fill in the values
8. Run the app: `node app.js`

## Models

Note that Transformers.js is limited in that it can only run models that have been converted to a special format (ONNX). You can find all models compatible with Transformers.js here: https://huggingface.co/models?library=transformers.js&sort=downloads.

## Resources

- [Express documentation](https://expressjs.com) - Express is the framework that the application is built on
- [Transformers.js documentation](https://huggingface.co/docs/transformers.js/index) - Transformers.js is a library to run machine learning models from Hugging Face on Node.js and the web
- [Hugging Face Tasks](https://huggingface.co/tasks) - explore ML models for various specific tasks
- [OpenAI API reference](https://platform.openai.com/docs/api-reference?lang=node.js)
- [GPT best practices](https://platform.openai.com/docs/guides/gpt-best-practices) - best practices for prompting OpenAI GPT APIs
- [OpenAI chat playground](https://platform.openai.com/playground?mode=chat) - playground to interact with Chat Completion API

### Resources for after the workshop

- [ChatGPT prompt engineering course](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
