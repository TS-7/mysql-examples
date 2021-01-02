const Discord = require('discord.js')

exports.run = (client, message, args) => {

    const channel = client.channels.cache.get('760543876929945610');
    const superMods = ['460078206326800434'];
  
    if (!message.member.roles.cache.some(r =>["Admin", "Moderator", "Community Manager", "Server Director"].includes(r.name)) && !superMods.includes(message.member.id) )
      return message.reply("You are not authorised to use this command you poo poo head");

    if (message.mentions.members.size === 0)
      return message.reply("What am I supposed to kick? Your ass ?");
  
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply("I do not have permissions to kick anyone:frowning:");
  
    const kickMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
  
    kickMember.kick(reason).then(member => {
      message.reply(`${member.user.username} got his ass kicked. ***Reason*** : *${reason}*`);

      const Log = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setAuthor(`${member.user.username} was kicked from the server by ${message.author.username}.`)
        .setDescription(`**Reason :** ${reason}`)

        channel.send(Log)
    });
};