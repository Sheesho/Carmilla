const db = require('quick.db');
exports.run  = async (client, message, args, tools) =>
{

  //adding the emote
  let emote = await db.fetch(`serverEmote_${message.guild.id}`);
	if(emote === null)
	{
		emote = "<:blobkiss:375218160225222656>";
		db.set(`serverEmote_${message.guild.id}`, emote);
	}

  {
  	let specchannel = await db.fetch(`specChannel_${message.guild.id}`);
  	if(specchannel === null)
  	{
  		specchannel = message.channel;
  		db.set(`specChannel_${message.guild.id}`, specchannel);
  	}
    client.channels.find(channel => channel.name === specchannel.name).send("Message " + emote);
    message.channel.send("Message sent to " + specchannel.name);
  }
};
