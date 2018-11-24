const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

***!~[*** **Quietnees Server** | **حياككء الله بالسيرفر اتمني ينال اعجابك** ***]~!***

                               :arrow_down_small:!~[ Link | الرابط ]~!:arrow_down_small: 
                              https://discord.gg/UhnYypM

                              **Username** :  ${member}
`) 
}).catch(console.error)
})









client.login(process.env.BOT_TOKEN);
