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

/*bot.on("guildMemberAdd", (member) => {
	var welcome = 0;
	var servername = "";
	var ping;
	var txt = "";
	//defining the welcome channel
	if(member.guild.id == auth.chairlock)
	{
		welcome = auth.chairlockwelcome;
		servername = "Chairlock";
		ping:"<@&292550499687858177>";
		txt = "Why hello there " + member + "! ~~I'll supply you with all you need~~\nWelcome to ***Chairlock*** I am <@427045218014068738> the unique bot of this server, so don't hesitate to check <#427127960315887627> or to drop a ***!guide*** in <#431470143902580736>.\nThere is a pinned post in <#293297897251012610> with the members timezones and the salt tables, feel free to add yourself on it if you want <:blobkiss:375218160225222656>.\nI almost forgot, check <#485126135873798155> because of special rules that apply to certain channels so that the members don't receive pings while it was 3AM and they were sleeping, thanks for your comprehension.\n\nCarmilla hope you will have lot of fun here and wishes you a great day <:blobkiss:375218160225222656>.\n";
	}
	else
	{
		if(member.guild.id == auth.umi) 
		{
			welcome = auth.umiwelcome;
			servername = "Umi";
			ping = "<@&433903509017067522>"
			txt = "Why hello there " + member + "! ~~I'll supply you with all you need~~\nWelcome to ***Umi*** I am <@427045218014068738>, so don't hesitate to drop a ***!guide*** in <#408179228299886593>"+bot.emojis.find("name", "yug").toString()+".\n\nCarmilla hope you will have lot of fun here and wishes you a great day "+bot.emojis.find("name", "yug").toString()+".\n";
		}
		else
		{	
			if(member.guild.id == auth.vroom)
			{
				welcome = auth.vroomwelcome;
				servername = "Vroom";
				txt = "Why hello there " + member + "! ~~I'll supply you with all you need~~\nWelcome to ***Vroom*** I am <@427045218014068738>, so don't hesitate to drop a ***!guide*** in <#349282229312159755><:blobkiss:375218160225222656>.\n\nCarmilla hope you will have lot of fun here and wishes you a great day <:blobkiss:375218160225222656>.\n";
			}
			else
			{
				welcome = "492355440399745028";
				servername = "Anim !";
				txt = "Coucou " + member + "! ~~Quel joli cou vous avez là~~\n***Bienvenue sur le serveur des Bachelor Anim 1*** Je suis la fabuleusement incroyable <@427045218014068738>, donc n'hésitez pas a utiliser ***!guide*** dans le salon <#492365526799220757> pour connaître la liste des commandes ! <:blobkiss:375218160225222656>.\n\nCarmilla espère que vous allez bien vous amuser et vous souhaote une bonne journée ! <:blobkiss:375218160225222656>.\n";
			}
		}
	}
	//gotta ping the members
	if(ping != null)
	{
		bot.channels.get(welcome).send(ping);
	}
	//making the embed
	if(member.guild.id != "492355440399745026")
	{
	const hiembed = new Discord.RichEmbed()
			.setTitle("Carmilla's (cutest discord bot <:blobkiss:375218160225222656>) warm welcome ")
			.setDescription(txt)
			.setColor("#1ce6af")
			.setFooter("Carmilla bot is property of Shisho#7817, no bully please ⎛　　　　´●　　ω　●`　 ⎞");
	bot.channels.get(welcome).send({ embed: hiembed });
	}
	else
	{
	const hiembed = new Discord.RichEmbed()
			.setTitle("Carmilla's (la meilleure des bots discord <:blobkiss:375218160225222656>) adorable bievenue ")
			.setDescription(txt)
			.setColor("#1ce6af")
			.setFooter("Carmilla bot est proriété de Shisho#7817, Soyez gentils s'il vous plait ⎛　　　　´●　　ω　●`　 ⎞");
	bot.channels.get(welcome).send({ embed: hiembed });
	}
});*/

bot.on('message', (message) => {
   var emote = '<:blobkiss:375218160225222656>';	
   if(message.guild.id == auth.umi)
   {
	emote = bot.emojis.find("name", "yug").toString();
   }
    var special = "";
    if ((message.content.substring(0,1) == auth.prefix) && (message.author.id != bot.id))
	{
		var cmd = "";
        	cmd = message.content.substring(1,message.length);
        	var special = "";
		//xmas			
		if(message.content.startsWith(auth.prefix + 'xmas') && (!message.author.bot))
		{
			message.delete();
			urlExists("https://raw.githubusercontent.com/Sheesho/Carmilla/master/Xmas-Carmilla.png", function(err)
			{
				//Promise
				var promise = new Promise(function(resolve, reject) 
				{
					// do a thing, possibly async, then…
					resolve(bot.channels.get("526699343953264670").send("Merry Christmas Everyone !\nCarmilla is super-duper happy about the time she spent here <:vampou:375604910655275026>.\nI wish you all to have an amazing time eating chocolate and opening presents <:blobnom:375604908940066818> !\nCan't wait to have more fun for New year and all the years that will follow, yay ! I cannot give you a present so I hope a kiss from this cutie will be enought <:blobkiss:375604900119314432>\n<:vampou:375604910655275026> Carmilla's out ! <:vampou:375604910655275026>\n\nP.S:Shisho said that if you guys react with :gift: I will get lots and lots of nice things so pwease give a lot to the little Carmi-nya ! :sparkles:", {file: "https://raw.githubusercontent.com/Sheesho/Carmilla/master/Xmas-Carmilla.png"}).catch(
					function() 
					{ 
						console.log("promesse rompue");
					}));
				//End of promise
				});
			});
		   }
	}
});

