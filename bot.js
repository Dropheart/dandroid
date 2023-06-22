// basic imports n things
const { Client, IntentsBitField } = require("discord.js")

const botIntents = new IntentsBitField();
botIntents.add(IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.DirectMessages);

const client = new Client({ intents: botIntents })
const config = require("./config.json")
const fs = require('node:fs');
const path = require('node:path');

// makes things easier for us
client.config = config

// bind all events in the events folder to the client
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(config.token);
client.once('ready', () => console.log(`Logged in as ${client.user.username}`))
// require("./newsfeed/twitter.js")(client);
require("./newsfeed/reddit.js")(client);
require("./songvssong.js")(client);