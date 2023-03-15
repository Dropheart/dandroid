module.exports = (client) => {
  const { WebhookClient } = require('discord.js');
  const { TwitterApi, ETwitterStreamEvent } = require('twitter-api-v2');
  const config = require("../config.json");
  var twitterAccs = [ '75916180','1450386817','174112306','551162023','567474604' ];
  // Twitter IDs of: @imaginedragons, @danreynolds, @danielplatzman, @waynesermon, @benamckee
  
  const twitter = new TwitterApi(config.twitter_bearer);

  const webhookID = new WebhookClient({ id: config.webhookID_id, token: config.webhookID_token });
  const webhookDan = new WebhookClient({ id: config.webhookDan_id, token: config.webhookDan_token });
  const webhookPlatz = new WebhookClient({ id: config.webhookPlatz_id, token: config.webhookPlatz_token });
  const webhookWayne = new WebhookClient({ id: config.webhookWayne_id, token: config.webhookWayne_token });
  const webhookBen = new WebhookClient({ id: config.webhookBen_id, token: config.webhookBen_token });

  

  client.once('ready', async () => {
    const stream = await twitter.v2.searchStream({ 'user.fields': ['username'], expansions: ['author_id']});

    const addedRules  = await twitter.v2.updateStreamRules({
      add: [
         {value: '-is:retweet -is:reply (from:75916180 OR from:1450386817 OR from:174112306 OR from:551162023 OR from:567474604)', tag: 'userIds'}
      ]
    });

    console.log('Stream enabled for: @imaginedragons, @danreynolds, @danielplatzman, @waynesermon, @benamckee');

    stream.on(ETwitterStreamEvent.Data, (tweet) => {
      console.log(tweet);
      console.log(tweet.includes);
      var url = "https://twitter.com/" + tweet.includes.users[0].username + "/status/" + tweet.data.id;
      console.log(url);
      if (tweet.author_id == '75916180'){
        try {
          webhookID.send(url);
        } catch (error) {
              console.error(error);
        } 
      } else if (tweet.author_id == '1450386817'){
        try {
          webhookDan.send(url);
        } catch (error) {
              console.error(error);
        } 
      } else if (tweet.author_id == '174112306'){
        try {
          webhookPlatz.send(url);
        } catch (error) {
              console.error(error);
        } 
      } else if (tweet.author_id == '551162023'){
        try {
          webhookWayne.send(url);
        } catch (error) {
              console.error(error);
        } 
      } else if (tweet.author_id == '567474604'){
        try {
          webhookBen.send(url);
        } catch (error) {
          console.error(error);
        } 
      }
    });

  });
}