const { Command } = require('discord-akairo');

class timestamps extends Command {
    constructor() {
        super('timestamps', {
            aliases: ['timestamps']
        });

    } exec(message) {
        return message.channel.send(`The secret videos posted on social media have a difference to the videos send to people: they contain a timestamp at the bottom right corner.
It is not a regular timestamp for hh:mm:ss, but rather standing for yy:yy:mm:dd. When stopping at all videos corresponding the date of album release dates, certains words can be seen.
For more information, please look at the pins!`);
    }
}

module.exports = timestamps;