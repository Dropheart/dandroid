module.exports = (client) => {
    const { WebhookClient } = require('discord.js');
    const Twit = require('twit');
    const config = require("../config.json");
    var twitterAccs = [ '75916180','1450386817','174112306','551162023','567474604' ];
    // Twitter IDs of: @imaginedragons, @danreynolds, @danielplatzman, @waynesermon, @benamckee
    
    var T = new Twit({
        consumer_key: config.consumer_key,
        consumer_secret: config.consumer_secret,
        access_token: config.access_token,
        access_token_secret: config.access_token_secret,
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
        strictSSL:            true,     // optional - requires SSL certificates to be valid.
    });

    const webhookID = new WebhookClient(config.webhookID_id, config.webhookID_token);
    const webhookDan = new WebhookClient(config.webhookDan_id, config.webhookDan_token);
    const webhookPlatz = new WebhookClient(config.webhookPlatz_id, config.webhookPlatz_token);
    const webhookWayne = new WebhookClient(config.webhookWayne_id, config.webhookWayne_token);
    const webhookBen = new WebhookClient(config.webhookBen_id, config.webhookBen_token);

    client.once('ready', () => {
      var stream = T.stream('statuses/filter', { follow: twitterAccs });
      console.log('Stream enabled for: @imaginedragons, @danreynolds, @danielplatzman, @waynesermon, @benamckee');
      stream.on('tweet', function (tweet) {
        var url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
        if (tweet.user.id_str == '75916180'){
          try {
            webhookID.send(url);
          } catch (error) {
                console.error(error);
          } 
        } else if (tweet.user.id_str == '1450386817'){
          try {
            webhookDan.send(url);
          } catch (error) {
                console.error(error);
          } 
        } else if (tweet.user.id_str == '174112306'){
          try {
            webhookPlatz.send(url);
          } catch (error) {
                console.error(error);
          } 
        } else if (tweet.user.id_str == '551162023'){
          try {
            webhookWayne.send(url);
          } catch (error) {
                console.error(error);
          } 
        } else if (tweet.user.id_str == '567474604'){
          try {
            webhookBen.send(url);
          } catch (error) {
                console.error(error);
          } 
        }
      });
    });
}