const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = "https://gtechfest.herokuapp.com",
    token = process.env.TOKEN || '740932949:AAHL1GnnNUtYWRkb-xuw08qeArlS4rBhhfU',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
bot.on("message", (msg) => {
    if(msg.text=="Hai")
    {bot.sendMessage(chatId,'Hello');
    const chatId = msg.chatId;
    bot.sendMessage(chatId, 'receive your message');
});

