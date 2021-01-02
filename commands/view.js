const Discord = require('discord.js')
const mysql = require('mysql')
const config = require('../config.json')
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Liamclyde*2001',
    database: 'Pegasus'
});

exports.run = (client, message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const firstName = args[1]
    const secondName = args[2]
    con.query(`SELECT * FROM licenses WHERE name = '${firstName} ${secondName}'`, (err, result) => {
        if(err) throw err;

 const string = JSON.stringify(result)
        message.channel.send(string)
    })
}