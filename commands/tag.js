const { Command, AkairoModule } = require('discord-akairo');

class tag extends Command {
    constructor() {
        super('tag', {
            aliases: ['tag']
        });

    } exec(message) {
        return message.channel.send(`test`);
    }
}

module.exports = tag;