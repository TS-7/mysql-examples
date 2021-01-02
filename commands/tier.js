const Discord = require('discord.js');
const mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Liamclyde*2001',
    database: 'Pegasus'
});

exports.run = (client, message) => {
const config = require("../config.json");
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const firstName = args[1]
const secondName = args[2]
const upTier = args[3]
const done = new Discord.MessageEmbed()
.setColor('#00FFF')
.setAuthor(`Update Successful!`)
.setDescription(`Name: **${firstName} ${secondName}**\nTier: ${upTier}`)

if (!message.member.roles.cache.some(r => r.name === 'Database Perm'))
        return message.reply("No can do pal");

if (!firstName)
    return message.reply('You did not specify a first name.')

if (!secondName)
    return message.reply('You did not specify a second name.')

if (!upTier)
    return message.reply('You did not specify a tier.')

con.query(`UPDATE licenses SET tier = '${upTier}' WHERE name = '${firstName} ${secondName}'`, (err, result) => {
    if (err) throw err;
    if (result.affectedRows < 1) {
        message.channel.send(`No records found under **${firstName} ${secondName}**`)
    }
    else {
        message.channel.send(done)
    }
});
};