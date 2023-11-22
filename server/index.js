import { OpenAI } from 'openai';
import express from 'express';
import cors from 'cors';

const app = express()
const PORT = 3080
const openai = new OpenAI({
    apiKey: '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',
});

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message);
    try {
        const completion = await openai.completions.create({
            model: 'text-davinci-003',
            prompt: `${message}`,
            max_tokens: 100,
            temperature: 0.5,
        });
        console.log(completion.choices[0].text)

        // Check if completion.data and completion.data.choices are defined
        if (completion && completion.choices && completion.choices.length > 0) {
            res.json({
                message: completion.choices[0].text,
            });
        } else {
            res.status(500).json({ error: 'Unexpected response format from OpenAI API' });
        }
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () =>{
    console.log(`app is listening at ${PORT}`)
})

