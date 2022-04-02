const { MessageActionRow, MessageSelectMenu, MessageButton, Message } = require("discord.js")

async function giverole(interaction, role, rolename) {
    memberroles = await interaction.member.roles
    if (memberroles.cache.get(role)) {
        await memberroles.remove([role], 'Requested via reaction role.')
        try {
            await interaction.reply({ content: `Removed the role \`${rolename}\`.`, ephemeral: true})
        } catch (err) {
            await interaction.followUp({ content: `Removed the role \`${rolename}\`.`, ephemeral: true})
        }
    } else {
        await memberroles.add([role], 'Requested via reaction role.')
        try {
            await interaction.reply({ content: `You have been given the role \`${rolename}\`.`, ephemeral: true})
        } catch (err) {
            await interaction.followUp({ content: `You have been given the role \`${rolename}\`.`, ephemeral: true})
        }
    }
}

const main = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('category')
            .setPlaceholder('Choose a category.')
            .addOptions([
                {
                    label: 'Vanity roles',
                    description: 'Album and single roles, to rep your love.',
                    value: 'first_option',
                },
                {
                    label: 'Event roles',
                    description: 'Get notified for new events like Survivor rounds.',
                    value: 'second_option',
                },
                {
                    label: 'Pronoun roles',
                    description: 'Let everyone know your pronouns.',
                    value: 'third_option',
                },
                {
                    label: 'Language roles',
                    description: 'Get access to our language channels!',
                    value: 'forth_option',
                }
            ])
    )

const back = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('back')
            .setLabel('Return to categories')
            .setStyle('SUCCESS')
    )


