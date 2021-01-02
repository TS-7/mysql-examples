exports.run = (client, message, args) => {

let user = message.mentions.users.first();

if(!user) {
  return message.reply("Please tag a user!");
}

message.channel.send(`${user.toString()}, RP to find out this information!`)
};