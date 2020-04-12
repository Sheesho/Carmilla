exports.run  = async (client, message, args, tools) =>
{

  const helpembed = new Discord.RichEmbed()
  .setTitle("Carmilla (cutest discord bot <:blobkiss:375218160225222656>) guide")
  .setDescription("Well, looks like someone needs some pointers on how to interact with the cute little m... I-I mean on how to interact with the wonderful lady that Carmilla is~ <:blobpeek:375218261660401664>\nHere is a short description of all the sentences a proper person should use to address a lady:")
  .setColor("#1ce6af")
  .setFooter("Carmilla bot is property of Shisho#7817, no bully please ⎛　　　　´●　　ω　●`　 ⎞")
  .addField("!hello", "If you're ever feeling lonely because nobody is saying hi to you you can count on me ! <:blobkiss:375218160225222656>")
  .addField("!say", "If you want to make me say silly things, you can use this~ <:blobkiss:375218160225222656>")
  .addField("!role", "If you want to add a cool role to the list of those you already have or remove one because it's not good enough for you just use this followed by that specific role. Beware, it is case sen-si-ti-ve~ <:blobkiss:375218160225222656>")
  .addField("!emote", "If you want to use nice emotes because being restricted to just 50 is no fun <:blobtear:375218561628766210>. Just pick an emote from the extensive [emote list](https://docs.google.com/spreadsheets/d/1VtGPAa2QJU5IUZdEdJpj4eQVoz4aMSS9yNqCCTsWpEI/edit?usp=sharing), similarily to the previous command this one is case sen-si-ti-ve~ <:blobkiss:375218160225222656>\n\n\n\nI hope this has been helpful to you and that you're gonna have a lot of fun playing with me from now on<:blobpeek:375218261660401664>\n\nOh, I almost forgot that I shouldn't speak about the secret commands & interactions, what a klutz I am teehee~");
  message.channel.send({ embed: helpembed });
};
