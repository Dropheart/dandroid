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

    const webhookID = new WebhookClient({ id: config.webhookID_id, token: config.webhookID_token });
    const webhookDan = new WebhookClient({ id: config.webhookDan_id, token: config.webhookDan_token });
    const webhookPlatz = new WebhookClient({ id: config.webhookPlatz_id, token: config.webhookPlatz_token });
    const webhookWayne = new WebhookClient({ id: config.webhookWayne_id, token: config.webhookWayne_token });
    const webhookBen = new WebhookClient({ id: config.webhookBen_id, token: config.webhookBen_token });

    client.once('ready', () => {
      var stream = T.stream('statuses/filter', { follow: twitterAccs });
      console.log('Stream enabled for: @imaginedragons, @danreynolds, @danielplatzman, @waynesermon, @benamckee');
      stream.on('tweet', function (tweet) {
        console.log(tweet);
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
            // if (tweet.truncated == true) {
            //  if ((tweet.extended_tweet.full_text.includes('National Marrow Donor')) && (tweet.extended_tweet.full_text.includes('clown'))) {
            //    return;
            //  }
            //}
            if (!(tweet.in_reply_to_status_id && tweet.in_reply_to_status_id_str && tweet.in_reply_to_user_id && in_reply_to_user_id_str && in_reply_to_screen_name)) {
              webhookBen.send(url);
            }
            } catch (error) {
                console.error(error);
          } 
        }
      });
    });
}