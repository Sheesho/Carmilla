var Discord = require('discord.js');
const db = require('quick.db'); //need to know which channel to send the copied messages
//Super cool command for Yoru part 1
exports.run  = async (client, message, args, tools) =>
{
//step 0: we get the time
let d = new Date();
let month = d.getMonth()+1;
let monthtext;
let hour = d.getHours();
let hourtext;
let minute = d.getMinutes();
let minutetext;
let second = d.getSeconds();
let secondtext;
if(month < 10) {monthtext = "0" + month.toString();} else {monthtext = month.toString();}
if(hour < 10) {hourtext = "0" + hour.toString();} else {hourtext = hour.toString();}
if(minute < 10) {minutetext = "0" + minute.toString();} else {minutetext = minute.toString();}
if(second < 10) {secondtext = "0" + second.toString();} else {secondtext = second.toString();}
let arg = d.getFullYear().toString().substring(2,4) + monthtext + d.getDate().toString() + "-" + hourtext + minutetext + secondtext
//step 1: create the channel
let emote = await db.fetch(`serverEmote_${message.guild.id}`);
if(emote === null)
{
  emote = "<:blobkiss:375218160225222656>";
  db.set(`serverEmote_${message.guild.id}`, emote);
}
//set permissions
message.guild.createChannel("🔏" + arg, {
                type: 'text',
                permissionOverwrites: [{
                  id: message.guild.defaultRole.id,
                  deny: ['VIEW_CHANNEL'],
                  allow: []
                },
                {
                    id: message.author.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'],
                },
                {
                    id: '431433473186856960',
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY' ],
                }
              ]
            });

//send message
await new Promise(resolve => setTimeout(resolve, 500));
client.channels.find(channel => channel.name === "🔏" + arg).send("Heyo !\n\nType anything you want to notify the staff about, don't be shy~\n\nOnce you're done you can send the message with ***$end***." + emote);
};
