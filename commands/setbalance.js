const db = require('quick.db');

exports.run  = async (client, message, args, tools) => 
{
	let emote = await db.fetch(`serverEmote_${message.guild.id}`);
	if(emote === null)
	{
		emote = "<:blobkiss:375218160225222656>";
		db.set(`serverEmote_${message.guild.id}`, emote);
	}
	let balance = await db.fetch(`userBalance_${message.author.id}`);
	if(balance === null) balance = 0;
	if(isNaN(args)) return message.channel.send("Please, specify an amount");
	
	db.set(`userBalance_${message.author.id}`, args);
	message.channel.send(`Your balance is now: ${args}`);
}