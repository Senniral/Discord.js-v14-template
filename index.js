
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
}); //all intents you might require.

client.once('ready', c => {
	console.log(`Bot is ready, logged in as: ${c.user.tag}`);
});

client.login(token);
