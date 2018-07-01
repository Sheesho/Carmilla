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
	bot.user.setActivity("!guide for help")
});

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
		console.log("cmd: " + cmd);
        var special = "";
        switch(cmd) {
				
			//the howyoudoing command.
			
			case 'how are you doing':
				special = 'Carmilla is always happy ' + emote;
				switch(message.author.id){
				case auth.owner:
					special = "Carmilla is always happy, thanks for the concern Mr Developer " + emote;
				break;
				case auth.giggles:
					special = "Carmilla is always happy Onii-chan " + emote;
				break;
				case auth.yoruno:
					special = "*blushes* I am very happy right now " + emote;
				break;
				case auth.neppy: 
					special = "Carmilla is always happy Uncle Nâz " + emote;
				break;
				case auth.udon: 
					special = "Carmilla is always happy Danchou " + emote;
				break;
				case auth.yuki: 
					special = "Carmilla is ready to invade Poland mein Fuhrer " + emote;
				break;
				}
				message.channel.send(special);
			break;
			case 'how':
				special = 'Carmilla is always happy ' + emote;
				switch(message.author.id){
				case auth.owner:
					special = "Carmilla is always happy, thanks for the concern Mr Developer " + emote;
				break;
				case auth.giggles:
					special = "Carmilla is always happy Onii-chan " + emote;
				break;
				case auth.yoruno:
					special = "*blushes* I am very happy right now " + emote;
				break;
				case auth.neppy: 
					special = "Carmilla is always happy Uncle Nâz " + emote;
				break;
				case auth.udon: 
					special = "Carmilla is always happy Danchou " + emote;
				break;
				case auth.yuki: 
					special = "Carmilla is ready to invade Poland mein Fuhrer " + emote;
				break;
				}
				message.channel.send(special);
			break;	
			//the list of available commands.
			case 'guide':
				message.channel.send('```To play with Carmilla use "!" followed by one of those commands:\n\n"hello"\n"say"\n"role" (followed by the role you want to add or remove)\n"emote" (followed by the emote you want to use*)\n(all commands are case-sensitive)\n\nI\'ve been created by Shisho#7817 to be a community member-bot, please don\'t bully Carmilla (^3^)\n\n*Under the condition that Shisho added it to the emote folder```');
			break;
            // Just add any case commands if you want to..
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
				special = " Heehee, thanks Captain~";
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
});
