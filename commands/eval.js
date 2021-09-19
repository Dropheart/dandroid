const { codeBlock } = require('@discordjs/builders')

exports.run = async (client, message, args) => {
    if (!client.config.ownerids.includes(message.author.id)) return;
    code = args.join(" ");
    try {
        output = codeBlock('js', await eval(code));
        message.channel.send(output)
    } catch(err) {
        message.channel.send(`\`\`\`${err.message}\`\`\``);
    }
}