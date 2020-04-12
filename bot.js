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
	let user = bot.users.find(user => user.tag === "Shisho#7817");
	user.send("I am online & ready to go !");
});

ot.on('message', message => {

	//Variables
	let msg = message.content;
	let sender = message.author;
	let args = message.content.slice(auth.prefix.length).trim().split(' ');
	let cmd = args.shift();
	//Return Statements
	if(message.author.tag == "Carmilla#9319") return;
	if(!(message.content.startsWith(prefix))) return;
	try
	{

		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(bot, message, args);
	}
	catch(e)
	{
		console.log(e.message);
	}
	finally
	{
		console.log(`${message.author.tag} ran the command ${cmd}`);
	}

});


