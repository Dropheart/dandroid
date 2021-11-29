const axios = require('axios')
const regex = /([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g

module.exports = (client, message) => {
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    // make array of args (args[x] = xth word after command) and get actual command
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.guild.id == '226576492782551042') {
        links = message.content.match(regex)
        if (links) {
            resp = await axios.get(`https://api.hyperphish.com/check-domain/${links[0].split('/')[0]}`)
            if (resp.data == 1) {
                message.delete()
                //client.channels.fetch('848929569377222746').then(
                //    client.channels.cache.get('848929569377222746').send(`<@${message.author.id}> just posted a scam link.`))        
                message.member.ban({ days: 1, reason: 'Autobanned for sending nitro/steam scam link.' })
            }
        }
    }

    const cmd = client.commands.get(command);
    if (!cmd) return;
    else cmd.run(client, message, args);
}