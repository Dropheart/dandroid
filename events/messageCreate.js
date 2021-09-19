module.exports = (client, message) => {
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    // make array of args (args[x] = xth word after command) and get actual command
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;
    else cmd.run(client, message, args);
}