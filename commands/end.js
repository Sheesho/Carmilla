var Discord = require('discord.js');
const db = require('quick.db'); //need to know which channel to send the copied messages

exports.run  = async (client, message, args, tools) =>
{
  //if this is isn't a special channel, abort
if(!(message.channel.name.startsWith('🔏'))) return;

let emote = await db.fetch(`serverEmote_${message.guild.id}`);
if(emote === null)
{
  emote = "<:blobkiss:375218160225222656>";
  db.set(`serverEmote_${message.guild.id}`, emote);
}
let specchannel = await db.fetch(`specChannel_${message.guild.id}`);
client.channels.find(channel => channel.name === specchannel.name).send("Someone said the following things: " + emote +'\n\n');
message.channel.fetchMessages().then(messages => {
const botMessages = messages.filter(msg => msg.author.id === message.author.id);
for(let elements of botMessages.array().reverse().values())
{
  if(elements.content != message.content) client.channels.find(channel => channel.name === specchannel.name).send('"'+ elements.content + '"');
}
});
message.channel.delete().then(console.log("Channel successfully deleted")
  .catch(console.error);
};
