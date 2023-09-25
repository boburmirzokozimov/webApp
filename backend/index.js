const TelegramBot = require('node-telegram-bot-api');

const token = '6622358521:AAG7DVi0sMHsQwIEcP4WDq6-w6qK_C0v61A'
const webAppUrl = 'https://fastidious-sopapillas-b0e606.netlify.app/'

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    bot.sendMessage(chatId, resp);
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Received your message!');

        await bot.sendMessage(chatId, 'Click to start the app', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Start', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
});
