module.exports = async (client) => {

    const { MessageEmbed } = require('discord.js');
    const { SubmissionStream } = require('snoostorm');
    Snoowrap = require('snoowrap');
    config = require('../config.json');
    redditchannel = await client.channels.fetch(config.redditChannel);
    let url = "httpS://reddit.com/";

    const wrapper = new Snoowrap({
        userAgent: config.reddit_userAgent,
        clientId: config.reddit_clientID,
        clientSecret: config.reddit_clientSecret,
        refreshToken: config.reddit_refreshToken
    });

    const submissions = new SubmissionStream(wrapper, {
        subreddit: "imaginedragons",
        limit: 1,
        pollTime: 2000,
    });

    submissions.on("item", console.log);

    // ToDo: Change embed Builder to work with Snoostorm
    /*submissions.on('item', function(post) {
        if (url == post.data.url) {
            return;
        }
        url = post.data.url 
        embed = new MessageEmbed()
        .setTitle(post.data.title)
        .setURL(`https://reddit.com${post.data.permalink}`)
        .setColor('ff4500')
        .setTitle(`Posted by u/${post.data.author}`)
        .setTimestamp()
        
        if (post.data.post_hint == 'image') {
            embed.addField(post.data.title, post.data.url)
            embed.setImage(post.data.url)
            console.log('1')
        } else if (post.data.post_hint) {
            embed.addField(post.data.title, post.data.url)
            console.log('4')
        } else if (post.data.selftext) {
            embed.addField(post.data.title, post.data.selftext)
            console.log('2')
        } else {
            embed.addField(post.data.title, '_No selftext was provided_')
            console.log('3')
        }

        client.channels.cache.get(config.redditChannel).send(embed)

    })
    .on('error', console.error)*/
}