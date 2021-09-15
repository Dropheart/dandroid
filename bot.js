const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const config = require("./config.json");

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: config.ownerids
        }, {
            disableMentions: 'everyone',
            ws: {intents: 4611}

        });

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: config.prefix
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './listeners'
        });

        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
        this.commandHandler.loadAll();
        console.log('Loaded all commands!')
    }
}

const client = new MyClient();
client.login(config.token);
client.once('ready', () => console.log(`Logged in as ${client.user.username}`))
require("./newsfeed/twitter.js")(client);
require("./newsfeed/reddit.js")(client);
require("./songvssong/songvssong.js")(client);