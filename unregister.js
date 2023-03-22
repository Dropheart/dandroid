const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const rest = new REST({ version: '10' }).setToken(token);

// Place your client and guild ids here
const clientId = '818178566037831770';
const guildId = '226576492782551042';

// for guild-based commands
rest.delete(Routes.applicationGuildCommand(clientId, guildId, '897552853877530624'))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);