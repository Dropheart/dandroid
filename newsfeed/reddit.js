
module.exports = async (client) => {

    const { MessageEmbed } = require('discord.js')
    reddit = require('reddit-snooper')
    config = require('../config.json')
    redditchannel = await client.channels.fetch(config.redditChannel);

    snooper = new reddit({
        automatic_retries: false,
        api_requests_per_minute: 60
    })

    snooper.watcher.getPostWatcher('imaginedragons')
    .on('post', function(post) {
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
    .on('error', console.error)
}