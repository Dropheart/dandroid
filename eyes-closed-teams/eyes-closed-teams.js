module.exports = async (client) => {

    const { EmbedBuilder } = require('discord.js');
    const CronJob = require('cron').CronJob;
    const fetch = require("node-fetch");
    config = require('../config.json');

    let scheduledMessage = new CronJob('0 * * * *', function() {

        fetch('https://enter.imaginedragonsmusic.com/imaginedragonshub/api/teams')
            .then(response => {
              if (!response.ok) {
                throw new Error('Bad :(');
              }
              return response.json();
            })
            .then(data => {
                console.log("Got teams results: " + JSON.stringify(data));

                var teams = data.teams

                // sort in descending order
                teams.sort(function(a, b){
                    return b.points - a.points;
                });

                console.log("Ordered teams results: " + JSON.stringify(teams));

                embed = new EmbedBuilder()
                .setTitle('Teams Leaderboard')
                .setColor('ff4500')
                .setTimestamp()
                .setDescription('Checkout the latest leaderboard!')
                .addFields(
                    {name: '1️⃣ - ' + teams[0]['name'], value: teams[0]['points'], inline: true},
                    {name: '2️⃣ - ' + teams[1]['name'], value: teams[1]['points'], inline: true},
                    {name: '3️⃣ - ' + teams[2]['name'], value: teams[2]['points'], inline: true},
                );

                client.channels.cache.get(config.eyesclosed-teams).send({ embeds: [embed] });

            })
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });

            }, null, true, 'Europe/Berlin');

    scheduledMessage.start();
}