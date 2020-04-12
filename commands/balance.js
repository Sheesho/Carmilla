const db = require('quick.db');

exports.run  = async (client, message, args, tools) =>
{
	let emote = await db.fetch(`serverEmote_${message.guild.id}`);
	if(emote === null)
	{
		emote = "<:blobkiss:375218160225222656>";
		db.set(`serverEmote_${message.guild.id}`, emote);
	}
	let user = message.mentions.users.first() || message.author;
	//fetching balance
	let balance = await db.fetch(`userBalance_${user.id}`);
	if(balance === null) balance = 0;//if not defined set to 0
	message.channel.send(`${user.username} - Balance: $${balance}`);
};
