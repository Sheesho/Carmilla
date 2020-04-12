var urlExists = require('url-exists');
const db = require('quick.db');

exports.run  = async (client, message, args, tools) =>
{
  //getting the URL of the emotes folder
  let emotes = await db.fetch(`EmoteURL_${client.user.id}`);
  //if for some reason the emote URL isn't linked we link it
	if(emotes === null)
	{
		emotes = "https://raw.githubusercontent.com/Sheesho/Carmilla/master/emotes/";
		db.set(`EmoteURL_${client.user.id}`, emotes);
    console.log("successfully linked emotes folder with database");
	}
  //checking if the emote exists
  var bool = false;
  var cont = args[0];
  urlExists(emotes+cont+".png", function(err, exists)
  {
    if(exists)
    {
      bool = true;
      //Promise
      var promise = new Promise(function(resolve, reject)
      {
        // do a thing, possibly async, then…
        resolve(message.channel.send("", {file: emotes + cont + ".png"}).catch(
        function()
        {
          console.log("promesse rompue");
        }));
      });
      //End of promise
    }
  });
  urlExists(emotes+cont+".gif", function(err, exists)
  {
    if(exists)
    {
      bool = true;
      //Promise
      var promise = new Promise(function(resolve, reject)
      {
        // do a thing, possibly async, then…
        resolve(message.channel.send("", {file: emotes + cont + ".gif"}).catch(
        function()
        {
          console.log("promesse rompue");
        }));
      });
      //End of promise
    }
  });
};
