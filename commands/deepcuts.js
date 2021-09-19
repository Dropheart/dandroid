const { Command } = require('discord-akairo');

class deepcuts extends Command {
    constructor() {
        super('deepcuts', {
            aliases: ['deepcuts']
        });

    } exec(message) {
        return message.channel.send(`Deep Cuts were released in December 2020 and you're able to access them by typing the password \`anagram\` on website** imaginedragonsmusic.com.** Sadly, they haven't been released on any music platforms, so they're website only.
You can listen to some early EP songs *(All Eyes, Emma and Pantomime)*, one 2008 demo *(February)*, never released songs we've already heard *(All For You, Darkness, Destination, 30 Lives)*, covers *(Not Giving In, Lovesong, Stand By Me)*, an extended version of Dan's demo from 2019 *(Take My Heart Away)* and Lost Cause. You can download them here: https://drive.google.com/drive/folders/15UJ17pDagxj4_OA1nuCYk3Fb6zhhEZc7?usp=sharing 
Besides those songs, the epic, entirely new and unseen S+M documentary is available to see as well! <:woah_dan:396821492035354645>
        `);
    }
}

module.exports = deepcuts;