const { Command } = require('discord-akairo');

class pins extends Command {
    constructor() {
        super('pins', {
            aliases: ['pins']
        });

    } exec(message) {
        return message.channel.send(`Pinned messages in the channel can be found: 
1) on Desktop at the top bar next to the search bar with the pin symbol,
2) on Mobile by tapping the member icon on the top right or sliding right and then selecting Pins.`);
    }
}

module.exports = pins;