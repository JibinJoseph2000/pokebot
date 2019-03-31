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
    const chatId = msg.chat.id;
    if(msg.text=="hai"||msg.text=="Hai")
    {bot.sendMessage(chatId, 'Hello');}
     else if(msg.text=="how r u")
     {bot.sendMessage(chatId, 'double fine');}
   else if(msg.text=="how are you")
{bot.sendMessage(chatId, 'triple fine');}
    else
    {bot.sendMessage(chatId,'not executable');}
});
