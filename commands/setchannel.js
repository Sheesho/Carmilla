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

  //actual code
  let specchannel = await db.fetch(`specChannel_${message.guild.id}`);
	if(specchannel === null)
  {
    if(args=== null)
		{
      specchannel = client.channels.find('name', message.channel);
		  db.set(`specChannel_${message.guild.id}`, specchannel);
    }
    else
    {
      specchannel = client.channels.find('name', args[0]);
      db.set(`specChannel_${message.guild.id}`, specchannel);
    }
	}
  else {
    specchannel = client.channels.find(channel => channel.name === args[0});
    db.set(`specChannel_${message.guild.id}`, specchannel);
  }
  console.log("channel defined to: " + specchannel.name);
  message.channel.send("Got it, I'll now send messages to " + specchannel.name + emote);
};
