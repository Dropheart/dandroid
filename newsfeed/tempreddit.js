const rssfeeder = require('rss-feed-emitter')
const feeder = new rssfeeder({ skipFirstLoad: true });

module.exports = async (client) => {
    client.once('ready', async () => {
        feeder.add({
            url: 'http://feeds.feedburner.com/psblog',
        })
        
        const blog = await client.guilds.resolve('226576492782551042').channels.resolve('294453624543903744')
        console.log('blog is ready')
        feeder.on('new-item', async function(item) {
            message = await blog.send(item.link)
            message.crosspost()
        })

    })
}