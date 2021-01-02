exports.run = (client, message, args) => {
    if(!args || args.length < 1) return message.reply("What am I supposed to reload ? My weapon ?");
    const commandName = args[0];

    if(!client.commands.has(commandName)) {
      return message.reply("That command is nadda on this bot!");
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];

    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded`);
  };