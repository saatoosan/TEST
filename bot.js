const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("673988977287757847")
setInterval(function() {
channel.send(`السلام عليكم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);