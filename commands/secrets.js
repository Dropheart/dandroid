const { Command } = require('discord-akairo');

class secrets extends Command {
    constructor() {
        super('secrets', {
            aliases: ['secrets']
        });

    } exec(message) {
        return message.channel.send(`In late February, a form was emailed to people asking for name, address, and social handle. In early March, fans have been receiving packages (presumably sent to select addresses entered) in the mail from the band containing a projector, SD card, and photograph. The SD cards contain videos titled "Secret_[number].mp4. 
These secret videos have since been posted to the social media accounts of Imagine Dragons and are presumably leading towards the release of a new album. They contain a lot of hidden words and symbolism. The videos on Social Media got additional timestamps.`);
    }
}

module.exports = secrets;