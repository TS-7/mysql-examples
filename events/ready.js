module.exports = async(client) => {
    const mysql = require('mysql')
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Liamclyde*2001',
        database: 'Pegasus'
    });
    console.log(`Ready to RP to Findout!`)
    client.channels.cache.get('765193903586148402').send(`The bot has been started on the console!`)

    client.user.setPresence({
        activity: {
            name: 'Crypticc',
            type: "LISTENING",
        },
        status: 'idle'
    })
    con.connect(function(err) {
        if (err) throw err;
        client.channels.cache.get('765193903586148402').send("Connected to database **'Pegasus'**!")
    
    });
     }