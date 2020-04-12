const db = require('quick.db');

exports.run  = async (client, message, args, tools) =>
{
	let emote = await db.fetch(`serverEmote_${message.guild.id}`);
	if(emote === null)
	{
		emote = "<:blobkiss:375218160225222656>";
		db.set(`serverEmote_${message.guild.id}`, emote);
	}
  let single = false;
  if((isNaN(args[0])) && ((args[0].toLowerCase() == "tickets") || (args[0].toLowerCase() == "ticket") || (args[0].toLowerCase() == "tixes") || (args[0].toLowerCase() == "tix") || (args[0].toLowerCase() == "crystal") || (args[0].toLowerCase() == "crystals") || (args[0].toLowerCase() == "xtal") || (args[0].toLowerCase() == "xtals") || (args[0].toLowerCase() == "10tixes") || (args[0].toLowerCase() == "10p") || (args[0].toLowerCase() == "10pticket")) || (args[0].toLowerCase() == "10ptixes") || (args[0].toLowerCase() == "10tickets")) single = true;
	if((isNaN(args[0]) && (!(args[0] == null))) || (isNaN(args[1]) && (!(args[1] == null))) || (isNaN(args[2]) && (!(args[2]== null))))
  {
    if(!single)
    {
      return message.channel.send("Could it be that you don't know what numbers are ? " + emote);
    }
  }
  let user = message.author;
  let crystals = await db.fetch(`userCrystals_${user.id}`);
  let tickets = await db.fetch(`userTickets_${user.id}`);
  let tentickets = await db.fetch(`userTenTickets_${user.id}`);
  let tcrystal;
  let tticket;
  let ttenticket;
	if (crystals === null) crystals = 0;//if not defined set to 0
  if (tickets === null) tickets = 0;//if not defined set to 0
  if (tentickets === null) tentickets = 0;//if not defined set to 0
  //making sure things work if single is enabled
  if((args[0].toLowerCase() == "tickets") || (args[0].toLowerCase() == "ticket") || (args[0].toLowerCase() == "tixes") || (args[0].toLowerCase() == "tix"))
  {
    if(args[1] == null) tticket = 0; else tticket = parseInt(args[1]);
    tcrystal = 0;
    ttenticket = 0;
  }
  else if((args[0].toLowerCase() == "crystal") || (args[0].toLowerCase() == "crystals") || (args[0].toLowerCase() == "xtal") || (args[0].toLowerCase() == "xtals"))
    {
      if(args[1] == null) tcrystal = 0; else tcrystal = parseInt(args[1]);
      tticket = 0;
      ttenticket = 0;
    }
  else if((args[0].toLowerCase() == "10tixes") || (args[0].toLowerCase() == "10p") || (args[0].toLowerCase() == "10pticket") || (args[0].toLowerCase() == "10ptixes"))
    {
      if(args[1] == null) ttenticket = 0; else ttenticket = parseInt(args[1]);
      tticket = 0;
      tcrystal = 0;
    }
  else
  {
    if(args[0] == null) tcrystal = 0; else tcrystal = parseInt(args[0]);
    if(args[1] == null) tticket = 0; else tticket = parseInt(args[1]);
    if(args[2] == null) ttenticket = 0; else ttenticket = parseInt(args[2]);
  }
  db.set(`userCrystals_${user.id}`, tcrystal);
  db.set(`userTickets_${user.id}`, tticket);
  db.set(`userTenTickets_${user.id}`, ttenticket);
	message.channel.send("Successfully updated to your spark amount" + emote);
};
