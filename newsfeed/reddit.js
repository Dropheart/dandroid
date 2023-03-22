module.exports = async (client) => {

    const { EmbedBuilder } = require('discord.js');
    const { SubmissionStream } = require('snoostorm');
    Snoowrap = require('snoowrap');
    config = require('../config.json');
    redditchannel = await client.channels.fetch(config.redditChannel);
    connectedAt = Date.now() / 1000;
    let url = "httpS://reddit.com/";

    const wrapper = new Snoowrap({
        userAgent: config.reddit_userAgent,
        clientId: config.reddit_clientID,
        clientSecret: config.reddit_clientSecret,
        refreshToken: config.reddit_refreshToken
    });

    const submissions = new SubmissionStream(wrapper, {
        subreddit: "imaginedragons",
        limit: 0,
        pollTime: 2000,
    });

    //submissions.on("item", console.log);

    submissions.on("item", function(post) {
        if (connectedAt > post.created_utc) {
            return;
        }

        url = "https://reddit.com" + post.permalink;

        embed = new EmbedBuilder()
        .setTitle(post.title)
        .setURL(url)
        .setColor("ff4500")
        .setTitle("Posted by u/" + post.author.name)
        .setTimestamp();

        if (post.post_hint == 'image') {
            embed.addField(post.title, post.url)
            embed.setImage(post.url)
        } else if (post.post_hint) {
            embed.addField(post.title, post.url)
        } else if (post.selftext) {
            embed.addField(post.title, post.selftext)
        } else {
            embed.addField(post.title, '_No selftext was provided_')
        }


        client.channels.cache.get(config.redditChannel).send({ embeds: [embed] });
    })
    .on('error', console.error);
}