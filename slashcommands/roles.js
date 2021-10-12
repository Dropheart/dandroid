const { SlashCommandBuilder } = require('@discordjs/builders')

const data = new SlashCommandBuilder()
    .setName('roles')
    .setDescription('Give yourself an album, event, or pronoun role!')

exports.data = data