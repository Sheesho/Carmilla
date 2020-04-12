const db = require('quick.db');

exports.run  = async (client, message, args, tools) =>
{
	console.log("0")
	let emote = await db.fetch(`serverEmote_${message.guild.id}`);
	console.log("1")
	if(emote === null)
	{
		emote = "<:blobkiss:375218160225222656>";
		db.set(`serverEmote_${message.guild.id}`, emote);
	}
	console.log("2")
	if((message.author.highestRole == message.guild.highestRole) || (message.author.tag == "Shisho#7817"))
	{
		console.log("3")
		console.log(args[0]);
		db.set(`serverEmote_${message.guild.id}`, args[0]);
		console.log("4")
		message.channel.send("I'll now end my sentences with: '" + args[0] + "'");
	}
}