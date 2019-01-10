//⎛　　　　´●　　ω　●`　 ⎞
var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
const fs = require('fs');
var prefix = "!";
var urlExists = require('url-exists');
var hate;

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
	hate = 100;
	//bot.channels.get("431470143902580736").send("<@250342596784816129>, I am online again ! <:blobkiss:375218160225222656>");
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

bot.on('message', (message) => 
{
	var emote = '<:blobkiss:375218160225222656>';	
	if(message.guild.id == auth.umi)
	{
		emote = bot.emojis.find("name", "yug").toString();
	}
	var special = "";
	if(message.author.id != "237111771368914945")
	{
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
					resolve(bot.channels.get("293107888040181780").send("Merry Christmas Everyone !\nCarmilla is super-duper happy about the time she spent here <:vampou:375604910655275026>.\nI wish you all to have an amazing time eating chocolate and opening presents <:blobnom:375604908940066818> !\nCan't wait to have more fun for New year and all the years that will follow, yay ! I cannot give you a present so I hope a kiss from this cutie will be enought <:blobkiss:375604900119314432>\n<:vampou:375604910655275026> Carmilla's out ! <:vampou:375604910655275026>\n\nP.S:Shisho said that if you guys react with :gift: I will get lots and lots of nice things so pwease give a lot to the little Carmi-nya ! :sparkles:", {file: "https://raw.githubusercontent.com/Sheesho/Carmilla/master/Xmas-Carmilla.png"}).catch(
					function() 
					{ 
						console.log("promesse rompue");
					}));
				//End of promise
				});
			});
		   }
		   //the guide command
		if(message.content.startsWith(auth.prefix + 'guide'))
		{
			if(message.guild.id == "492355440399745026")
			{	
				const helpembed = new Discord.RichEmbed()
					.setTitle("Carmilla (la meilleure des bots discord <:blobkiss:375218160225222656>) super guide")
					.setDescription("Tiens tiens tiens, on dirait que quelqu'un a besoin d'informations sur ce que peut faire l'incroyable & adorable Carmilla~ <:blobpeek:375218261660401664>\nVoici la liste de ce que je peux faire(Et dites à Shisho de se dépêcher d'en ajouter d'autres):")
					.setColor("#1ce6af")
					.setFooter("Carmilla bot est propriété de Shisho#7817, Soyez gentils s'il vous plait ⎛　　　　´●　　ω　●`　 ⎞")
					.addField("!say", "Si vous aimez faire dire des choses stupides aux gens cette commande est faîte pour vous~ <:blobkiss:375218160225222656>")
					.addField("!emote", "Si vous voulez utiliser tout plein d'emojis super sympas, parce qu'être limité à 50 c'est pas fun <:blobtear:375218561628766210>. Vous n'avez qu'à en choisir une dans l'incroyable [liste des emojis](https://docs.google.com/spreadsheets/d/1VtGPAa2QJU5IUZdEdJpj4eQVoz4aMSS9yNqCCTsWpEI/edit?usp=sharing), tout comme la commande précédente, elle est sensible à la casse~ <:blobkiss:375218160225222656>\n\n\n\nJ'espère que ça vous a été utile et que l'on va beacoup s'amuser ensemble.<:blobpeek:375218261660401664>\n\nOh, J'ai faillis oublier de vous souhaiter une bonne journée, quelle étourdie je fais~");
				message.channel.send({ embed: helpembed });
			}
			else
			{
				const helpembed = new Discord.RichEmbed()
					.setTitle("Carmilla (cutest discord bot <:blobkiss:375218160225222656>) guide")
					.setDescription("Well, looks like someone needs some pointers on how to interact with the cute little m... I-I mean on how to interact with the wonderful lady that Carmilla is~ <:blobpeek:375218261660401664>\nHere is a short description of all the sentences a proper person should use to address a lady:")
					.setColor("#1ce6af")
					.setFooter("Carmilla bot is property of Shisho#7817, no bully please ⎛　　　　´●　　ω　●`　 ⎞")
					.addField("!hello", "If you're ever feeling lonely because nobody is saying hi to you you can count on me ! <:blobkiss:375218160225222656>")
					.addField("!say", "If you want to make me say silly things, you can use this~ <:blobkiss:375218160225222656>")
					.addField("!role", "If you want to add a cool role to the list of those you already have or remove one because it's not good enough for you just use this followed by that specific role. Beware, it is case sen-si-ti-ve~ <:blobkiss:375218160225222656>")
					.addField("!emote", "If you want to use nice emotes because being restricted to just 50 is no fun <:blobtear:375218561628766210>. Just pick an emote from the extensive [emote list](https://docs.google.com/spreadsheets/d/1VtGPAa2QJU5IUZdEdJpj4eQVoz4aMSS9yNqCCTsWpEI/edit?usp=sharing), similarily to the previous command this one is case sen-si-ti-ve~ <:blobkiss:375218160225222656>\n\n\n\nI hope this has been helpful to you and that you're gonna have a lot of fun playing with me from now on<:blobpeek:375218261660401664>\n\nOh, I almost forgot that I shouldn't speak about the secret commands & interactions, what a klutz I am teehee~");
				message.channel.send({ embed: helpembed });
			}	
		}
		//getting the hello command to work with stuff at the end.
	if(message.content.startsWith(auth.prefix + 'hello'))
	{
		special = message.author;
		switch(message.author.id) {
			case auth.owner:
				special = ' Mr Developer ';
			break;
			case auth.yoruno:
				special = ' Yoruno *blushes* ';
			break;
			case auth.zaaap:
				special = ' Captain ';
			break;
			case auth.giggles:
				special = " Onii-chan ";
			break;
			case auth.neppy:
				special = " Uncle Nâz ";
			break;
			case auth.udon:
				special = " Danchou ";
			break;
			case auth.yuki:
				special = "... uh, I mean 'Guten Morgen, mein Führer ";
			break;
			}
		//end of special hello cases
		message.channel.send('Hello~' + special + emote);
	}
	
	//the say command to make her say whatever you want.
	if(message.content.startsWith(auth.prefix + 'say') && (!message.author.bot) )
	{
		var txt = message.content.substring(5,message.length);
		message.delete();
		message.channel.send(txt + " " + emote);
	}

	if(message.content.startsWith(auth.prefix + 'lit') && (!message.author.bot) )
	{
		var txt = message.content.substring(5,message.length);
		message.channel.send(":ok_hand::fire::joy_cat::100:");
	}

		//the role command to get any role if available.	
	if((message.content.startsWith(auth.prefix + 'role')) && (!message.author.bot))
	{
		console.log(auth.prefix + 'role command issued');
		var cont = message.content.substring(6,message.length);
		console.log(cont + 'role asked');
		switch(cont)
		{
			//longest case list ever.
			case 'Captain':
			case 'F.O':
			case 'Shipwright':
			case 'Rozapta':
			case 'HL-player':
			case 'Member':
			case 'Friends':
			case 'The Cutest ! Yay !':
			case 'Umi Captain':
			case 'Announcements':
			case 'I Love Rosetta':
			case 'Immeasurable level of Lucksack, Devourer of RNGesus':
			case 'Level 200 Ultimate Lucksack':
			case 'Rainbow':
			case 'Disgusting Lucksack':
			case 'HL-player':
			case 'Tatsumaki':
			case 'Bots':
			case 'FO(E)':
			case 'Attack Specialist':
			case 'Defence Specialist':
			case 'Lucksack Extraordinaire':
			case 'Uzume':
			case 'AMAZING!':
			case 'Udon':
			case 'Unluck Shitter':
			case 'Stickers for Discord':
			case 'DJ':
			case 'Rythm':
			case 'ALBAE LOVER':
			case 'Crew Member':
			case 'Vampy':
			case 'Zooey':
			case 'Chairlock FO':
			case ':tm:':
			case 'Savage AF Boi':
			case 'Chairlock Member':
				message.channel.send("Sorry, I don't have the permission to give you that role " + emote);
			break;
			default:
				if(message.guild.roles.find("name", cont))
				{
					if(message.member.roles.find("name", cont))
					{
						message.member.removeRole(message.guild.roles.find("name", cont)).catch(console.error);
						message.channel.send('Goodbye ' + '"' + cont + '"' + ' role~ ' + emote);
						console.log(cont + ' role successfully removed');
					}
					else
					{
						message.member.addRole(message.guild.roles.find("name", cont)).catch(console.error);
						message.channel.send('"'+ cont + '"' + ' role given~ ' + emote)
						console.log(cont + ' role successfully given');
					}
				}
			break;
		}
	}
	//Getting access to every emote
	if((message.content.startsWith(auth.prefix + 'emote')) && (!message.author.bot))
	{
		var bool = false;
		var cont = message.content.substring(7,message.length);
		urlExists(auth.emotes+cont+".png", function(err, exists)
		{
			if(exists)
			{
				bool = true;
				//Promise
				var promise = new Promise(function(resolve, reject) 
				{
					// do a thing, possibly async, then…
					resolve(message.channel.send("", {file: auth.emotes + cont + ".png"}).catch(
					function() 
					{ 
						console.log("promesse rompue");
					}));
				});
				//End of promise
			}
		});
		urlExists(auth.emotes+cont+".gif", function(err, exists)
		{
			if(exists)
			{
				bool = true;
				//Promise
				var promise = new Promise(function(resolve, reject) 
				{
					// do a thing, possibly async, then…
					resolve(message.channel.send("", {file: auth.emotes + cont + ".gif"}).catch(
					function() 
					{ 
						console.log("promesse rompue");
					}));
				});
				//End of promise
			}
		});
		urlExists(auth.emotes+cont+".jpg", function(err, exists)
		{
			if(exists)
			{
				bool = true;
				//Promise
				var promise = new Promise(function(resolve, reject) 
				{
					// do a thing, possibly async, then…
					resolve(message.channel.send("", {file: auth.emotes + cont + ".jpg"}).catch(
					function() 
					{ 
						console.log("promesse rompue");
					}));
				});
				//End of promise
			}
		});
	}
		
	//reacting to "for you Carmilla messages"
	if((message.content.startsWith('For you Carmilla')) && (!message.author.bot))
	{
		switch(message.author.id) {
			case auth.owner:
				special = ' Please stop Mr.Developer~';
			break;
			case auth.yoruno:
				special = " *deeply*";
			break;
			case auth.zaaap:
				special = " Heehee, thanks Mr Zaaap~";
			break;
			case auth.giggles: 
				special = " Thanks, Onii-chan~";
			break;
			case auth.giggles: 
				special = " Thanks, Uncle Nâz~";
			break;
			case auth.el: 
				special = " Heehee, I just happen to have one for you too El" + emote;
			break;
			case auth.udon:
				special = "Thanks, Danchou~";
			break;
			case auth.yuki:
				special = "Danke, mein Führer~";
			break;
		}
		message.channel.send('*blushes*' + special);
	}
	}
	else
	{
		if(hate > 0)
		{
			message.delete();
			hate = hate - Math.floor(Math.random() * 2) ;
		}
	}
		
	//reacting to posts in art-channel
	if(((message.channel.id == auth.artchannel) && (message.attachments.size == 1)) && (!message.author.bot))
	{
		var rand = Math.floor(Math.random() * 100) + 1; // returns a number between 1 and 100
		if( rand > 0 && rand <= 10)
		{
			message.react("375604899863330817").catch(void(0));
        }
		else if(rand > 10 && rand <= 20)
		{
			message.react("375604905047621633").catch(void(0));
		}
		else if(rand > 20 && rand <= 30)
		{
			message.react("375604888706482176").catch(void(0));
		}
		else if(rand > 30 && rand <= 60)
		{
			message.react("375604900119314432").catch(void(0));
		}
	}
		
	//reacting to posts in salt-channel
	if(((message.channel.id == auth.saltchannel) && (message.attachments.size == 1)) && (!message.author.bot))
	{
		var rand = Math.floor(Math.random() * 100) + 1; // returns a number between 1 and 100
		if( rand > 0 && rand <= 30)
		{
			message.react("427404778436427786").catch(void(0));
        	}
	}
	//end of the if
	}
//end of the function
});
