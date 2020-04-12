const db = require('quick.db');

exports.run  = async (client, message, args, tools) =>
{
	let emote = await db.fetch(`serverEmote_${message.guild.id}`);
	if(emote === null)
	{
		emote = "<:blobkiss:375218160225222656>";
		db.set(`serverEmote_${message.guild.id}`, emote);
	}
	message.channel.send(emote);
}