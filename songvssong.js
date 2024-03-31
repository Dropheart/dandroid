module.exports = async (client) => {
  const { EmbedBuilder } = require("discord.js");
  const CronJob = require("cron").CronJob;
  config = require("./config.json");
  const songs = [
    ["I'm So Soonry", "https://www.youtube.com/watch?v=0HgJwrwEEKQ"],
    ["Soon Out", "https://www.youtube.com/watch?v=x0ZxutzmFUU"],
    ["It's Soon", "https://www.youtube.com/watch?v=sENM2wA_FTg"],
    ["Soonts", "https://www.youtube.com/watch?v=PscXGpsF3dY"],
    ["Soonerang", "https://www.youtube.com/watch?v=Ycemuc7Fk_U"],
    ["Soonely", "https://www.youtube.com/watch?v=yUbTU1ojKho"],
    ["Soonaroid", "https://www.youtube.com/watch?v=z6l5bhPs-PU"],
    ["I Soon Know Why", "https://www.youtube.com/watch?v=TGXlWQQthFg"],
    ["Soon To Me", "https://www.youtube.com/watch?v=Txlk7PiHaGk"],
    ["No Time for Toxic Soons", "https://www.youtube.com/watch?v=wJt2qKPZpsk"],
    [
      "They Don't Know Soon Like I Do",
      "https://www.youtube.com/watch?v=XedldcMKJO0",
    ],
    [
      "Born To Be Soon (with Kygo)",
      "https://www.youtube.com/watch?v=mOFvJVroAJE",
    ],
    ["I'll Make It Soon To You", "https://www.youtube.com/watch?v=q6KvD4kZv94"],
    ["Dancing In The Soon", "https://www.youtube.com/watch?v=WFlSIPdYBpE"],
    ["Soon And Soon", "https://www.youtube.com/watch?v=op5Nzr-17Lk"],
    ["Working Soon", "https://www.youtube.com/watch?v=zkcZFEMfW48"],
    ["Bleeding Soon", "https://www.youtube.com/watch?v=kcMU_iT9aDM"],
    [
      "Children of the Soon (a Starfield song)",
      "https://www.youtube.com/watch?v=zHfIkyLh-Ew",
    ],
  ];

  function randomiser() {
    return Math.floor(Math.random() * songs.length);
  }

  let scheduledMessage = new CronJob(
    "00 00 10,16,22,04 * * *",
    function () {
      var song1 = randomiser();
      var song2 = randomiser();

      while (song1 === song2) {
        song2 = randomiser();
      }

      console.log(
        "New Song vs. Song Matchup created: " +
          songs[song1][0] +
          " vs. " +
          songs[song2][0]
      );

      embed = new EmbedBuilder()
        .setTitle(songs[song1][0] + " vs. " + songs[song2][0])
        .setColor("ff4500")
        .setTimestamp()
        .setDescription(
          "Vote for your favorite SOONg by reacting with 1️⃣ or 2️⃣!"
        )
        .setFooter({ text: "Made with ❤️ by Razora" })
        .addFields(
          {
            name: "1️⃣ - " + songs[song1][0],
            value: "[YouTube](" + songs[song1][1] + ")",
            inline: true,
          },
          {
            name: "2️⃣ - " + songs[song2][0],
            value: "[YouTube](" + songs[song2][1] + ")",
            inline: true,
          }
        );

      client.channels.cache
        .get(config.songvssongChannel)
        .send({ embeds: [embed] })
        .then((embed) => {
          embed.react("1️⃣");
          embed.react("2️⃣");
          embed.startThread({
            name: `${songs[song1][0]} vs ${songs[song2][0]} Discussion`,
            autoArchiveDuration: 1440,
            reason: "New daily discussion, big pogs.",
          });
        });
    },
    null,
    true,
    "Europe/Berlin"
  );

  scheduledMessage.start();
};
