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

if (!message.member.roles.cache.some(r => r.name === 'Database Perm'))
        return message.reply("This command is in testing. Using this will make changes to the database so please request Viktor to make changes for the time being!");

    if(!firstName)
        return message.reply('You are missing the first name of the person.')

    if(!secondName)
        return message.reply('You are missing the second name of the person.')          

    con.query(`DELETE FROM licenses WHERE name = '${firstName} ${secondName}'`, (err, result) => {
        if (err) throw err;
        if (result.affectedRows < 1) {
            message.channel.send(`No records found under **${firstName} ${secondName}**`)
        }
        else {
            message.channel.send(`Successfully deleted all records with the name **${firstName} ${secondName}**`)
        }
    });
};