module.exports = (client) => {
  const { WebhookClient } = require('discord.js');
  const { TwitterApi, ETwitterStreamEvent } = require('twitter-api-v2');
  const config = require("../config.json");
  // var twitterAccs = [ '75916180','1450386817','174112306','551162023','567474604' ];
  // Twitter IDs of: @imaginedragons, @danreynolds, @danielplatzman, @waynesermon, @benamckee
  
  const twitter = new TwitterApi(config.twitter_bearer);

  const webhookID = new WebhookClient({ id: config.webhookID_id, token: config.webhookID_token });
  const webhookDan = new WebhookClient({ id: config.webhookDan_id, token: config.webhookDan_token });
  const webhookPlatz = new WebhookClient({ id: config.webhookPlatz_id, token: config.webhookPlatz_token });
  const webhookWayne = new WebhookClient({ id: config.webhookWayne_id, token: config.webhookWayne_token });
  const webhookBen = new WebhookClient({ id: config.webhookBen_id, token: config.webhookBen_token });  

  client.once('ready', async () => {
    const stream = await twitter.v2.searchStream({ 'user.fields': ['username'], expansions: ['author_id']});

    // Add rules to only get tweets by specific accounts
    const addedRules  = await twitter.v2.updateStreamRules({
      add: [
        {value: '-is:retweet -is:reply (from:75916180 OR from:1450386817 OR from:174112306 OR from:551162023 OR from:567474604)', tag: 'userIds'}
        ]
    });

    // Check if Stream is running and rules have been applied
    try {
      const rules = await twitter.v2.streamRules();
      console.log(rules.data);
      console.log('Stream enabled for: @imaginedragons, @danreynolds, @danielplatzman, @waynesermon, @benamckee')
    } catch (error) {
      console.error(error);
    }

    stream.on(ETwitterStreamEvent.Data, (tweet) => {
      console.log(tweet);
      console.log(tweet.includes);
      var url = "https://twitter.com/" + tweet.includes.users[0].username + "/status/" + tweet.data.id;
      console.log(url);

      try {
        switch(tweet.data.author_id) {
          case '75916180': webhookID.send(url); break;
          case '1450386817': webhookDan.send(url); break;
          case '174112306': webhookPlatz.send(url); break;
          case '551162023': webhookWayne.send(url); break;
          case '567474604': webhookBen.send(url);
        }
      } catch (error) {
        console.error(error);
      }

    });

    stream.on(
      // Emitted when Node.js {response} emits a 'error' event (contains its payload).
      ETwitterStreamEvent.ConnectionError,
      err => console.log('Connection error!', err),
    );

    // Enable reconnect feature
    stream.autoReconnect = true;

  });
}