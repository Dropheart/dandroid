// basic imports n things
const Discord = require("discord.js")
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES] })
const config = require("./config.json")
const fs = require("fs")

// makes things easier for us
client.config = config

// bind all events in the events folder to the client
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err)
    files.forEach((file) => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client))
    })
})

// make a key/value map of command name/command file, to be used in the message event
client.commands = new Map();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let command = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, command);
        
    })
})

client.login(config.token);
client.once('ready', () => console.log(`Logged in as ${client.user.username}`))
require("./newsfeed/twitter.js")(client);
require("./newsfeed/reddit.js")(client);
require("./songvssong.js")(client);