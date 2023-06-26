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
   - If you're at Pixelbar, go to: http://172.16.31.216/ and download `t5-base.zip` and `vit-base-patch16-224.zip` and put them in the `models/Xenova` folder.
   - If you're not at Pixelbar, set `allowRemoteModels` in `app.js` to `true` to allow models to be downloaded at runtime.
7. If you want to use OpenAI, create an account at https://openai.com. You get $5 of free credits to be used in the first 3 months.
   - Create an API key: https://platform.openai.com/account/api-keys
   - Copy `.env.example` to `.env` and fill in the values
8. Run the app: `node app.js`

## Resources

- [Transformers.js documentation](https://huggingface.co/docs/transformers.js/index)
- [OpenAI API reference](https://platform.openai.com/docs/api-reference?lang=node.js)
