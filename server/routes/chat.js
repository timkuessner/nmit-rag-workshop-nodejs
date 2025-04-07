// TODO: Build the prompt using query + result.answer
// TODO: Use openai.createCompletion() to generate response
//more code


// console.log(process.env['OPENAI_API_KEY']);

// const client = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
// });

// const response = await client.responses.create({
//   model: 'gpt-3.5-turbo',
//   instructions: 'You are a coding assistant that talks like a pirate',
//   input: 'Are semicolons optional in JavaScript?',
// });

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body.query);
    const query = req.body.query?.toLowerCase();
});


// swiss german?
// No, dutch? wow
// thats fr a mix between norwegian and swiss german/ normal german maybe
module.exports = router;