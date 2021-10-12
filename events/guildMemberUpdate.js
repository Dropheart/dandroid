module.exports = async (client, oldMember, newMember) => {
    if (oldMember.pending && !newMember.pending) {
        welcomeChannel = await client.channels.fetch(config.welcomeChannel);
        welcomeChannel.send(`Welcome <@${newMember.id}> to the Imagine Dragons server! Feel free to introduce yourself to others, you can tell them things like your favourite song, how you found ID, and/or a little about yourself. If you want roles to represent your favourite album, pronouns, or get notified for events, type "/roles" for the role selection. We hope you enjoy your stay here!`)
    }
}