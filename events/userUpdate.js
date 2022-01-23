const { MessageEmbed } = require('discord.js');

module.exports = async (client, oldUser, newUser) => {
    logChannel = await client.channels.fetch("226594976975421441"); // #server-log

    if (oldUser.username !== newUser.username) {
        usernameembed = new MessageEmbed()
                .setColor('ffb347')
                .setTimestamp()
                .setThumbnail(newUser.displayAvatarURL())
                .setDescription(`:pencil: **NICKNAME CHANGE** for <@${newUser.id}>, \`\`${newUser.id}\`\`:\n${oldUser.username} to **${newUser.username}**`);
                logChannel.send({ embeds: [usernameembed] });
    }

    if (oldUser.discriminator !== newUser.discriminator) {
        discriminatorembed = new MessageEmbed()
                .setColor('ffb347')
                .setTimestamp()
                .setThumbnail(newUser.displayAvatarURL())
                .setDescription(`:pencil: **DISCRIMINATOR CHANGE** for <@${newUser.id}>, \`\`${newUser.id}\`\`:\n${oldUser.username}#${oldUser.discriminator} to **${newUser.username}#${newUser.discriminator}**`);
                logChannel.send({ embeds: [discriminatorembed] });
    }
}