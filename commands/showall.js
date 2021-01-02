const Discord = require('discord.js')
const mysql = require('mysql')
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Liamclyde*2001',
    database: 'Pegasus'
});

exports.run = (client, message) => {

    con.query(`SELECT * FROM licenses`, (err, result, fields) => {
        if (err) throw err;
const string = JSON.stringify(result)
        message.channel.send(string)
    })
}