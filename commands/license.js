const Discord = require('discord.js');
const mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Liamclyde*2001',
    database: 'Pegasus'
});

    function id() {
            return new Date().getTime().toString() + Math.floor(Math.random()*1);
    }

exports.run = (client, message) => {
const databasePerm = message.member.roles.cache.get('762358380706398228');
const config = require("../config.json");
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const firstName = args[1]
const secondName = args[2]
const phoneNumber = args[3]
const tier = args[4]

if (!message.member.roles.cache.has(databasePerm.id))
    return message.reply("You might not have permissions to use this command since it is in beta version. Please ask the concerned people to make changes to the database");

    if(!firstName)
        return message.reply('You are missing the first name of the person.')

        if(!secondName)
        return message.reply('You are missing the second name of the person.')

        if(!phoneNumber)
        return message.reply('You are missing the phone number of the person.')

        if(!tier)
        return message.reply('You are missing the tier for the person.')

   con.query(`INSERT INTO licenses (license, name, phone, tier) VALUES ('${id()}','${firstName} ${secondName}', '${phoneNumber}', '${tier}')`, (err) =>{
       if (err){message.reply('Database failed to read this information. Please re-check syntax')}
        if(err) throw err;
   })
        const successEmbed = new Discord.MessageEmbed()
            .setColor('#000FFF')
            .setAuthor('License Successfully Logged With The Below Details')
            .setDescription(`Name: ${firstName} ${secondName}\nPhone Number: ${phoneNumber}\nTier: ${tier}`)
            .setFooter('Please verify information. Any wrong details must be deleted and re-filled')
        message.channel.send(successEmbed)    
};