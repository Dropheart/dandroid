module.exports = async (client, oldMember, newMember) => {
    if (newMember.guild.id == "226576492782551042") {
        if (oldMember.pending && !newMember.pending) {
            welcomeChannel = await client.channels.fetch(config.welcomeChannel);
            welcomeChannel.send("**Welcome ${newMember.toString()} to the Imagine Dragons server!**\nFeel free to introduce yourself to others, you can tell them things like your favourite song, how you found ID, and/or a little about yourself.\nIf you want roles to represent your favourite album, pronouns, or get notified for events, type ``/roles`` for the **role selection**.\nWe hope you enjoy your stay here!")
        }
    }
}