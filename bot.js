var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
var prefix = "!";
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
	bot.user.setStatus('online', '!guide for help >3<')
    console.log('Connected');
	console.log('Carmilla is awake~ ^3^');
	bot.user.setActivity("!guide for help >3<")
});
bot.on('message', (message) => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	var special = "";
    if ((message.content.substring(0,1) == prefix) && (message.author.id != bot.id))
	{
		var cmd = "";
        cmd = message.content.substring(1,message.length);
		console.log("cmd: " + cmd);
        var special = "";
        switch(cmd) {
            // !ping
            case 'ping':
				message.channel.send('Pong~ <:blobkiss:375218160225222656>');
			break;
			case 'hello':
				special = message.author;
				switch(message.author.id) {
					case auth.owner:
						special = 'Mr Developer';
					break;
					case auth.yoruno:
						special = 'Yoruno *blushes*';
					break;
					case auth.zaaap:
						special = 'Mr F.O';
					break;
					case auth.giggles:
						special = "Onii-chan";
					break;
					case auth.neppy:
						special = "Uncle Nâz";
					break;
				}
				//end of special hello cases
				message.channel.send('Hello~ ' + special + ' <:blobkiss:375218160225222656>');
			break;
			//the howyoudoing command.
			
			case 'how are you doing':
				special = 'Carmilla is always happy <:blobkiss:375218160225222656>';
				switch(message.author.id){
				case auth.owner:
					special = "Carmilla is always happy, thanks for the concern Mr Developer <:blobkiss:375218160225222656>";
				break;
				case auth.giggles:
					special = "Carmilla is always happy Onii-chan <:blobkiss:375218160225222656>";
				break;
				case auth.yoruno:
					special = "*blushes* I am very happy right now <:blobkiss:375218160225222656>";
				break;
				case auth.neppy: 
					special: "Carmilla is always happy Uncle Nâz <:blobkiss:375218160225222656>";
				break;
				}
				message.channel.send(special);
			break;
			case 'how':
				special = 'Carmilla is always happy <:blobkiss:375218160225222656>';
				switch(message.author.id){
				case auth.owner:
					special = "Carmilla is always happy, thanks for the concern Mr Developer <:blobkiss:375218160225222656>";
				break;
				case auth.giggles:
					special = "Carmilla is always happy Onii-chan <:blobkiss:375218160225222656>";
				break;
				case auth.yoruno:
					special = "*blushes* I am very happy right now <:blobkiss:375218160225222656>";
				break;
				case auth.neppy: 
					special: "Carmilla is always happy Uncle Nâz <:blobkiss:375218160225222656>";
				break;
				};
				message.channel.send(special);
			break;	
			//case for adding a role.
			case 'up':
				if(message.member.roles.has(message.guild.roles.find("name", "Up!")))
				{
					message.channel.send('Sorry, it\'s only one "Up!" role per person~ <:blobkiss:375218160225222656>');
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
					}
					message.member.addRole(message.guild.roles.find("name", "Up!")).catch(console.error);
					message.channel.send('"Up!" role given' + special + '~ <:blobkiss:375218160225222656>');
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
					}
					message.member.removeRole(message.guild.roles.find("name", "Up!")).catch(console.error);
					message.channel.send('Goodbye' + special + '"Up!" role~ <:blobkiss:375218160225222656>');
				//}
				//else {
					//message.channel.send('You don\'t have the "Up!" role, too bad for you~ <:blobkiss:375218160225222656>');
				//}
			break;
			//
			case 'guide':
				message.channel.send('```To play with Carmilla use "!" followed by one of those commands:\nping\nhello\nsay\nup\ndown\nhow are you doing or just how\n(all commands are case-sensitive)```');
			break;
            // Just add any case commands if you want to..
        }
		//the say command to make her say whatever you want.
		if(message.content.substring(0,4) == '!say' && (!message.author.bot) )
		{
			var txt = message.content.substring(5,message.length);
			message.delete();
			message.channel.send(txt + ' <:blobkiss:375218160225222656>');
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
				special = " Heehee, thanks Mr Zaaap~"
			break;
			case auth.giggles: 
				special = " Thanks, Onii-chan~"
			break;
			case auth.giggles: 
				special = " Thanks, Uncle Nâz~"
			break;
			case auth.el: 
				special = " Heehee, I just happens to have one for you too El <:blobkiss:375218160225222656>"
			break;
		}
		message.channel.send('*blushes*' + special);
	}
});
