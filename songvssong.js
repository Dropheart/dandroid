module.exports = async (client) => {
  const { EmbedBuilder } = require("discord.js");
  const CronJob = require("cron").CronJob;
  config = require("./config.json");
  const songs = [
    ["Speak To Me", "https://www.youtube.com/watch?v=L9vLuHQXP78"],
    ["Volume Drops", "https://www.youtube.com/watch?v=B8KHxtDNr6A"],
    ["Boots", "https://www.youtube.com/watch?v=MCLwkBnFiCE"],
    ["Pistol Whip", "https://www.youtube.com/watch?v=d4fsZvJVILU"],
    ["Off To War", "https://www.youtube.com/watch?v=64L6a-aQs8c"],
    ["The Pit", "https://www.youtube.com/watch?v=bAtu0Q9vbY0"],
    ["Living Musical", "https://www.youtube.com/watch?v=fs1RtYFZD08"],
    ["Bottle Of Coke", "https://www.youtube.com/watch?v=jYaSRUSQBao"],
    ["Clouds (2008 Version)", "https://www.youtube.com/watch?v=5zHo8DC-tNQ"],
    ["Curtain Call", "https://www.youtube.com/watch?v=YSECDPratL0"],
    ["February", "https://www.youtube.com/watch?v=GrKGhdgNxNw"],
    ["Unseen", "https://www.youtube.com/watch?v=arNW180bGUE"],
    ["I Need A Minute", "https://www.youtube.com/watch?v=OYGLDvi5UdQ"],
    ["Uptight", "https://www.youtube.com/watch?v=rPUiAAHfsTs"],
    ["Cover Up", "https://www.youtube.com/watch?v=VcJ8BTjk8fM"],
    ["Curse", "https://www.youtube.com/watch?v=wikCVdrhsJc"],
    ["Drive", "https://www.youtube.com/watch?v=h1SnQBUqjFU"],
    ["All Eyes", "https://www.youtube.com/watch?v=dHQXDcVJ_Q4"],
    ["I Don't Mind", "https://www.youtube.com/watch?v=SIJsIaAOPQY"],
    ["Hear Me", "https://www.youtube.com/watch?v=yg8lwoGx_mM"],
    ["Selene", "https://www.youtube.com/watch?v=vn887iVsvVc"],
    ["Emma", "https://www.youtube.com/watch?v=Asxu8n9HGuI"],
    ["Destination", "https://www.youtube.com/watch?v=J564MSyR-dU"],
    ["Pantomime", "https://www.youtube.com/watch?v=5icCzd506Lk"],
    ["Clouds (2010 Version)", "https://www.youtube.com/watch?v=xqkKNR__EyY"],
    ["Darkness", "https://www.youtube.com/watch?v=F9VDzuYbl64"],
    ["It's Time", "https://www.youtube.com/watch?v=sENM2wA_FTg"],
    ["Amsterdam", "https://www.youtube.com/watch?v=s6Nc4qEI3k4"],
    ["Tokyo", "https://www.youtube.com/watch?v=gFs3GAMmWtE"],
    ["The River", "https://www.youtube.com/watch?v=OxxNSG1GM7M"],
    ["Look How Far We've Come", "https://www.youtube.com/watch?v=HD5biGaQpsU"],
    ["Leave Me", "https://www.youtube.com/watch?v=ogsxHQEorIc"],
    ["30 Lives", "https://www.youtube.com/watch?v=LwfbrD9pKME"],
    ["Radioactive", "https://www.youtube.com/watch?v=ktvTqknDobU"],
    ["Tiptoe", "https://www.youtube.com/watch?v=tvewCDvWMIY"],
    ["Demons", "https://www.youtube.com/watch?v=mWRsgZuwf_8"],
    ["On Top of the World", "https://www.youtube.com/watch?v=w5tWYmIOWGk"],
    ["Every Night", "https://www.youtube.com/watch?v=nHJcQBYF_SQ"],
    ["Bleeding Out", "https://www.youtube.com/watch?v=kcMU_iT9aDM"],
    ["Underdog", "https://www.youtube.com/watch?v=W8Vz1bIZRl4"],
    ["Nothing Left to Say", "https://www.youtube.com/watch?v=mGv0ze0lHKA"],
    ["Rocks", "https://www.youtube.com/watch?v=xvebHdAUSKo"],
    ["Working Man", "https://www.youtube.com/watch?v=zkcZFEMfW48"],
    ["Fallen", "https://www.youtube.com/watch?v=qBTnS-K-gA8"],
    [
      "Cha-Ching (Till We Grow Older)",
      "https://www.youtube.com/watch?v=aqrd0xrMahs",
    ],
    ["Working Man", "https://www.youtube.com/watch?v=zkcZFEMfW48"],
    ["My Fault", "https://www.youtube.com/watch?v=w7y-1C15W6w"],
    ["Round And Round", "https://www.youtube.com/watch?v=op5Nzr-17Lk"],
    ["America", "https://www.youtube.com/watch?v=KiO2-R8yKjE"],
    ["Lost Cause", "https://www.youtube.com/watch?v=C466S-Ymhdg"],
    ["Ready Aim Fire", "https://www.youtube.com/watch?v=flLxVHYKeyk"],
    ["Who We Are", "https://www.youtube.com/watch?v=LdMDjf9YDhU"],
    ["Monster", "https://www.youtube.com/watch?v=7vJbBda35us"],
    ["Battle Cry", "https://www.youtube.com/watch?v=ZgB2qItM76g"],
    ["Warriors", "https://www.youtube.com/watch?v=fmI_Ndrxy14"],
    ["Shots", "https://www.youtube.com/watch?v=qQrgto184Tk"],
    ["Gold", "https://www.youtube.com/watch?v=Rl3ELiPXFRo"],
    ["Smoke And Mirrors", "https://www.youtube.com/watch?v=iPaxPKqvoXg"],
    ["I'm So Sorry", "https://www.youtube.com/watch?v=0HgJwrwEEKQ"],
    ["I Bet My Life", "https://www.youtube.com/watch?v=4ht80uzIhNs"],
    ["Polaroid", "https://www.youtube.com/watch?v=z6l5bhPs-PU"],
    ["Friction", "https://www.youtube.com/watch?v=AH6Vqt_oEkw"],
    ["It Comes Back To You", "https://www.youtube.com/watch?v=C3JJrximlgQ"],
    ["Dream", "https://www.youtube.com/watch?v=Xqk9LqK9wYQ"],
    ["Trouble", "https://www.youtube.com/watch?v=k7bAATUtHHo"],
    ["Summer", "https://www.youtube.com/watch?v=KOKz37OJ2R8"],
    ["Hopeless Opus", "https://www.youtube.com/watch?v=91rrbNAJqQ8"],
    ["The Fall", "https://www.youtube.com/watch?v=AuMpkdBwK0I"],
    ["Thief", "https://www.youtube.com/watch?v=U0UqAwtiLBg"],
    ["The Unknown", "https://www.youtube.com/watch?v=GcfEC9tU5e0"],
    ["Second Chances", "https://www.youtube.com/watch?v=0wiPsIdBn-Y"],
    ["Release", "https://www.youtube.com/watch?v=tWQCdcGSais"],
    ["Roots", "https://www.youtube.com/watch?v=PscXGpsF3dY"],
    ["I Was Me", "https://www.youtube.com/watch?v=1KDEzq-Pl0U"],
    ["Not Today", "https://www.youtube.com/watch?v=trig1MiEo1s"],
    ["Levitate", "https://www.youtube.com/watch?v=z0a9k1gSMsw"],
    [
      "Fear (From X Ambassadors’ album VHS)",
      "https://www.youtube.com/watch?v=0y4ynYUuQl0",
    ],
    ["Sucker For Pain", "https://www.youtube.com/watch?v=-59jGD4WrmE"],
    ["I Don't Know Why", "https://www.youtube.com/watch?v=TGXlWQQthFg"],
    ["Whatever It Takes", "https://www.youtube.com/watch?v=gOsM-DYAEhY"],
    ["Believer", "https://www.youtube.com/watch?v=7wtfhZwyrcc"],
    ["Walking The Wire", "https://www.youtube.com/watch?v=1nv9br7P7g0"],
    ["Rise Up", "https://www.youtube.com/watch?v=x12CWu3V0lg"],
    ["I'll Make It Up to You", "https://www.youtube.com/watch?v=q6KvD4kZv94"],
    ["Yesterday", "https://www.youtube.com/watch?v=dJfYS0rVrbk"],
    ["Mouth of the River", "https://www.youtube.com/watch?v=YiZCzG4RF1M"],
    ["Thunder", "https://www.youtube.com/watch?v=fKopy74weus"],
    ["Start Over", "https://www.youtube.com/watch?v=2SD2e0TDb4A"],
    ["Dancing in the Dark", "https://www.youtube.com/watch?v=WFlSIPdYBpE"],
    ["Next To Me", "https://www.youtube.com/watch?v=Txlk7PiHaGk"],
    [
      "Born To Be Yours (with Kygo)",
      "https://www.youtube.com/watch?v=mOFvJVroAJE",
    ],
    ["Natural", "https://www.youtube.com/watch?v=0I647GU3Jsc"],
    ["Boomerang", "https://www.youtube.com/watch?v=Ycemuc7Fk_U"],
    ["Machine", "https://www.youtube.com/watch?v=BahtnT13vH8"],
    ["Cool Out", "https://www.youtube.com/watch?v=x0ZxutzmFUU"],
    ["Bad Liar", "https://www.youtube.com/watch?v=I-QfPUz1es8"],
    ["West Coast", "https://www.youtube.com/watch?v=lgsyzQD-wBY"],
    ["Zero", "https://www.youtube.com/watch?v=j60ClcNYWu4"],
    ["Bullet in a Gun", "https://www.youtube.com/watch?v=LHWYaV6WLQo"],
    ["Digital", "https://www.youtube.com/watch?v=tcbWjCYkQuE"],
    ["Only", "https://www.youtube.com/watch?v=xAn9O9oZG7U"],
    ["Stuck", "https://www.youtube.com/watch?v=dhcj6PoarrA"],
    ["Love", "https://www.youtube.com/watch?v=cQbAm4dIDKA"],
    ["Birds", "https://www.youtube.com/watch?v=vOXZkm9p_zY"],
    ["Burn Out", "https://www.youtube.com/watch?v=AcJ6Vv9pMeA"],
    ["Real Life", "https://www.youtube.com/watch?v=_esJ3ciMH1c"],
    [
      "Heart Upon My Sleeve (Avicii)",
      "https://www.youtube.com/watch?v=j8Iz_hgYjj4",
    ],
    ["My Life", "https://www.youtube.com/watch?v=CBDT9LkrrVc"],
    ["Lonely", "https://www.youtube.com/watch?v=yUbTU1ojKho"],
    ["Wrecked", "https://www.youtube.com/watch?v=Y2NkuFIlLEo"],
    ["Monday", "https://www.youtube.com/watch?v=87hxDd5cvN8"],
    ["#1", "https://www.youtube.com/watch?v=ywhcvOy16_E"],
    ["Easy Come Easy Go", "https://www.youtube.com/watch?v=7CgQEvO4DDk"],
    ["Giants", "https://www.youtube.com/watch?v=zCEA-tm0tmQ"],
    ["It's Ok", "https://www.youtube.com/watch?v=W_yRODJ6kfc"],
    ["Dull Knives", "https://www.youtube.com/watch?v=7mr8go10ICQ"],
    ["Follow You", "https://www.youtube.com/watch?v=k3zimSRKqNw"],
    ["Cutthroat", "https://www.youtube.com/watch?v=89xtgEk9jTo"],
    ["No Time For Toxic People", "https://www.youtube.com/watch?v=wJt2qKPZpsk"],
    ["One Day", "https://www.youtube.com/watch?v=NzImKCeQnX0"],
    [
      "Imagine Dragons (by Ragged Insomnia)",
      "https://www.youtube.com/watch?v=5hNq_7xtVl0",
    ],
    ["Easy", "https://www.youtube.com/watch?v=fPWzQ_z9VYs"],
    ["Hole Inside Our Chests", "https://www.youtube.com/watch?v=_NuspI2KPBA"],
    ["Dolphins", "https://www.youtube.com/watch?v=hcEkPLNNSJo"],
    [
      "Enemy (x J.I.D - from the series Arcane League of Legends)",
      "https://www.youtube.com/watch?v=D9G1VOjN_84",
    ],
    ["Bones", "https://www.youtube.com/watch?v=DYed5whEf4g"],
    ["Sharks", "https://www.youtube.com/watch?v=Te3_VlimRw0"],
    ["Symphony", "https://www.youtube.com/watch?v=f-HjBtN4q6o"],
    ["I Don't Like Myself", "https://www.youtube.com/watch?v=EJy7K5AWutM"],
    ["Blur", "https://www.youtube.com/watch?v=so23_c7lXno"],
    ["Higher Ground", "https://www.youtube.com/watch?v=ZQNSke_9EJ8"],
    ["Crushed", "https://www.youtube.com/watch?v=kw07O6yFka4"],
    ["Take It Easy", "https://www.youtube.com/watch?v=mt-qhy4ItfM"],
    ["Waves", "https://www.youtube.com/watch?v=anLxLPzgIG4"],
    ["I'm Happy", "https://www.youtube.com/watch?v=-hyfscXeOHY"],
    ["Ferris Wheel", "https://www.youtube.com/watch?v=5UwEq-OELmY"],
    ["Peace Of Mind", "https://www.youtube.com/watch?v=3CjIx9K3snI"],
    ["Sirens", "https://www.youtube.com/watch?v=ogEhe_v3UwM"],
    ["Tied", "https://www.youtube.com/watch?v=3pyFAx7k-dc"],
    ["Younger", "https://www.youtube.com/watch?v=FIhonBl-_pM"],
    ["I Wish", "https://www.youtube.com/watch?v=2uQtt5fdmxU"],
    [
      "Continual (feat. Cory Henry)",
      "https://www.youtube.com/watch?v=2U4Naul7CLg",
    ],
    [
      "They Don't Know You Like I Do",
      "https://www.youtube.com/watch?v=XedldcMKJO0",
    ],
    [
      "Love Of Mine - Night Visions Demo",
      "https://www.youtube.com/watch?v=USxRQ9qQZ4s",
    ],
    [
      "Bubble - Night Visions Demo",
      "https://www.youtube.com/watch?v=0ktP6ZacKGg",
    ],
    [
      "Children of the Sky (a Starfield song)",
      "https://www.youtube.com/watch?v=zHfIkyLh-Ew",
    ],
    ["Wake Up", "https://www.youtube.com/watch?v=q392mSz4VeY"],
    ["Nice To Meet You", "https://www.youtube.com/watch?v=NeUfmyu5t8Q"],
    ["Eyes Closed", "https://www.youtube.com/watch?v=v08qmr8m_-w"],
    ["Take Me To The Beach", "https://www.youtube.com/watch?v=7HLrviPwEaU"],
    ["In Your Corner", "https://www.youtube.com/watch?v=wnz2eZ4fffM"],
    ["Gods Don't Pray", "https://www.youtube.com/watch?v=NKcWKS2MW1M"],
    ["Don't Forget Me", "https://www.youtube.com/watch?v=fiBcK6RJp68"],
    ["Kid", "https://www.youtube.com/watch?v=8wETGJ91oY0"],
    ["Fire in These Hills", "https://www.youtube.com/watch?v=baYqOdpsqbg"],
    [
      "Eyes Closed (feat. J Balvin)",
      "https://www.youtube.com/watch?v=WoeFMTbR5Ps",
    ],
    ["Take Me To The Beach (feat. Baker Boy)", "https://www.youtube.com/watch?v=umNELWiCYpk"],
    ["Take Me To The Beach (feat. Ernia)", "https://www.youtube.com/watch?v=8e0162dRcB4"],
    ["Take Me To The Beach (feat. Jungeli)", "https://www.youtube.com/watch?v=OxIU4IWh6Zs"],
    ["Take Me To The Beach (feat. Ado)", "https://www.youtube.com/watch?v=5Duje_sZko8"],
    ["Woke (Demo)", "https://www.youtube.com/watch?v=00BpRESPJpg"],
    ["The Ghost Intervention (Demo)", "https://www.youtube.com/watch?v=pShuY-daffI"],
    ["Monica (Demo)", "https://www.youtube.com/watch?v=kR8LNI61UnU"],
    ["Black (Demo)", "https://www.youtube.com/watch?v=Z2DSV6BOMXo"],
    ["Strange Ways (Demo)", "https://www.youtube.com/watch?v=RXLX8AgeFrY"],
    ["I Get Carried Away (Demo)", "https://www.youtube.com/watch?v=uvGt0svH1SU"],
    ["A-OK (Demo)", "https://www.youtube.com/watch?v=3m0WCMnCflw"],
    ["Destroyed (Demo)", "https://www.youtube.com/watch?v=XTpBPvXatRU"],
    ["Playin' Me (Demo)", "https://www.youtube.com/watch?v=5rn0FmTeIoI"],
    ["My Car (Demo)", "https://www.youtube.com/watch?v=vwf5DEKeUSI"],
    ["Cowboy (Demo)", "https://www.youtube.com/watch?v=tV2RVJh5B7E"],
    ["Mayday (Demo)", "https://www.youtube.com/watch?v=ZdBzrryoE5Q"],
    ["The Journey (Demo)", "https://www.youtube.com/watch?v=KS0CY606d90"],
    ["I Bet My Life (Demo)", "https://www.youtube.com/watch?v=kJXNseMwfwA"],
    ["Enemy (Opening Title Version from Arcane)", "https://www.youtube.com/watch?v=UqcE-IIevf0"]
  ];

  function randomiser() {
    return Math.floor(Math.random() * songs.length);
  }

  let scheduledMessage = new CronJob(
    "00 00 10,22 * * *",
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
          "Vote for your favorite song by reacting with 1️⃣ or 2️⃣!"
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
