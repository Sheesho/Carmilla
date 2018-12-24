//⎛　　　　´●　　ω　●`　 ⎞
var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
const fs = require('fs');
var prefix = "!";
var urlExists = require('url-exists');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);
   
bot.on('ready', () => {
	bot.user.setStatus('online', '!guide for help')
	console.log('Connected');
	console.log('Carmilla is ready to go');
	bot.user.setActivity("!guide for help");
	bot.channels.get("431470143902580736").send("<@250342596784816129>, I am online again ! <:blobkiss:375218160225222656>");
});
