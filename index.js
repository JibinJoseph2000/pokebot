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
     else if(msg.text=="How r u")
     {bot.sendMessage(chatId, 'double fine');}
   else if(msg.text=="How are you")
{bot.sendMessage(chatId, 'triple fine');}
    else if(msg.text=="How do u feel")
{bot.sendMessage(chatId, 'much fine');}
       else if(msg.text=="How do you feel")
{bot.sendMessage(chatId, 'much more than fine');}
     else if(msg.text=="Bye")
{bot.sendMessage(chatId, 'Ok Well done');}
    else
    {bot.sendMessage(chatId,'not executable');}
});