module.exports = async (client, interaction) => {

    if (interaction.commandName == 'roles') {
            await interaction.reply({ content: 'Choose a category.', components: [main], ephemeral: true })
    }

    if (interaction.isSelectMenu() && interaction.customId == 'category') {
        if (interaction.values[0] == 'first_option') {
            const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('raggedinsomnia')
                    .setLabel('Imagine Dragons')
                    .setStyle('SECONDARY')
                    .setEmoji('🟦'),
                new MessageButton()
                    .setCustomId('bones')
                    .setLabel('Bones')
                    .setStyle('SECONDARY')
                    .setEmoji('959743140061933598'),
                new MessageButton()
                    .setCustomId('enemy')
                    .setLabel('Enemy')
                    .setStyle('SECONDARY')
                    .setEmoji('959768242224762880'),
                new MessageButton()
                    .setCustomId('mercury')
                    .setLabel('Mercury')
                    .setStyle('SECONDARY')
                    .setEmoji('959743140955320361'),
                new MessageButton()
                    .setCustomId('followyou')
                    .setLabel('Follow You')
                    .setStyle('SECONDARY')
                    .setEmoji('959761175615254598')
            )
            const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('cutthroat')
                    .setLabel('Cutthroat')
                    .setStyle('SECONDARY')
                    .setEmoji('959761175669772288'),
                new MessageButton()
                    .setCustomId('origins')
                    .setLabel('Origins')
                    .setStyle('SECONDARY')
                    .setEmoji('959761175351029761'),
                new MessageButton()
                    .setCustomId('natural')
                    .setLabel('Natural')
                    .setStyle('SECONDARY')
                    .setEmoji('959761797387272263'),
                new MessageButton()
                    .setCustomId('btby')
                    .setLabel('Born To Be Yours')
                    .setStyle('SECONDARY')
                    .setEmoji('959761176202452992'),
                new MessageButton()
                    .setCustomId('ntm')
                    .setLabel('Next To Me')
                    .setStyle('SECONDARY')
                    .setEmoji('959761983572430858')
            )
            const row3 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('evolve')
                    .setLabel('Evolve')
                    .setStyle('SECONDARY')
                    .setEmoji('959761175686578176'),
                new MessageButton()
                    .setCustomId('roots')
                    .setLabel('Roots')
                    .setStyle('SECONDARY')
                    .setEmoji('959762205463683093'),
                new MessageButton()
                    .setCustomId('smokeplusmirrors')
                    .setLabel('Smoke + Mirrors')
                    .setStyle('SECONDARY')
                    .setEmoji('959761329420402688'),
                new MessageButton()
                    .setCustomId('nightvisions')
                    .setLabel('Night Visions')
                    .setStyle('SECONDARY')
                    .setEmoji('959762371834953778'),
                new MessageButton()
                    .setCustomId('continuedsilence')
                    .setLabel('Continued Silence EP')
                    .setStyle('SECONDARY')
                    .setEmoji('959762501044690944')
            )
            const row4 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('itstime')
                    .setLabel('It\'s Time EP')
                    .setStyle('SECONDARY')
                    .setEmoji('959762676085588059'),
                new MessageButton()
                    .setCustomId('hellandsilence')
                    .setLabel('Hell and Silence EP')
                    .setStyle('SECONDARY')
                    .setEmoji('959762676496617532'),
                new MessageButton()
                    .setCustomId('imaginedragons')
                    .setLabel('Imagine Dragons EP')
                    .setStyle('SECONDARY')
                    .setEmoji('959762675146051595'),
                new MessageButton()
                    .setCustomId('speaktome')
                    .setLabel('Speak To Me EP')
                    .setStyle('SECONDARY')
                    .setEmoji('959762676102344754')
            )
            await interaction.update({ content: 'Select your roles.', components: [row1, row2, row3, row4, back], ephemeral: true })
        }
        else if (interaction.values[0] == 'second_option') {
            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('listeningparty')
                    .setLabel('Listening Party')
                    .setStyle('SECONDARY')
                    .setEmoji('🎧'),
                new MessageButton()
                    .setCustomId('survivor')
                    .setLabel('Survivor')
                    .setStyle('SECONDARY')
                    .setEmoji('🟦'),
                new MessageButton()
                    .setCustomId('servernews')
                    .setLabel('Server News')
                    .setStyle('SECONDARY')
                    .setEmoji('📰'),
                new MessageButton()
                    .setCustomId('bandnews')
                    .setLabel('Band News')
                    .setStyle('SECONDARY')
                    .setEmoji('🗞️')
            )
            await interaction.update({ content: 'Select your roles.', components: [row, back], ephemeral: true })
        }
        else if (interaction.values[0] == 'third_option') {
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('sheher')
                    .setLabel('She/Her')
                    .setStyle('SECONDARY')
                    .setEmoji('🧡'),
                new MessageButton()
                    .setCustomId('theythem')
                    .setLabel('They/Them')
                    .setStyle('SECONDARY')
                    .setEmoji('💚'),
                new MessageButton()
                    .setCustomId('hehim')
                    .setLabel('He/Him')
                    .setStyle('SECONDARY')
                    .setEmoji('💛'),
                new MessageButton()
                    .setCustomId('any')
                    .setLabel('Any')
                    .setStyle('SECONDARY')
                    .setEmoji('💙'),
                new MessageButton()
                    .setCustomId('ask')
                    .setLabel('Ask Me')
                    .setStyle('SECONDARY')
                    .setEmoji('💜')
                )
            await interaction.update({ content: 'Select your roles.', components: [row, back], ephemeral: true })
        }    
        else if (interaction.values[0] == 'forth_option') {
            const row1 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('portuguese')
                    .setLabel('Portuguese / Português')
                    .setStyle('SECONDARY')
                    .setEmoji('🇧🇷'),
                new MessageButton()
                    .setCustomId('spanish')
                    .setLabel('Spanish / Español')
                    .setStyle('SECONDARY')
                    .setEmoji('🇪🇸'),
                new MessageButton()
                    .setCustomId('dutch')
                    .setLabel('Dutch / Nederlands')
                    .setStyle('SECONDARY')
                    .setEmoji('🇳🇱'),
                new MessageButton()
                    .setCustomId('french')
                    .setLabel('French / Français')
                    .setStyle('SECONDARY')
                    .setEmoji('🇫🇷')
                )

                const row2 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('polish')
                    .setLabel('Polish / Polskie')
                    .setStyle('SECONDARY')
                    .setEmoji('🇵🇱'),
                new MessageButton()
                    .setCustomId('german')
                    .setLabel('German / Deutsch')
                    .setStyle('SECONDARY')
                    .setEmoji('🇩🇪'),
                new MessageButton()
                    .setCustomId('italian')
                    .setLabel('Italian / Italiano')
                    .setStyle('SECONDARY')
                    .setEmoji('🇮🇹'),
                new MessageButton()
                    .setCustomId('persian')
                    .setLabel('Persian / فارسی')
                    .setStyle('SECONDARY')
                    .setEmoji('🇮🇷')
                )
            await interaction.update({ content: 'Select your roles.', components: [row1, row2, back], ephemeral: true })
        }    
    }

    if (interaction.isButton()) {
        switch (interaction.customId) {
            case 'raggedinsomnia': 
                giverole(interaction, '959200581128429638', 'Imagine Dragons by Ragged Insomnia')
                break
            case 'bones': 
                giverole(interaction, '951779255044440165', 'Bones')
                break
            case 'enemy': 
                giverole(interaction, '959767458212896779', 'Enemy')
                break
            case 'mercury': 
                giverole(interaction, '859849506211364885', 'Mercury')
                break
            case 'followyou': 
                giverole(interaction, '819336861025566720', 'Follow You')
                break;
            case 'cutthroat': 
                giverole(interaction, '819336527578136627', 'Cutthroat')
                break;
            case 'origins': 
                giverole(interaction, '499606232848662536', 'Origins')
                break;
            case 'natural': 
                giverole(interaction, '487435751177322496', 'Natural')
                break;
            case 'btby': 
                giverole(interaction, '487435693681803265', 'Born To Be Yours')
                break;
            case 'ntm': 
                giverole(interaction, '487435905557069835', 'Next To Me')
                break;
            case 'evolve': 
                giverole(interaction, '321324696383651851', 'Evolve')
                break;
            case 'roots': 
                giverole(interaction, '487435981511983105', 'Roots')
                break;
            case 'smokeplusmirrors': 
                giverole(interaction, '304072597593653259', 'Smoke + Mirrors')
                break;
            case 'nightvisions': 
                giverole(interaction, '304072324993515530', 'Night Visions')
                break;
            case 'continuedsilence': 
                giverole(interaction, '304434386336612363', 'Continued Silence EP')
                break;
            case 'itstime': 
                giverole(interaction, '304433326423539714', 'It\'s Time EP')
                break;
            case 'hellandsilence': 
                giverole(interaction, '304433096768618496', 'Hell and Silence EP')
                break;
            case 'imaginedragons': 
                giverole(interaction, '304456311150477322', 'Imagine Dragons EP')
                break;
            case 'speaktome': 
                giverole(interaction, '699991484476162049', 'Speak To Me EP')
                break;
            case 'listeningparty': 
                giverole(interaction, '756204000520437821', 'Listening Party')
                break;
            case 'survivor': 
                giverole(interaction, '727943677443440640', 'Survivor')
                break;
            case 'sheher': 
                giverole(interaction, '867073252034347058', 'She/Her')
                break;
            case 'theythem': 
                giverole(interaction, '867073290731388948', 'They/Them')
                break;
            case 'hehim': 
                giverole(interaction, '867073126780239932', 'He/Him')
                break;
            case 'any': 
                giverole(interaction, '867073357316489306', 'Any pronouns')
                break;
            case 'ask': 
                giverole(interaction, '867073397225554011', 'Ask Me')
                break;
            case 'servernews': 
                giverole(interaction, '929098859190313043', 'Server News')
                break;
            case 'bandnews': 
                giverole(interaction, '929099005663801425', 'Band News')
                break;
            case 'portuguese': 
                giverole(interaction, '931253056962723930', 'Portuguese')
                break;
            case 'spanish': 
                giverole(interaction, '931253407845597206', 'Spanish')
                break;
            case 'dutch': 
                giverole(interaction, '931253527504883763', 'Dutch')
                break;
            case 'french': 
                giverole(interaction, '931253595473592411', 'French')
                break;   
            case 'polish': 
                giverole(interaction, '940313515212828724', 'Polish')
                break;      
            case 'german': 
                giverole(interaction, '940313648751083540', 'German')
                break; 
            case 'italian': 
                giverole(interaction, '940313717214707764', 'Italian')
                break; 
            case 'persian': 
                giverole(interaction, '940314148770816102', 'Persian')
                break; 
            case 'back': 
                await interaction.update({ content: 'Choose a category.', components: [main], ephemeral: true })
                break;

        }

    }

}