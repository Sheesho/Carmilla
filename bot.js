var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
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
	console.log('Shisho is ready to go');
	bot.user.setActivity("!guide for help")
});
bot.on('message', (message) => {
   var emote = '<:blobkiss:375218160225222656>';	
   //if(bot.guild.id == auth.umi)
   //{
	//emote = '<:yug:440786722561982464>';
   //}
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	var special = "";
    if ((message.content.substring(0,1) == auth.prefix) && (message.author.id != bot.id))
	{
		var cmd = "";
        cmd = message.content.substring(1,message.length);
		console.log("cmd: " + cmd);
        var special = "";
        switch(cmd) {
			case 'hello':
				special = message.author;
				switch(message.author.id) {
					case auth.owner:
						special = ' Mr Developer ';
					break;
					case auth.yoruno:
						special = ' Yoruno *blushes* ';
					break;
					case auth.zaaap:
						special = ' Mr F.O ';
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
						special = "... uh, I mean 'Guten morgen, mein Fuhrer ";
					break;
				}
				//end of special hello cases
				message.channel.send('Hello~' + special + emote);
			break;
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
			//case for adding a role.
			case 'up':
				if(message.member.roles.has(message.guild.roles.find("name", "Up!")))
				{
					message.channel.send('Sorry, it\'s only one "Up!" role per person~ ' + emote);
				}
				else
				{
					switch(message.author.id){
						case auth.owner:
							special = " Mr Developer";
						break;
						case auth.zaaap:
							special = " Mr Zaaap";
						break;
						case auth.giggles:
							special = " Onii-chan";
						break;
						case auth.yoruno:
							special = " Mr Yoruno";
						break;
						case auth.neppy:
							special = " Uncle Nâz";
						break;
						case auth.udon:
							special = " Danchou";
						break;
						case auth.yuki:
							special = " mein Fuhrer";
						break;
					}
					message.member.addRole(message.guild.roles.find("name", "Up!")).catch(console.error);
					message.channel.send('"Up!" role given' + special + '~ ' + emote);
				}	
			break;
			//case for removing a role.
			case 'down':
			//checking if the user got the role:
				//if(message.member.roles.has(message.guild.roles.find("name", "Up!")))
				//{
					special = " ";
					switch(message.author.id){
						case auth.owner:
							special = ", Mr Developer's ";
						break;
						case auth.zaaap:
							special = ", Mr Zaaap's ";
						break;
						case auth.giggles:
							special = ", Onii-chan's ";
						break;
						case auth.yoruno:
							special = ", Mr Yoruno's ";
						break;
						case auth.neppy:
							special = ", Uncle Nâz's ";
						break;
						case auth.udon:
							special = " Danchou";
						break;
						case auth.yuki:
							special = " mein Fuhrer";
						break;
					}
					message.member.removeRole(message.guild.roles.find("name", "Up!")).catch(console.error);
					message.channel.send('Goodbye' + special + '"Up!" role~ ' + emote);
				//}
				//else {
					//message.channel.send('You don\'t have the "Up!" role, too bad for you~ <:blobkiss:375218160225222656>');
				//}
			break;
			//adding "NSFW" role
			case 'fbhi':
				if(message.member.roles.has(message.guild.roles.find("name", "on FBI list")))
				{
					message.channel.send('Sorry, it\'s only one "on FBI list" role per person~ ' + emote);
				}
				else
				{
					switch(message.author.id){
						case auth.owner:
							special = " Mr Developer";
						break;
						case auth.zaaap:
							special = " Mr Zaaap";
						break;
						case auth.giggles:
							special = " Onii-chan";
						break;
						case auth.yoruno:
							special = " Mr Yoruno";
						break;
						case auth.neppy:
							special = " Uncle Nâz";
						break;
						case auth.udon:
							special = " Danchou";
						break;
						case auth.yuki:
							special = " mein Fuhrer";
						break;
					}
					message.member.addRole(message.guild.roles.find("name", "on FBI list")).catch(void(0));
					message.channel.send('"on FBI list" role given' + special + '~ ' + emote);
				}	
			break;
			//removing it
			case 'fbbye':
			//checking if the user got the role:
				//if(message.member.roles.has(message.guild.roles.find("name", "Up!")))
				//{
					special = " ";
					switch(message.author.id){
						case auth.owner:
							special = ", Mr Developer's ";
						break;
						case auth.zaaap:
							special = ", Mr Zaaap's ";
						break;
						case auth.giggles:
							special = ", Onii-chan's ";
						break;
						case auth.yoruno:
							special = ", Mr Yoruno's ";
						break;
						case auth.neppy:
							special = ", Uncle Nâz's ";
						break;
						case auth.udon:
							special = " Danchou's ";
						break;
						case auth.yuki:
							special = " mein Fuhrer's ";
						break;
					}
					message.member.removeRole(message.guild.roles.find("name", "on FBI list")).catch(console.error);
					message.channel.send('Goodbye' + special + '"on FBI list" role~ ' + emote);
			break;
			//the list of available commands.
			case 'guide':
				message.channel.send('```To play with Carmilla use "!" followed by one of those commands:\n\n"hello"\n"say"\n"up"\n"down"\n"fbhi"\n"fbbye\n"how are you doing" or just "how"\n(all commands are case-sensitive)```');
			break;
            // Just add any case commands if you want to..
        }
		//the say command to make her say whatever you want.
		if(message.content.substring(0,4) == '!say' && (!message.author.bot) )
		{
			var txt = message.content.substring(5,message.length);
			message.delete();
			message.channel.send(txt + " " + emote);
		} 
	}
	if((message.content.substring(0,16) == 'for you Carmilla') && (!message.author.bot))
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
				special = " Heehee, I just happens to have one for you too El" + emote;
			break;
			case auth.udon:
				special = "Thanks, Danchou~";
			break;
			case auth.yuki:
				special = "Danke, mein Fuhrer~";
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
		if( rand > 0 && rand <= 50)
		{
			message.react("427404778436427786").catch(void(0));
        }
	}
});

//adding my role when I come back
bot.on('guildMemberAdd', guildMember => {
	if(guildMember.id == auth.owner)
	{
		guildMember.addRole(guildMember.guild.roles.find("name", "Shipwright")).catch(void(0));
		guildMember.addRole(guildMember.guild.roles.find("name", "Friends")).catch(void(0));
		guildMember.addRole(guildMember.guild.roles.find("name", "Dark")).catch(void(0));
		guildMember.addRole(guildMember.guild.roles.find("name", "on FBI list")).catch(void(0));
		guildMember.addRole(guildMember.guild.roles.find("name", "Announcements")).catch(void(0));
		guildMember.addRole(guildMember.guild.roles.find("name", "HL-player")).catch(void(0));
		guildMember.addRole(guildMember.guild.roles.find("name", "Disgusting Lucksack")).catch(void(0));
	}
});
