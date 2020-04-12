const db = require('quick.db');

exports.run  = async (client, message, args, tools) =>
{
	console.log(args[0]);
	let emote = await db.fetch(`serverEmote_${message.guild.id}`);
	if(emote === null)
	{
		emote = "<:blobkiss:375218160225222656>";
		db.set(`serverEmote_${message.guild.id}`, emote);
	}
	var cont = args[0];
	console.log("role asked: " + cont);

	switch(cont.toLowerCase())
	{
		//longest case list ever.
		case 'captain':
		case 'f.o':
		case 'shipwright':
		case 'rozapta':
		case 'hl-player':
		case 'member':
		case 'friends':
		case 'the cutest ! yay !':
		case 'umi captain':
		case 'announcements':
		case 'i love rosetta':
		case 'sacc of shame':
		case 'golden hidden':
		case 'immeasurable level of lucksack, devourer of rngesus':
		case 'level 200 ultimate lucksack':
		case 'rainbow':
		case 'disgusting lucksack':
		case 'tatsumaki':
		case 'bots':
		case 'fo(e)':
		case 'attack specialist':
		case 'defence specialist':
		case 'lucksack extraordinaire':
		case 'uzume':
		case 'amazing!':
		case 'udon':
		case 'unluck shitter':
		case 'stickers for discord':
		case 'dj':
		case 'rythm':
		case 'albae lover':
		case 'crew member':
		case 'vampy':
		case 'zooey':
		case 'chairlock fo':
		case ':tm:':
		case 'savage af boi':
		case 'chairlock member':
			message.channel.send("Sorry, I don't have the permission to give you that role " + emote);
		break;
		default:
			if(message.guild.roles.find(role => role.name.toLowerCase() === cont.toLowerCase()))
			{
				if(message.member.roles.find(role => role.name.toLowerCase() === cont.toLowerCase()))
				{
					message.member.removeRole(message.guild.roles.find(role => role.name.toLowerCase() === cont.toLowerCase())).catch(console.error);
					message.channel.send('Goodbye ' + '"' + cont + '"' + ' role~ ' + emote);
					console.log(cont + ' role successfully removed');
				}
				else
				{
					message.member.addRole(message.guild.roles.find(role => role.name.toLowerCase() === cont.toLowerCase())).catch(console.error);
					message.channel.send('"'+ cont + '"' + ' role given~ ' + emote)
					console.log(cont + ' role successfully given');
				}
			}
		break;
	}
}
