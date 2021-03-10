const { AkairoClient, CommandHandler } = require('discord-akairo');
const config = require("./config.json");

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: config.ownerids
        }, {
            disableMentions: 'everyone'
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: config.prefix
        });

        this.commandHandler.loadAll();
        console.log('Loaded all commands!')
    }
}

const client = new MyClient();
client.login(config.token);
client.once('ready', () => console.log(`Logged in as ${client.user.username}`))
require("./newsfeed/twitter.js")(client);
require("./newsfeed/reddit.js")(client);