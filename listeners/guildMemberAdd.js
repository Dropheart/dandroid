const { Listener, AkairoModule } = require('discord-akairo')

class guildMemberAddListener extends Listener {
    constructor () {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }
    
    exec(member) {
        if (member.user.username.toLowerCase().includes('h0nde')) member.ban({ days: 7, reason: 'Automatic ban for h0nde spambot accounts.' })
    }
}

module.exports = guildMemberAddListener;