module.exports = (client, member) => {
    if (member.user.username.toLowerCase().includes('h0nde') || member.user.username.toLowerCase().includes('h0nda')) member.ban({ days: 7, reason: 'Automatic ban for h0nde spambot accounts.' })
}