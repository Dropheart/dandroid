const { Command } = require('discord-akairo');

class alexa extends Command {
    constructor() {
        super('alexa', {
            aliases: ['alexa']
        });

    } exec(message) {
        return message.channel.send(`https://cdn.discordapp.com/attachments/816240723464159253/818212482740781087/image0.jpg`);
    }
}

module.exports = alexa;