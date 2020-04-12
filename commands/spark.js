var Discord = require('discord.js');
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
	let crystals = await db.fetch(`userCrystals_${user.id}`);
  let tickets = await db.fetch(`userTickets_${user.id}`);
  let tentickets = await db.fetch(`userTenTickets_${user.id}`);
	if (crystals === null) crystals = 0;//if not defined set to 0
  if (tickets === null) tickets = 0;//if not defined set to 0
  if (tentickets === null) tentickets = 0;//if not defined set to 0
  let sparkpercent = (((crystals) + (tickets * 300) + (tentickets * 3000))/900).toFixed(2);
  let sparkamount = (Math.floor(crystals/300) + tickets + (10 * tentickets));
  let comment;
  if(sparkpercent < 1.00)
    comment = "Maybe you should start saving <:blobpeek:375218261660401664>.";
  else if(sparkpercent < 25.00)
    comment = "Off to a good start it seems <:blobpeek:375218261660401664>.";
  else if(sparkpercent < 50.00)
    comment = "Almost Halfway keep going <:blobpeek:375218261660401664>!";
  else if(sparkpercent < 75.00)
    comment = "You're past the hard part keep it up <:blobpeek:375218261660401664>!";
  else if(sparkpercent < 90.00)
    comment = "You're past the hard part keep it up <:blobpeek:375218261660401664>!";
  else if(sparkpercent < 100.00)
    comment = "Don't go blowing it now, it's almost there <:blobpeek:375218261660401664>!";
  else if(sparkpercent < 105.00)
    comment = "We did it ! Uh sorry, I mean \"You did it !\" <:blobveryhappy:375604906586800130>!";
  else if(sparkpercent < 125.00)
    comment = "Going to stockpile another one ? <:blobpeek:375218261660401664>";
  else if((sparkpercent >= 200.00) && (sparkpercent < 300.00))
    comment = "Damn, 2 sparks worth of funds <:blobkawai:375604899863330817>";
  else if((sparkpercent >= 300.00) && (sparkpercent < 400.00))
    comment = "Wow, 3 sparks worth of funds ! Shouldn't you spend them for something cool ? <:blobsweat:375604908885540864>";
  else if(sparkpercent >= 400.00)
    comment = "Never gonna spend your funds, never gonna use your pulls, never gonna do those rolls you'll keep 'piling ";
  //set the value in the db just in case
  db.set(`userCrystals_${user.id}`, crystals);
  db.set(`userTickets_${user.id}`, tickets);
  db.set(`userTenTickets_${user.id}`, tentickets);
  //let create the Embed
  const sparkembed = new Discord.RichEmbed()
  .setTitle(user.tag + "'s spark progression:")
  .setDescription("Here is your current progression toward 300 pulls:")
  .setColor("#1ce6af")
  .setFooter("Carmilla bot is property of Shisho#7817, no bully please ⎛　　　　´●　　ω　●`　 ⎞")
  .addField("Amount: ", "🔷 Crystals: " + crystals + ",\n🎫 Tickets: " + tickets + ",\n🎟️ 10-Tickets: " + tentickets)
  .addField("Total", "✨ Funds: " + sparkamount + "\n🏆 Progression: " + sparkpercent + "%\n\nMy comment: "+ comment);
  message.channel.send({ embed: sparkembed });
};
