const { Command } = require('discord-akairo');

class arg extends Command {
    constructor() {
        super('arg', {
            aliases: ['arg']
        });

    } exec(message) {
        return message.channel.send(`ARG is the abbreviation for Augmented Reality Game. In various band / music related ARGs, players are often faced with a objective based on new music releases and to reveal when it is going to be released.
In the game, clues are hidden in various forms of media and on different platforms and need to be combined in order to solve the riddles and objectives.`);
    }
}

module.exports = arg;