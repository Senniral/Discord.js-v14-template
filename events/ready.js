module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`bot is ready, logged in as: ${client.user.tag}`);
	},
};
